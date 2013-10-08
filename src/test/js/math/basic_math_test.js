test("Adding two numbers", function() {
    equal(6, ARTC.basicMath.parse("2+4"), "Equals");
});

test("Adding three numbers", function() {
    equal(13, ARTC.basicMath.parse("2+4+7"), "Equals");
});

test("Subtracting two numbers", function() {
    equal(-2, ARTC.basicMath.parse("2-4"), "Equals");
});

test("Subtracting three numbers", function() {
    equal(1, ARTC.basicMath.parse("12-4-7"), "Equals");
});

test("Multplying two numbers", function() {
    equal(8, ARTC.basicMath.parse("2*4"), "Equals");
});

test("Multplying three numbers", function() {
    equal(32, ARTC.basicMath.parse("2*4*4"), "Equals");
});

test("Dividing two numbers", function() {
    equal(.5, ARTC.basicMath.parse("2/4"), "Equals");
});

test("Dividing three numbers", function() {
    equal(1, ARTC.basicMath.parse("4/2/2"), "Equals");
});

test("Multiplication takes precidence over addition", function() {
    equal(11, ARTC.basicMath.parse("3+2*4"), "Equals");
});

test("Raising a number to a power", function() {
    equal(16, ARTC.basicMath.parse("2^4"), "Equals");
});

test("Raising a number to a power twice", function() {
    equal(256, ARTC.basicMath.parse("2^2^4"), "Equals");
});

test("Powers takes precidence over multiplication", function() {
    equal(32, ARTC.basicMath.parse("2*4^2"), "Equals");
});

test("Powers takes precidence over addition", function() {
    equal(21, ARTC.basicMath.parse("5+4^2"), "Equals");
});

test("Parentheses can be parsed", function() {
    equal(6, ARTC.basicMath.parse("(2+2)+2"), "Equals");
});

test("Parentheses change order of operations", function() {
    equal(32, ARTC.basicMath.parse("(2+2)*8"), "Equals");
});

test("- negates number", function() {
    equal(-5, ARTC.basicMath.parse("-5"), "Equals");
});

test("- negates arbitrary term", function() {
    equal(-10, ARTC.basicMath.parse("5+-(5*3)"), "Equals");
});

test("2^2+(3*(5^(-1*-2))) = 79", function() {
    equal(79, ARTC.basicMath.parse("2^2+(3*(5^(-1*-2)))"), "Equals");
});