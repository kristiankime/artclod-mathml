start = v:Term_AddSub ws
  { return '<math xmlns="http://www.w3.org/1998/Math/MathML"> ' + v + ' </math>'; }

// =====  Add/Sub Term =====
Term_AddSub = s:Term_MulDiv v:(Add / Sub)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}

Add = ws "+" ws v:Term_MulDiv
  { return (function(a){return "<apply> <plus/> " + (a ? a + " " : "") + v + " </apply>";}) ;}

Sub = ws "-" ws v:Term_MulDiv
  { return (function(a){return "<apply> <minus/> " + (a ? a + " " : "") + v + " </apply>";}) ;}

// ===== Mult/Div Term =====
Term_MulDiv = s:Term_Exp  v:(Mul / Div)*
  { for(var r=s,i=0;i<v.length;i++){ r = v[i](r); }; return r;}

Mul =  ws "*" ws v:Term_Exp
  { return (function(a){return "<apply> <times/> " + a + " " + v + " </apply>";}) ;}

Div = ws "/" ws v:Term_Exp
  { return (function(a){return "<apply> <divide/> " + a + " " + v + " </apply>";}) ;}

// =====  Exp Term =====
Term_Exp = n:("-")? s:Term_Parens v:Exp?
  { 
    var t = (v ? v(s) : s); 
    return (n ? "<apply> <minus/> " + t  + " </apply>" : t);
  }

Exp = ws "^" ws n:("-")? ws v:Term_Parens
  { 
    var pre = (n ? "<apply> <minus/> " : "" );
    var post = (n ? " </apply>" : "" );
    return (function(a){return "<apply> <power/> " + a + " " + pre + v + post + " </apply>";}) ;
  }

// =====  Parens Term =====
Term_Parens = s:(Term_Functions / Parens)
  { return s; }

Parens = ws "(" ws v:Term_AddSub ws ")"
  { return v; }

// ==== Function Terms  ====
Term_Functions = s:(Primary / Functions)
  { return s; }

Functions = (power / trig / root)

power = (exp / log / ln)

exp = "exp(" ws b:(Term_AddSub ws ",")? e:Term_AddSub ws ")"
  { return "<apply> <power/> " + (b ? b[0] : "<exponentiale/>") + " " + e + " </apply>"; }

log = (logParameter / log_)

logParameter = "log(" ws b:(Number ws ',')? v:Term_AddSub ws ")"
  { return "<apply> <log/> " + (b ? "<logbase> " + b[0] + " </logbase> " : "") + v + " </apply>"; }

log_ = "log_" b:Number "(" ws v:Term_AddSub ws ")"
  { return "<apply> <log/> <logbase> " + b + " </logbase> " + v + " </apply>"; }

ln = "ln(" v:Term_AddSub ws ")"
  { return "<apply> <ln/> " + v + " </apply>"; }

trig = (sin / cos / tan / sec / csc / cot)

sin = "sin(" v:Term_AddSub ws ")"
  { return "<apply> <sin/> " + v + " </apply>"; }

cos = "cos(" v:Term_AddSub ws ")"
  { return "<apply> <cos/> " + v + " </apply>"; }

tan = "tan(" v:Term_AddSub ws ")"
  { return "<apply> <tan/> " + v + " </apply>"; }

sec = "sec(" v:Term_AddSub ws ")"
  { return "<apply> <sec/> " + v + " </apply>"; }

csc = "csc(" v:Term_AddSub ws ")"
  { return "<apply> <csc/> " + v + " </apply>"; }

cot = "cot(" v:Term_AddSub ws ")"
  { return "<apply> <cot/> " + v + " </apply>"; }

root = (sqrt / rootN)

sqrt = "sqrt(" v:Term_AddSub ws ")"
  { return "<apply> <root/> " + v + " </apply>"; }

rootN = "root(" ws n:Number ws ")(" v:Term_AddSub ws ")"
  { return "<apply> <root/> <degree> " + n + " </degree> " + v + " </apply>"; }

// ==== Primary  ====
Primary = ws v:(Functions / Parens / Constant / Number /  Variable)
  { return v; }

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
Floating = i:Unsigned u:('.' Unsigned )?
  { return i + (u ? u[0] + u[1] : ""); }
Integer = s:Sign? u:Unsigned
  { return (s ? s : "") + u; }
Unsigned = v:([0-9]+)
  { return v.join(""); }
Sign = '-'/'+'

// ==== Whitespace ====
ws "whitespace"  = [ \t\n\r]*
  { return "<exponentiale/>"; }
