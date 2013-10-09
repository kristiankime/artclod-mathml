test("Adding two numbers", function() {
    equal(6, ARTC.basicMath.parse("2+4"));
});

test("Adding three numbers", function() {
    equal(13, ARTC.basicMath.parse("2+4+7"));
});

test("Adding two numbers, with whitespace", function() {
    equal(6, ARTC.basicMath.parse("2 + 4"));
});

test("Subtracting two numbers", function() {
    equal(-2, ARTC.basicMath.parse("2-4"));
});

test("Subtracting two numbers, with whitespace", function() {
    equal(-2, ARTC.basicMath.parse("2 - 4"));
});

test("Subtracting three numbers", function() {
    equal(1, ARTC.basicMath.parse("12-4-7"));
});

test("Multplying two numbers", function() {
    equal(8, ARTC.basicMath.parse("2*4"));
});

test("Multplying three numbers", function() {
    equal(32, ARTC.basicMath.parse("2*4*4"));
});

test("Multplying two numbers, with whitespace", function() {
    equal(8, ARTC.basicMath.parse("2* 4"));
});

test("Dividing two numbers", function() {
    equal(.5, ARTC.basicMath.parse("2/4"));
});

test("Dividing three numbers", function() {
    equal(1, ARTC.basicMath.parse("4/2/2"));
});

test("Dividing two numbers, with whitespace", function() {
    equal(.5, ARTC.basicMath.parse("2 /4"));
});

test("Multiplication takes precidence over addition", function() {
    equal(11, ARTC.basicMath.parse("3+2*4"));
});

test("Raising a number to a power", function() {
    equal(16, ARTC.basicMath.parse("2^4"));
});

test("Raising a number to a power twice", function() {
    equal(256, ARTC.basicMath.parse("2^2^4"));
});

test("Powers takes precidence over multiplication", function() {
    equal(32, ARTC.basicMath.parse("2*4^2"));
});

test("Powers takes precidence over addition", function() {
    equal(21, ARTC.basicMath.parse("5+4^2"));
});

test("Parentheses can be parsed", function() {
    equal(6, ARTC.basicMath.parse("(2+2)+2"));
});

test("Parentheses change order of operations", function() {
    equal(32, ARTC.basicMath.parse("(2+2)*8"));
});

test("- negates number", function() {
    equal(-5, ARTC.basicMath.parse("-5"));
});

test("- negates arbitrary term", function() {
    equal(-10, ARTC.basicMath.parse("5+-(5*3)"));
});

test("Can parse decimals", function() {
    equal(2.4, ARTC.basicMath.parse("2.4"));
});

test("Can parse scientific notation", function() {
    equal(2400, ARTC.basicMath.parse("2.4e3"));
});

test("Can parse negatives with scientific notation", function() {
    equal(-2400, ARTC.basicMath.parse("-2.4e3"));
});

test("2^2+(3*(5^(-1*-2))) = 79", function() {
    equal(79, ARTC.basicMath.parse("2^2+(3*(5^(-1*-2)))"));
});