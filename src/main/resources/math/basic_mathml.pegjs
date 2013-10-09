start = Term_AddSub
 
// =====  Add/Sub Term(s) =====
Term_AddSub = s:Term_MulDiv v:(Add / Sub)*
{ for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}
 
Add = "+" v:Term_MulDiv
  { return (function(a){return "<apply> <plus/> " + a + " " + v + "</apply>";}) ;} 
 
Sub = "-" v:Term_MulDiv
  { return (function(a){return "<apply> <minus/> " + a + " " + v + "</apply>";}) ;} 
 
// ===== Mult/Div Term(s) =====
Term_MulDiv = s:Term_Exp v:(Mul / Div)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}
 
Mul = "*" v:Term_Exp
  { return (function(a){return "<apply> <times/> " + a + " " + v + "</apply>";}) ;}
 
Div = "/" v:Term_Exp
  { return (function(a){return "<apply> <divide/> " + a + " " + v + "</apply>";}) ;}
 
// =====  Exp Term(s) =====
Term_Exp = s:Primary v:(Exp)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}
 
Exp = "^" v:Primary
  { return (function(a){return "<apply> <power/> " + a + " " + v + "</apply>";}) ;}
 
// ====== Primary  ====
Primary = (Parens / Neg / Number / Variable)
 
Parens = "(" v:Term_AddSub ")"
  { return v; }
 
Neg = "-" v:Primary
  { return "<apply><minus/>" + v +"</apply>"; }
 
Number = digits:([0-9]+) 
  { return "<ci> " + digits.join("") + " </ci>"}
 
Variable = [xX]
  { return "<ci> x </ci>"}