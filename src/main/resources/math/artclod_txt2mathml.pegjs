start = Term_AddSub
 
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
Term_Exp = s:Term_Parens v:(Exp)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}
 
Exp = "^" v:Primary
  { return (function(a){return "<apply> <power/> " + a + " " + v + " </apply>";}) ;}
 
// =====  Parens Term =====
Term_Parens = s:Primary ws v:(Parens)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}

Parens = "(" ws v:Term_AddSub ws ")"
  { return v; }

// ==== Primary  ====
Primary = v:(Parens / Neg / Number )
  { return v; }

Neg = "-" v:Primary
  { return "<apply> <minus/> " + v + " </apply>"; }

Variable = [xX]
  { return "<ci> x </ci>"; }

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