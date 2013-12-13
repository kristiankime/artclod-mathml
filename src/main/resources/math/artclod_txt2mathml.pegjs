start = v:Term_AddSub
  { return "<math> " + v + " </math>"; }
 
// =====  Add/Sub Term =====
Term_AddSub = s:Term_MulDiv ws v:(Add / Sub)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}
 
Add = "+" ws v:Term_MulDiv
  { return (function(a){return "<apply> <plus/> " + a + " " + v + " </apply>";}) ;} 
 
Sub = "-" ws v:Term_MulDiv
  { return (function(a){return "<apply> <minus/> " + a + " " + v + " </apply>";}) ;} 
 
// ===== Mult/Div Term =====
Term_MulDiv = s:Term_Exp ws v:(Mul / Div)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}
 
Mul = "*" ws v:Term_Exp
  { return (function(a){return "<apply> <times/> " + a + " " + v + " </apply>";}) ;}
 
Div = "/" ws v:Term_Exp
  { return (function(a){return "<apply> <divide/> " + a + " " + v + " </apply>";}) ;}
 
// =====  Exp Term =====
Term_Exp = s:Term_Parens ws v:(Exp)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}
 
Exp = "^" ws v:Term_Parens
  { return (function(a){return "<apply> <power/> " + a + " " + v + " </apply>";}) ;}
 
// =====  Parens Term =====
Term_Parens = s:Term_Functions ws v:(Parens)*
  { return (v.length > 0 ? "<apply> <mult/> " + s + " " + v + " </apply>" : s); }

Parens = ws "(" ws v:Term_AddSub ws ")"
  { return v; }

// ==== Function Terms  ====
Term_Functions = s:Primary v:(Functions)*
  { for(var r = s, i=0; i<v.length; i++){ r += v[i]; }; return r; }

Functions = (power / trig)

power = (exp / log / ln)

exp = "exp(" ws b:(Term_AddSub ws ",")? e:Term_AddSub ")"
  { return "<apply> <power/> " + (b ? b[0] : "<exponentiale/>") + " " + e + " </apply>"; }

log = "log(" ws b:(Number ws ',')? v:Term_AddSub ")"
  { return "<apply> <log/> " + (b ? "<logbase> " + b[0] + " </logbase> " : "") + v + " </apply>"; } 

ln = "ln(" v:Term_AddSub ")"
  { return "<apply> <ln/> " + v + " </apply>"; } 

trig = (sin / cos / tan / sec / csc / cot)

sin = "sin(" v:Term_AddSub ")"
  { return "<apply> <sin/> " + v + " </apply>"; } 

cos = "cos(" v:Term_AddSub ")"
  { return "<apply> <cos/> " + v + " </apply>"; } 

tan = "tan(" v:Term_AddSub ")"
  { return "<apply> <tan/> " + v + " </apply>"; } 

sec = "sec(" v:Term_AddSub ")"
  { return "<apply> <sec/> " + v + " </apply>"; } 

csc = "csc(" v:Term_AddSub ")"
  { return "<apply> <csc/> " + v + " </apply>"; } 

cot = "cot(" v:Term_AddSub ")"
  { return "<apply> <cot/> " + v + " </apply>"; } 

// ==== Primary  ====
Primary = ws v:(Functions / Parens / Constant / Number / Neg / Variable)
  { return v; }

Neg = "-" v:Primary
  { return "<apply> <minus/> " + v + " </apply>"; }

Variable = [xX]
  { return "<ci> x </ci>"; }

// ==== Constant ====
Constant = (E / Pi)

E = ('e' / 'E' )
  { return "<exponentiale/>"; }

Pi = ('Pi' / 'pi' )
  { return "<pi/>"; }

// ==== Numbers ==== 
Number = s:Scientific
  { return "<cn> " + s + " </cn>"; }
Scientific = f:Floating s:( ('e' / 'E' ) Integer )?
  { return f + (s ? s[0] + s[1]: ""); }
Floating = i:Integer u:('.' Unsigned )?
  { return i + (u ? u[0] + u[1].join("") : ""); }
Integer = s:Sign? u:Unsigned
  { return (s ? s : "") + u.join(""); }
Unsigned = [0-9]+
Sign = '-' / '+'

// ==== Whitespace ====
ws "whitespace"  = [ \t\n\r]*
