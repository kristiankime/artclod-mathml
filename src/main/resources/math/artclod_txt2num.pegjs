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
 
Exp = "^" ws v:Primary
  { return v; }
 
// ===== Parens Term =====
Term_Parens = s:Term_Functions v:(Parens)*
  { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; }; return r; }

Parens = ws "(" ws v:Term_AddSub ws ")"
  { return v; }

// ==== Function Terms  ====
Term_Functions = s:Primary v:(Functions)*
  { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; }; return r; }

Functions = (exp / log)

exp = "exp(" ws b:Term_AddSub ws "," e:Term_AddSub ")"
  { return Math.pow(b, e); } 

log = "log(" ws b:Number ws "," v:Term_AddSub ")"
  { return Math.log(v) / Math.log(b); } 

// ==== Primary  ====
Primary = ws v:(Functions / Parens / Number / Neg )
  { return v; }
 
Neg = "-" v:Primary
  { return -1 * v; }

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