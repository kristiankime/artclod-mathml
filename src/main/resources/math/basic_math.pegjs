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
Term_Exp = s:Primary v:(Exp)*
  { for(var r = s, i=0; i<v.length; i++){ r = Math.pow(r, v[i]); }; return r; }
 
Exp = "^" v:Primary
  { return v; }
 
// ====== Primary  ====
Primary = (Parens / Neg / Number )
 
Parens = "(" ws v:Term_AddSub ws ")"
  { return v; }
 
Neg = "-" v:Primary
  { return -1 * v; }
 
Number = digits:([0-9]+) 
  { return parseInt(digits.join(""), 10); }
  
ws "whitespace"
  = [ \t\n\r]*