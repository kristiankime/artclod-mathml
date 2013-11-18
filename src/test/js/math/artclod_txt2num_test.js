test("Adding two numbers", function() {
    equal(ARTC.txt2Num.parse("2+4"), 6);
});

test("Adding three numbers", function() {
    equal(ARTC.txt2Num.parse("2+4+7"), 13);
});

test("Adding two numbers, with whitespace", function() {
    equal(ARTC.txt2Num.parse("2 + 4"), 6);
});

test("Subtracting two numbers", function() {
    equal(ARTC.txt2Num.parse("2-4"), -2);
});

test("Subtracting two numbers, with whitespace", function() {
    equal(ARTC.txt2Num.parse("2 - 4"), -2);
});

test("Subtracting three numbers", function() {
    equal(ARTC.txt2Num.parse("12-4-7"), 1);
});

test("Multplying two numbers", function() {
    equal(ARTC.txt2Num.parse("2*4"), 8);
});

test("Multplying three numbers", function() {
    equal(ARTC.txt2Num.parse("2*4*4"), 32);
});

test("Multplying two numbers, with whitespace", function() {
    equal(ARTC.txt2Num.parse("2* 4"), 8);
});

test("Dividing two numbers", function() {
    equal(ARTC.txt2Num.parse("2/4"), .5);
});

test("Dividing three numbers", function() {
    equal(ARTC.txt2Num.parse("4/2/2"), 1);
});

test("Dividing two numbers, with whitespace", function() {
    equal(ARTC.txt2Num.parse("2 /4"), .5);
});

test("Multiplication takes precidence over addition", function() {
    equal(ARTC.txt2Num.parse("3+2*4"), 11);
});

test("Raising a number to a power", function() {
    equal(ARTC.txt2Num.parse("2^4"), 16);
});

test("Raising a number to a power twice", function() {
    equal(ARTC.txt2Num.parse("2^2^4"), 256);
});

test("Powers takes precidence over multiplication", function() {
    equal(ARTC.txt2Num.parse("2*4^2"), 32);
});

test("Powers takes precidence over addition", function() {
    equal(ARTC.txt2Num.parse("5+4^2"), 21);
});

test("Parentheses can be parsed", function() {
    equal(ARTC.txt2Num.parse("(2+2)+2"), 6);
});

test("Parentheses change order of operations", function() {
    equal(ARTC.txt2Num.parse("(2+2)*8"), 32);
});

test("- negates number", function() {
    equal(ARTC.txt2Num.parse("-5"), -5);
});

test("- negates arbitrary term", function() {
    equal(ARTC.txt2Num.parse("5+-(5*3)"), -10);
});

test("can add a - term", function() {
    equal(ARTC.txt2Num.parse("5+-1"), 4);
});

test("Subtracting a negative number", function() {
    equal(ARTC.txt2Num.parse("2--4"), 6);
});

test("Can parse decimals", function() {
    equal(ARTC.txt2Num.parse("2.4"), 2.4);
});

test("Can parse scientific notation", function() {
    equal(ARTC.txt2Num.parse("2.4e3"), 2400);
});

test("Can parse negatives with scientific notation", function() {
    equal(ARTC.txt2Num.parse("-2.4e3"), -2400);
});

test("Can parse number then parens", function() {
    equal(ARTC.txt2Num.parse("7(4 + 5)"), 63);
});

test("Can parse number then space then parens", function() {
    equal(ARTC.txt2Num.parse("7 (4 + 5)"), 63);
});

test("Can parse back to back parens", function() {
    equal(ARTC.txt2Num.parse("(3 + 6)(4 + 5)"), 81);
});

test("2^2+(3*(5^(-1*-2))) = 79", function() {
    equal(ARTC.txt2Num.parse("2^2+(3*(5^(-1*-2)))"), 79);
});

test("2.5e1 + 6.2 = 31.2", function() {
    equal(ARTC.txt2Num.parse("2.5e1 + 6.2"), 31.2);
});

test("Can parse log", function() {
    equal(ARTC.txt2Num.parse("log(10, 10)"), 1);
});

test("Can parse log without base (defaults to 10)", function() {
    equal(ARTC.txt2Num.parse("log(10)"), 1);
});

test("Can parse ln", function() {
    equal(ARTC.txt2Num.parse("ln(10)"), Math.log(10));
});

test("Can parse exp", function() {
    equal(ARTC.txt2Num.parse("exp(10, 2)"), 100);
});

test("Can parse e", function() {
    equal(ARTC.txt2Num.parse("e"), Math.E);
});

test("Can parse pi", function() {
    equal(ARTC.txt2Num.parse("pi"), Math.PI);
});

test("Can parse sin", function() {
    equal(ARTC.txt2Num.parse("sin(Pi/2)"), 1);
});

test("Can parse cos", function() {
    equal(ARTC.txt2Num.parse("cos(Pi)"), -1);
});

test("Can parse tan", function() {
    equal(ARTC.txt2Num.parse("tan(0)"), 0);
});

test("Can parse sec", function() {
    equal(ARTC.txt2Num.parse("sec(Pi)"), -1);
});

test("Can parse csc", function() {
    equal(ARTC.txt2Num.parse("csc(Pi/2)"), 1);
});

test("Can parse cot", function() {
    equal(ARTC.txt2Num.parse("cot(Pi*(3/4))"), -0.9999999999999998);
});

test("Can parse symbols and function names", function() {
    equal(ARTC.txt2Num.parse("3*exp(10, 2)"), 300);
});

test("Can parse power then parens", function() {
    equal(ARTC.txt2Num.parse("2^2(2)"), 8);
});

test("(2^2)2 = 8", function() {
    equal(ARTC.txt2Num.parse("(2^2)2"), 8);
});

test("(3)3 = 9", function() {
    equal(ARTC.txt2Num.parse("(2^2)2"), 9);
});

test("3 (3) 3 = 27", function() {
    equal(ARTC.txt2Num.parse("3 (3) 3"), 27);
});