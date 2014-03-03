
test("Adding two numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Adding three numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4+7"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>');
});

test("Adding two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 + 4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Subtracting two numbers", function() {
    equal(ARTC.txt2MathML.parse("2-4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Subtracting three numbers", function() {
    equal(ARTC.txt2MathML.parse("12-4-7"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <apply> <minus/> <cn> 12 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>');
});

test("Subtracting two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 - 4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Multplying two numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Multplying three numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4*4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 4 </cn> </apply> </math>');
});

test("Multplying two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2* 4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Dividing two numbers", function() {
    equal(ARTC.txt2MathML.parse("2/4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Dividing three numbers", function() {
    equal(ARTC.txt2MathML.parse("4/2/2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <apply> <divide/> <cn> 4 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>');
});

test("Dividing two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 /4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Multiplication takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("3+2*4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 3 </cn> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </apply> </math>');
});

test("Raising a number to a power", function() {
    equal(ARTC.txt2MathML.parse("2^4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("Raising a number to a power twice", function() {
    equal(ARTC.txt2MathML.parse("2^2^4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 4 </cn> </apply> </math>');
});

test("Powers takes precidence over multiplication", function() {
    equal(ARTC.txt2MathML.parse("2*4^2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("Powers takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("5+4^2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("Parentheses can be parsed", function() {
    equal(ARTC.txt2MathML.parse("(2+2)+2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>');
});

test("Parentheses change order of operations", function() {
    equal(ARTC.txt2MathML.parse("(2+2)*8"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 8 </cn> </apply> </math>');
});

test("- negates number", function() {
    equal(ARTC.txt2MathML.parse("-5"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> -5 </cn> </math>');
});

test("- negates arbitrary term", function() {
    equal(ARTC.txt2MathML.parse("5+-(5*3)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <minus/> <apply> <times/> <cn> 5 </cn> <cn> 3 </cn> </apply> </apply> </apply> </math>');
});

test("can add a - term", function() {
    equal(ARTC.txt2MathML.parse("5+-1"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <cn> -1 </cn> </apply> </math>');
});

test("Subtracting a negative number", function() {
    equal(ARTC.txt2MathML.parse("2--4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> -4 </cn> </apply> </math>');
});

test("Can parse decimals", function() {
    equal(ARTC.txt2MathML.parse("2.4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> 2.4 </cn> </math>');
});

test("Can parse scientific notation", function() {
    equal(ARTC.txt2MathML.parse("2.4e3"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> 2.4e3 </cn> </math>');
});

test("Can parse negatives with scientific notation", function() {
    equal(ARTC.txt2MathML.parse("-2.4e3"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> -2.4e3 </cn> </math>');
});

test("Can parse number then parens", function() {
    equal(ARTC.txt2MathML.parse("7(4 + 5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>');
});

test("Can parse number then space then parens", function() {
    equal(ARTC.txt2MathML.parse("7 (4 + 5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>');
});

test("Can parse back to back parens", function() {
    equal(ARTC.txt2MathML.parse("(3 + 6)(4 + 5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <plus/> <cn> 3 </cn> <cn> 6 </cn> </apply> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>');
});

test("Can parse 2^2+(3*(5^(-1*-2)))", function() {
    equal(ARTC.txt2MathML.parse("2^2+(3*(5^(-1*-2)))"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 5 </cn> <apply> <times/> <cn> -1 </cn> <cn> -2 </cn> </apply> </apply> </apply> </apply> </math>');
});

test("can parse 2.5e1 + 6.2", function() {
    equal(ARTC.txt2MathML.parse("2.5e1 + 6.2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2.5e1 </cn> <cn> 6.2 </cn> </apply> </math>');
});

test("Can parse x as a variable", function() {
    equal(ARTC.txt2MathML.parse("x"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <ci> x </ci> </math>');
});

test("Can parse an equation with x in it", function() {
    equal(ARTC.txt2MathML.parse("3 + (4 - -x)^3"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 3 </cn> <apply> <power/> <apply> <minus/> <cn> 4 </cn> <apply> <minus/> <ci> x </ci> </apply> </apply> <cn> 3 </cn> </apply> </apply> </math>');
});

test("Can parse log with base", function() {
    equal(ARTC.txt2MathML.parse("log(4, 4)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <logbase> <cn> 4 </cn> </logbase> <cn> 4 </cn> </apply> </math>');
});

test("Can parse log without base (defaults to 10)", function() {
    equal(ARTC.txt2MathML.parse("log(10)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <cn> 10 </cn> </apply> </math>');
});

test("Can parse log with base after _ i.e. log_2(4)", function() {
    equal(ARTC.txt2MathML.parse("log_2(4)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <logbase> <cn> 2 </cn> </logbase> <cn> 4 </cn> </apply> </math>');
});

test("Can parse ln", function() {
    equal(ARTC.txt2MathML.parse("ln(10)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <ln/> <cn> 10 </cn> </apply> </math>');
});

test("Can parse exp", function() {
    equal(ARTC.txt2MathML.parse("exp(10, 2)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <cn> 10 </cn> <cn> 2 </cn> </apply> </math>');
});

test("Can parse exp with one value, e is default base", function() {
    equal(ARTC.txt2MathML.parse("exp(2)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <exponentiale/> <cn> 2 </cn> </apply> </math>');
});

test("Can parse e", function() {
    equal(ARTC.txt2MathML.parse("e"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <exponentiale/> </math>');
});

test("Can parse pi", function() {
    equal(ARTC.txt2MathML.parse("pi"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <pi/> </math>');
});

test("Can parse sin", function() {
    equal(ARTC.txt2MathML.parse("sin(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <sin/> <pi/> </apply> </math>');
});

test("Can parse cos", function() {
    equal(ARTC.txt2MathML.parse("cos(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <cos/> <pi/> </apply> </math>');
});

test("Can parse tan", function() {
    equal(ARTC.txt2MathML.parse("tan(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <tan/> <pi/> </apply> </math>');
});

test("Can parse sec", function() {
    equal(ARTC.txt2MathML.parse("sec(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <sec/> <pi/> </apply> </math>');
});

test("Can parse csc", function() {
    equal(ARTC.txt2MathML.parse("csc(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <csc/> <pi/> </apply> </math>');
});

test("Can parse cot", function() {
    equal(ARTC.txt2MathML.parse("cot(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <cot/> <pi/> </apply> </math>');
});

test("Can parse symbols and function names", function() {
    equal(ARTC.txt2MathML.parse("3*exp(10, 2)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 10 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("Can parse function implicit times function", function() {
    equal(ARTC.txt2MathML.parse("cos(x) cos(x)"),"<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <cos/> <ci> x </ci> </apply> <apply> <cos/> <ci> x </ci> </apply> </apply> </math>");
});

/*
test("Can parse power then parens", function() {
    equal(ARTC.txt2MathML.parse("2^2(2)"), 8);
});

test("(2^2)2 = 8", function() {
    equal(ARTC.txt2MathML.parse("(2^2)2"), 8);
});

test("(3)3 = 9", function() {
    equal(ARTC.txt2MathML.parse("(2^2)2"), 9);
});

test("3 (3) 3 = 27", function() {
    equal(ARTC.txt2MathML.parse("3 (3) 3"), 27);
});
*/

test("1 / ((-2*x +3)^5)", function() {
    equal(ARTC.txt2MathML.parse("1 / ((-2*x +3)^5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 1 </cn> <apply> <power/> <apply> <plus/> <apply> <times/> <cn> -2 </cn> <ci> x </ci> </apply> <cn> 3 </cn> </apply> <cn> 5 </cn> </apply> </apply> </math>');
});

test("2*x^2 /x, this is here to test parsing the space", function() {
    equal(ARTC.txt2MathML.parse("2*x^2 /x"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <apply> <times/> <cn> 2 </cn> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> <ci> x </ci> </apply> </math>');
});
