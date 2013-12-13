start = Term_AddSub
 
// =====  Add/Sub Term =====
Term_AddSub = s:Term_MulDiv ws v:(Add / Sub)*
  { for(var r = s, i=0; i<v.length; i++){ r += v[i]; }; return r; }
 
Add = "+" ws v:Term_MulDiv
  { return v; }
 
Sub = "-" ws v:Term_MulDiv
  { return -1 * v; }
 
// ===== Mult/Div Term =====
Term_MulDiv = s:Term_Exp ws v:(Mul / Div)*
  { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; } return r; }
 
Mul = "*" ws v:Term_Exp
  { return v; }
 
Div = "/" ws v:Term_Exp
  { return 1 / v; }
 
// =====  Exp Term =====
Term_Exp = s:Term_Parens ws v:(Exp)*
  { for(var r = s, i=0; i<v.length; i++){ r = Math.pow(r, v[i]); }; return r; }
 
Exp = "^" ws v:Term_Parens
  { return v; }
 
// ===== Parens Term =====
Term_Parens = s:Term_Functions ws v:(Parens)*
  { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; }; return r; }

Parens = ws "(" ws v:Term_AddSub ws ")"
  { return v; }

// ==== Function Terms  ====
Term_Functions = s:Primary v:(Functions)*
  { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; }; return r; }

Functions = (power / trig)

power = (exp / log / ln)

exp = "exp(" ws b:Term_AddSub ws "," e:Term_AddSub ")"
  { return Math.pow(b, e); } 

log = "log(" ws b:(Number ws ',')? v:Term_AddSub ")"
  { return Math.log(v) / Math.log((b ? b[0] : 10)); } 

ln = "ln(" v:Term_AddSub ")"
  { return Math.log(v); }

trig = (sin / cos / tan / sec / csc / cot)

sin = "sin(" v:Term_AddSub ")"
  { return Math.sin(v); }

cos = "cos(" v:Term_AddSub ")"
  { return Math.cos(v); }

tan = "tan(" v:Term_AddSub ")"
  { return Math.tan(v); }

sec = "sec(" v:Term_AddSub ")"
  { return 1/Math.cos(v); }

csc = "csc(" v:Term_AddSub ")"
  { return 1/Math.sin(v); }

cot = "cot(" v:Term_AddSub ")"
  { return 1/Math.tan(v); }


// ==== Primary  ====
Primary = ws v:(Functions / Parens / Constant / Number / Neg )
  { return v; }
 
Neg = "-" v:Primary
  { return -1 * v; }

// ==== Constant ====
Constant = (E / Pi)

E = ('e' / 'E' )
  { return Math.E; }

Pi = ('Pi' / 'pi' )
  { return Math.PI; }

// ==== Numbers ====
Number = s:Scientific
  { return parseFloat(s); }
Scientific = f:Floating s:( ('e' / 'E' ) Integer )?
  { return f + (s ? s[0] + s[1]: ""); }
Floating = i:Integer u:('.' Unsigned )?
  { return i + (u ? u[0] + u[1].join("") : ""); }
Integer = s:Sign? u:Unsigned
  { return (s ? s : "") + u.join(""); }
Unsigned = [0-9]+
Sign = '-' / '+'

// ==== Whitespace ====
ws "whitespace" = [ \t\n\r]*