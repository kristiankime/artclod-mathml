
test("2+4: This is here to test adding two numbers", function() {
    equal(ARTC.str2MathML.parse("2+4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2+4+7: This is here to test adding three numbers", function() {
    equal(ARTC.str2MathML.parse("2+4+7").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>');
});

test("2 + 4: This is here to test adding two numbers, with whitespace", function() {
    equal(ARTC.str2MathML.parse("2 + 4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2-4: This is here to test subtracting two numbers", function() {
    equal(ARTC.str2MathML.parse("2-4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("12-4-7: This is here to test subtracting three numbers", function() {
    equal(ARTC.str2MathML.parse("12-4-7").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <apply> <minus/> <cn> 12 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>');
});

test("2 - 4: This is here to test subtracting two numbers, with whitespace", function() {
    equal(ARTC.str2MathML.parse("2 - 4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2*4: This is here to test multplying two numbers", function() {
    equal(ARTC.str2MathML.parse("2*4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2*4*4: This is here to test multplying three numbers", function() {
    equal(ARTC.str2MathML.parse("2*4*4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 4 </cn> </apply> </math>');
});

test("2* 4: This is here to test multplying two numbers, with whitespace", function() {
    equal(ARTC.str2MathML.parse("2* 4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2/4: This is here to test dividing two numbers", function() {
    equal(ARTC.str2MathML.parse("2/4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("4/2/2: This is here to test dividing three numbers", function() {
    equal(ARTC.str2MathML.parse("4/2/2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <apply> <divide/> <cn> 4 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>');
});

test("2 /4: This is here to test dividing two numbers, with whitespace", function() {
    equal(ARTC.str2MathML.parse("2 /4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("3+2*4: This is here to test multiplication takes precidence over addition", function() {
    equal(ARTC.str2MathML.parse("3+2*4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 3 </cn> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </apply> </math>');
});

test("2^4: This is here to test raising a number to a power", function() {
    equal(ARTC.str2MathML.parse("2^4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2*4^2: This is here to test powers takes precidence over multiplication", function() {
    equal(ARTC.str2MathML.parse("2*4^2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("5+4^2: This is here to test powers takes precidence over addition", function() {
    equal(ARTC.str2MathML.parse("5+4^2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("(2+2)+2: This is here to test parentheses can be parsed", function() {
    equal(ARTC.str2MathML.parse("(2+2)+2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>');
});

test("(2+2)*8: This is here to test parentheses change order of operations", function() {
    equal(ARTC.str2MathML.parse("(2+2)*8").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 8 </cn> </apply> </math>');
});

test("-5: This is here to test - negates number", function() {
    equal(ARTC.str2MathML.parse("-5").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 5 </cn> </apply> </math>');
});

test("5+-(5*3): This is here to test - negates arbitrary term", function() {
    equal(ARTC.str2MathML.parse("5+-(5*3)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <minus/> <apply> <times/> <cn> 5 </cn> <cn> 3 </cn> </apply> </apply> </apply> </math>');
});

test("5+-1: This is here to test that we can + a - term", function() {
    equal(ARTC.str2MathML.parse("5+-1").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <minus/> <cn> 1 </cn> </apply> </apply> </math>');
});

test("2--4: This is here to test subtracting a negative number", function() {
    equal(ARTC.str2MathML.parse("2--4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <apply> <minus/> <cn> 4 </cn> </apply> </apply> </math>');
});

test("2.4: This is here to test can parse decimals", function() {
    equal(ARTC.str2MathML.parse("2.4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> 2.4 </cn> </math>');
});

test("2.4e3: This is here to test can parse scientific notation", function() {
    equal(ARTC.str2MathML.parse("2.4e3").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> 2.4e3 </cn> </math>');
});

test("-2.4e3: This is here to test can parse negatives with scientific notation", function() {
    equal(ARTC.str2MathML.parse("-2.4e3").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2.4e3 </cn> </apply> </math>');
});

test("2^2+(3*(5^(-1*-2))): This is here to test combination of ^ * -", function() {
    equal(ARTC.str2MathML.parse("2^2+(3*(5^(-1*-2)))").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 5 </cn> <apply> <times/> <apply> <minus/> <cn> 1 </cn> </apply> <apply> <minus/> <cn> 2 </cn> </apply> </apply> </apply> </apply> </apply> </math>');
});

test("2.5e1 + 6.2: This is here to test can plus with scientific notation", function() {
    equal(ARTC.str2MathML.parse("2.5e1 + 6.2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2.5e1 </cn> <cn> 6.2 </cn> </apply> </math>');
});

test("x: This is here to test can parse x as a variable", function() {
    equal(ARTC.str2MathML.parse("x").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <ci> x </ci> </math>');
});

test("3 + (4 - -x)^3: This is here to test can parse an equation with x in it", function() {
    equal(ARTC.str2MathML.parse("3 + (4 - -x)^3").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 3 </cn> <apply> <power/> <apply> <minus/> <cn> 4 </cn> <apply> <minus/> <ci> x </ci> </apply> </apply> <cn> 3 </cn> </apply> </apply> </math>');
});

test("log(4, 4): This is here to test can parse log with base", function() {
    equal(ARTC.str2MathML.parse("log(4, 4)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <logbase> <cn> 4 </cn> </logbase> <cn> 4 </cn> </apply> </math>');
});

test("log( 4, 4 ): This is here to test can parse log with base with white space", function() {
    equal(ARTC.str2MathML.parse("log( 4, 4 )").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <logbase> <cn> 4 </cn> </logbase> <cn> 4 </cn> </apply> </math>');
});

test("log(10): This is here to test can parse log without base (defaults to 10)", function() {
    equal(ARTC.str2MathML.parse("log(10)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <cn> 10 </cn> </apply> </math>');
});

test("log( 10 ): This is here to test can parse log without base (defaults to 10) with whitespce", function() {
    equal(ARTC.str2MathML.parse("log( 10 )").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <cn> 10 </cn> </apply> </math>');
});

test("ln(10): This is here to test can parse ln", function() {
    equal(ARTC.str2MathML.parse("ln(10)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <ln/> <cn> 10 </cn> </apply> </math>');
});

test("pow(10, 2): This is here to test can parse exp", function() {
    equal(ARTC.str2MathML.parse("pow(10, 2)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <cn> 10 </cn> <cn> 2 </cn> </apply> </math>');
});

test("exp(2): This is here to test can parse exp with one value, e is default base", function() {
    equal(ARTC.str2MathML.parse("exp(2)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <exponentiale/> <cn> 2 </cn> </apply> </math>');
});

test("e: This is here to test can parse e", function() {
    equal(ARTC.str2MathML.parse("e").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <exponentiale/> </math>');
});

test("pi: This is here to test can parse pi", function() {
    equal(ARTC.str2MathML.parse("pi").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <pi/> </math>');
});

test("sin(Pi): This is here to test can parse sin", function() {
    equal(ARTC.str2MathML.parse("sin(pi)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <sin/> <pi/> </apply> </math>');
});

test("cos(pi): This is here to test can parse cos", function() {
    equal(ARTC.str2MathML.parse("cos(pi)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <cos/> <pi/> </apply> </math>');
});

test("tan(pi): This is here to test can parse tan", function() {
    equal(ARTC.str2MathML.parse("tan(pi)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <tan/> <pi/> </apply> </math>');
});

test("sec(pi): This is here to test can parse sec", function() {
    equal(ARTC.str2MathML.parse("sec(pi)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <sec/> <pi/> </apply> </math>');
});

test("csc(pi): This is here to test can parse csc", function() {
    equal(ARTC.str2MathML.parse("csc(pi)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <csc/> <pi/> </apply> </math>');
});

test("cot(pi): This is here to test can parse cot", function() {
    equal(ARTC.str2MathML.parse("cot(pi)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <cot/> <pi/> </apply> </math>');
});

test("sqrt(4): This is here to test can parse sqrt", function() {
    equal(ARTC.str2MathML.parse("sqrt(4)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <root/> <cn> 4 </cn> </apply> </math>');
});

test("sqrt( 4 ): This is here to test can parse sqrt with whitespace", function() {
    equal(ARTC.str2MathML.parse("sqrt( 4 )").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <root/> <cn> 4 </cn> </apply> </math>');
});

test("nthRoot(9, 3): This is here to test can parse root", function() {
    equal(ARTC.str2MathML.parse("nthRoot(9, 3)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <root/> <degree> <cn> 3 </cn> </degree> <cn> 9 </cn> </apply> </math>');
});

test("3*pow(10, 2): This is here to test can parse symbols and function names", function() {
    equal(ARTC.str2MathML.parse("3*pow(10, 2)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 10 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("5+-(4): This is here to test +- of a non primative", function() {
    equal(ARTC.str2MathML.parse("5+-(4)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <minus/> <cn> 4 </cn> </apply> </apply> </math>');
});

test("1 / ((-2*x +3)^5): This is here to test", function() {
    equal(ARTC.str2MathML.parse("1 / ((-2*x +3)^5)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 1 </cn> <apply> <power/> <apply> <plus/> <apply> <times/> <apply> <minus/> <cn> 2 </cn> </apply> <ci> x </ci> </apply> <cn> 3 </cn> </apply> <cn> 5 </cn> </apply> </apply> </math>');
});

test("2*x^2 /x: This is here to test parsing the space", function() {
    equal(ARTC.str2MathML.parse("2*x^2 /x").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <apply> <times/> <cn> 2 </cn> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> <ci> x </ci> </apply> </math>');
});

test("ln( 1 / x + x ^ 2 -9): This is here to test space parsing", function() {
    equal(ARTC.str2MathML.parse("ln( 1 / x + x ^ 2 -9)").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <ln/> <apply> <minus/> <apply> <plus/> <apply> <divide/> <cn> 1 </cn> <ci> x </ci> </apply> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> <cn> 9 </cn> </apply> </apply> </math>');
});

test("-x^2: This is here to test that this should be -(x^2)", function() {
    equal(ARTC.str2MathML.parse("-x^2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> </math>');
});

test("-2^x: This is here to test that this should be -(2^x)", function() {
    equal(ARTC.str2MathML.parse("-2^x").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <apply> <power/> <cn> 2 </cn> <ci> x </ci> </apply> </apply> </math>');
});

test("x^-2: This is here to test that the exponent can be negative", function() {
    equal(ARTC.str2MathML.parse("x^-2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <ci> x </ci> <apply> <minus/> <cn> 2 </cn> </apply> </apply> </math>');
});

test("-3*x^2: This is here to test that this should be -3*(x^2)", function() {
    equal(ARTC.str2MathML.parse("-3*x^2").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <minus/> <cn> 3 </cn> </apply> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> </math>');
});

test("3*x^3 - 2*x^2 + x - 4: This is here to parsing of a simple polynomial", function() {
    equal(ARTC.str2MathML.parse("3*x^3 - 2*x^2 + x - 4").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <apply> <plus/> <apply> <minus/> <apply> <times/> <cn> 3 </cn> <apply> <power/> <ci> x </ci> <cn> 3 </cn> </apply> </apply> <apply> <times/> <cn> 2 </cn> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> </apply> <ci> x </ci> </apply> <cn> 4 </cn> </apply> </math>');
});

test("x + 2    : This is here to test that the parser should allow whitespace at the end", function() {
    equal(ARTC.str2MathML.parse("x + 2    ").content, '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <ci> x </ci> <cn> 2 </cn> </apply> </math>');
});

