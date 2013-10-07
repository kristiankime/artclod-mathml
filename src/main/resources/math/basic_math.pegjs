start = Term_AddSub
 
// =====  Add/Sub Term =====
Term_AddSub = s:Term_MulDiv v:(Add / Sub)*
  { for(var r = s, i=0; i<v.length; i++){ r += v[i]; }; return r; }
 
Add = "+" v:Term_MulDiv
  { return v; }
 
Sub = "-" v:Term_MulDiv
  { return -1 * v; }
 
// ===== Mult/Div Term =====
Term_MulDiv = s:Term_Exp v:(Mul / Div)*
  { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; } return r; }
 
Mul = "*" v:Term_Exp
  { return v; }
 
Div = "/" v:Term_Exp
  { return 1 / v; }
 
// =====  Exp Term =====
Term_Exp = s:Primary v:(Exp)*
  { for(var r = s, i=0; i<v.length; i++){ r = Math.pow(r, v[i]); }; return r; }
 
Exp = "^" v:Primary
  { return v; }
 
// ====== Primary  ====
Primary = (Parens / Neg / Number )
 
Parens = "(" v:Term_AddSub ")"
  { return v; }
 
Neg = "-" v:Primary
  { return -1 * v; }
 
Number = digits:([0-9]+) 
  { return parseInt(digits.join(""), 10); }