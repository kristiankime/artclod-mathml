
test("2+4: This is here to test adding two numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2+4+7: This is here to test adding three numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4+7"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>');
});

test("2 + 4: This is here to test adding two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 + 4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2-4: This is here to test subtracting two numbers", function() {
    equal(ARTC.txt2MathML.parse("2-4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("12-4-7: This is here to test subtracting three numbers", function() {
    equal(ARTC.txt2MathML.parse("12-4-7"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <apply> <minus/> <cn> 12 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>');
});

test("2 - 4: This is here to test subtracting two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 - 4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2*4: This is here to test multplying two numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2*4*4: This is here to test multplying three numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4*4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 4 </cn> </apply> </math>');
});

test("2* 4: This is here to test multplying two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2* 4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("2/4: This is here to test dividing two numbers", function() {
    equal(ARTC.txt2MathML.parse("2/4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("4/2/2: This is here to test dividing three numbers", function() {
    equal(ARTC.txt2MathML.parse("4/2/2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <apply> <divide/> <cn> 4 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>');
});

test("2 /4: This is here to test dividing two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 /4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

test("3+2*4: This is here to test multiplication takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("3+2*4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 3 </cn> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </apply> </math>');
});

test("2^4: This is here to test raising a number to a power", function() {
    equal(ARTC.txt2MathML.parse("2^4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>');
});

//test("2^2^4: This is here to test raising a number to a power twice", function() {
//    equal(ARTC.txt2MathML.parse("2^2^4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 4 </cn> </apply> </math>');
//});

test("2*4^2: This is here to test powers takes precidence over multiplication", function() {
    equal(ARTC.txt2MathML.parse("2*4^2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 2 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("5+4^2: This is here to test powers takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("5+4^2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

test("(2+2)+2: This is here to test parentheses can be parsed", function() {
    equal(ARTC.txt2MathML.parse("(2+2)+2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>');
});

test("(2+2)*8: This is here to test parentheses change order of operations", function() {
    equal(ARTC.txt2MathML.parse("(2+2)*8"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 8 </cn> </apply> </math>');
});

test("-5: This is here to test - negates number", function() {
    equal(ARTC.txt2MathML.parse("-5"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> -5 </cn> </math>');
});

test("5+-(5*3): This is here to test - negates arbitrary term", function() {
    equal(ARTC.txt2MathML.parse("5+-(5*3)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <minus/> <apply> <times/> <cn> 5 </cn> <cn> 3 </cn> </apply> </apply> </apply> </math>');
});

test("5+-1: This is here to test that we can + a - term", function() {
    equal(ARTC.txt2MathML.parse("5+-1"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <cn> -1 </cn> </apply> </math>');
});

test("2--4: This is here to test subtracting a negative number", function() {
    equal(ARTC.txt2MathML.parse("2--4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <cn> 2 </cn> <cn> -4 </cn> </apply> </math>');
});

test("2.4: This is here to test can parse decimals", function() {
    equal(ARTC.txt2MathML.parse("2.4"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> 2.4 </cn> </math>');
});

test("2.4e3: This is here to test can parse scientific notation", function() {
    equal(ARTC.txt2MathML.parse("2.4e3"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> 2.4e3 </cn> </math>');
});

test("-2.4e3: This is here to test can parse negatives with scientific notation", function() {
    equal(ARTC.txt2MathML.parse("-2.4e3"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <cn> -2.4e3 </cn> </math>');
});

//test("7(4 + 5): This is here to test can parse number then parens", function() {
//    equal(ARTC.txt2MathML.parse("7(4 + 5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>');
//});

//test("7 (4 + 5): This is here to test can parse number then space then parens", function() {
//    equal(ARTC.txt2MathML.parse("7 (4 + 5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>');
//});

//test("(3 + 6)(4 + 5): This is here to test can parse back to back parens", function() {
//    equal(ARTC.txt2MathML.parse("(3 + 6)(4 + 5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <plus/> <cn> 3 </cn> <cn> 6 </cn> </apply> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>');
//});

test("2^2+(3*(5^(-1*-2))): This is here to test combination of ^ * -", function() {
    equal(ARTC.txt2MathML.parse("2^2+(3*(5^(-1*-2)))"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 5 </cn> <apply> <times/> <cn> -1 </cn> <cn> -2 </cn> </apply> </apply> </apply> </apply> </math>');
});

test("2.5e1 + 6.2: This is here to test can plus with scientific notation", function() {
    equal(ARTC.txt2MathML.parse("2.5e1 + 6.2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 2.5e1 </cn> <cn> 6.2 </cn> </apply> </math>');
});

test("x: This is here to test can parse x as a variable", function() {
    equal(ARTC.txt2MathML.parse("x"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <ci> x </ci> </math>');
});

test("3 + (4 - -x)^3: This is here to test can parse an equation with x in it", function() {
    equal(ARTC.txt2MathML.parse("3 + (4 - -x)^3"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 3 </cn> <apply> <power/> <apply> <minus/> <cn> 4 </cn> <apply> <minus/> <ci> x </ci> </apply> </apply> <cn> 3 </cn> </apply> </apply> </math>');
});

test("log(4, 4): This is here to test can parse log with base", function() {
    equal(ARTC.txt2MathML.parse("log(4, 4)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <logbase> <cn> 4 </cn> </logbase> <cn> 4 </cn> </apply> </math>');
});

test("log(10): This is here to test can parse log without base (defaults to 10)", function() {
    equal(ARTC.txt2MathML.parse("log(10)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <cn> 10 </cn> </apply> </math>');
});

test("log_2(4): This is here to test can parse log with base after _ i.e. log_2(4)", function() {
    equal(ARTC.txt2MathML.parse("log_2(4)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <log/> <logbase> <cn> 2 </cn> </logbase> <cn> 4 </cn> </apply> </math>');
});

test("ln(10): This is here to test can parse ln", function() {
    equal(ARTC.txt2MathML.parse("ln(10)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <ln/> <cn> 10 </cn> </apply> </math>');
});

test("exp(10, 2): This is here to test can parse exp", function() {
    equal(ARTC.txt2MathML.parse("exp(10, 2)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <cn> 10 </cn> <cn> 2 </cn> </apply> </math>');
});

test("exp(2): This is here to test can parse exp with one value, e is default base", function() {
    equal(ARTC.txt2MathML.parse("exp(2)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <power/> <exponentiale/> <cn> 2 </cn> </apply> </math>');
});

test("e: This is here to test can parse e", function() {
    equal(ARTC.txt2MathML.parse("e"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <exponentiale/> </math>');
});

test("pi: This is here to test can parse pi", function() {
    equal(ARTC.txt2MathML.parse("pi"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <pi/> </math>');
});

test("sin(Pi): This is here to test can parse sin", function() {
    equal(ARTC.txt2MathML.parse("sin(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <sin/> <pi/> </apply> </math>');
});

test("cos(Pi): This is here to test can parse cos", function() {
    equal(ARTC.txt2MathML.parse("cos(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <cos/> <pi/> </apply> </math>');
});

test("tan(Pi): This is here to test can parse tan", function() {
    equal(ARTC.txt2MathML.parse("tan(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <tan/> <pi/> </apply> </math>');
});

test("sec(Pi): This is here to test can parse sec", function() {
    equal(ARTC.txt2MathML.parse("sec(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <sec/> <pi/> </apply> </math>');
});

test("csc(Pi): This is here to test can parse csc", function() {
    equal(ARTC.txt2MathML.parse("csc(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <csc/> <pi/> </apply> </math>');
});

test("cot(Pi): This is here to test can parse cot", function() {
    equal(ARTC.txt2MathML.parse("cot(Pi)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <cot/> <pi/> </apply> </math>');
});

test("3*exp(10, 2): This is here to test can parse symbols and function names", function() {
    equal(ARTC.txt2MathML.parse("3*exp(10, 2)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 10 </cn> <cn> 2 </cn> </apply> </apply> </math>');
});

//test("cos(x) cos(x): This is here to test can parse function implicit times function", function() {
//    equal(ARTC.txt2MathML.parse("cos(x) cos(x)"),"<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <times/> <apply> <cos/> <ci> x </ci> </apply> <apply> <cos/> <ci> x </ci> </apply> </apply> </math>");
//});

test("5+-(4): This is here to test +- of a non primative", function() {
    equal(ARTC.txt2MathML.parse("5+-(4)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <cn> 5 </cn> <apply> <minus/> <cn> 4 </cn> </apply> </apply> </math>');
});

test("1 / ((-2*x +3)^5): This is here to test", function() {
    equal(ARTC.txt2MathML.parse("1 / ((-2*x +3)^5)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <cn> 1 </cn> <apply> <power/> <apply> <plus/> <apply> <times/> <cn> -2 </cn> <ci> x </ci> </apply> <cn> 3 </cn> </apply> <cn> 5 </cn> </apply> </apply> </math>');
});

test("2*x^2 /x: This is here to test parsing the space", function() {
    equal(ARTC.txt2MathML.parse("2*x^2 /x"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <divide/> <apply> <times/> <cn> 2 </cn> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> <ci> x </ci> </apply> </math>');
});

test("ln( 1 / x + x ^ 2 -9): This is here to test space parsing", function() {
    equal(ARTC.txt2MathML.parse("ln( 1 / x + x ^ 2 -9)"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <ln/> <apply> <minus/> <apply> <plus/> <apply> <divide/> <cn> 1 </cn> <ci> x </ci> </apply> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> <cn> 9 </cn> </apply> </apply> </math>');
});

test("-x^2: This is here to test that this should be -(x^2)", function() {
    equal(ARTC.txt2MathML.parse("-x^2"), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <minus/> <apply> <power/> <ci> x </ci> <cn> 2 </cn> </apply> </apply> </math>');
});

test("x + 2    : This is here to test that the parser should allow whitespace at the end", function() {
    equal(ARTC.txt2MathML.parse("x + 2    "), '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> <apply> <plus/> <ci> x </ci> <cn> 2 </cn> </apply> </math>');
});

