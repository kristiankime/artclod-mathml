
test("Adding two numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4"), "<math> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Adding three numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4+7"), "<math> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>");
});

test("Adding two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 + 4"), "<math> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Subtracting two numbers", function() {
    equal(ARTC.txt2MathML.parse("2-4"), "<math> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Subtracting three numbers", function() {
    equal(ARTC.txt2MathML.parse("12-4-7"), "<math> <apply> <minus/> <apply> <minus/> <cn> 12 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply> </math>");
});

test("Subtracting two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 - 4"), "<math> <apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Multplying two numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4"), "<math> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Multplying three numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4*4"), "<math> <apply> <times/> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 4 </cn> </apply> </math>");
});

test("Multplying two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2* 4"), "<math> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Dividing two numbers", function() {
    equal(ARTC.txt2MathML.parse("2/4"), "<math> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Dividing three numbers", function() {
    equal(ARTC.txt2MathML.parse("4/2/2"), "<math> <apply> <divide/> <apply> <divide/> <cn> 4 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>");
});

test("Dividing two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 /4"), "<math> <apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Multiplication takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("3+2*4"), "<math> <apply> <plus/> <cn> 3 </cn> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </apply> </math>");
});

test("Raising a number to a power", function() {
    equal(ARTC.txt2MathML.parse("2^4"), "<math> <apply> <power/> <cn> 2 </cn> <cn> 4 </cn> </apply> </math>");
});

test("Raising a number to a power twice", function() {
    equal(ARTC.txt2MathML.parse("2^2^4"), "<math> <apply> <power/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 4 </cn> </apply> </math>");
});

test("Powers takes precidence over multiplication", function() {
    equal(ARTC.txt2MathML.parse("2*4^2"), "<math> <apply> <times/> <cn> 2 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>");
});

test("Powers takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("5+4^2"), "<math> <apply> <plus/> <cn> 5 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply> </math>");
});

test("Parentheses can be parsed", function() {
    equal(ARTC.txt2MathML.parse("(2+2)+2"), "<math> <apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply> </math>");
});

test("Parentheses change order of operations", function() {
    equal(ARTC.txt2MathML.parse("(2+2)*8"), "<math> <apply> <times/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 8 </cn> </apply> </math>");
});

test("- negates number", function() {
    equal(ARTC.txt2MathML.parse("-5"), "<math> <cn> -5 </cn> </math>");
});

test("- negates arbitrary term", function() {
    equal(ARTC.txt2MathML.parse("5+-(5*3)"), "<math> <apply> <plus/> <cn> 5 </cn> <apply> <minus/> <apply> <times/> <cn> 5 </cn> <cn> 3 </cn> </apply> </apply> </apply> </math>");
});

test("can add a - term", function() {
    equal(ARTC.txt2MathML.parse("5+-1"), "<math> <apply> <plus/> <cn> 5 </cn> <cn> -1 </cn> </apply> </math>");
});

test("Subtracting a negative number", function() {
    equal(ARTC.txt2MathML.parse("2--4"), "<math> <apply> <minus/> <cn> 2 </cn> <cn> -4 </cn> </apply> </math>");
});

test("Can parse decimals", function() {
    equal(ARTC.txt2MathML.parse("2.4"), "<math> <cn> 2.4 </cn> </math>");
});

test("Can parse scientific notation", function() {
    equal(ARTC.txt2MathML.parse("2.4e3"), "<math> <cn> 2.4e3 </cn> </math>");
});

test("Can parse negatives with scientific notation", function() {
    equal(ARTC.txt2MathML.parse("-2.4e3"), "<math> <cn> -2.4e3 </cn> </math>");
});

test("Can parse number then parens", function() {
    equal(ARTC.txt2MathML.parse("7(4 + 5)"), "<math> <apply> <mult/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>");
});

test("Can parse number then space then parens", function() {
    equal(ARTC.txt2MathML.parse("7 (4 + 5)"), "<math> <apply> <mult/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>");
});

test("Can parse back to back parens", function() {
    equal(ARTC.txt2MathML.parse("(3 + 6)(4 + 5)"), "<math> <apply> <mult/> <apply> <plus/> <cn> 3 </cn> <cn> 6 </cn> </apply> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply> </math>");
});

test("Can parse 2^2+(3*(5^(-1*-2)))", function() {
    equal(ARTC.txt2MathML.parse("2^2+(3*(5^(-1*-2)))"), "<math> <apply> <plus/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 5 </cn> <apply> <times/> <cn> -1 </cn> <cn> -2 </cn> </apply> </apply> </apply> </apply> </math>");
});

test("can parse 2.5e1 + 6.2", function() {
    equal(ARTC.txt2MathML.parse("2.5e1 + 6.2"), "<math> <apply> <plus/> <cn> 2.5e1 </cn> <cn> 6.2 </cn> </apply> </math>");
});

test("Can parse x as a variable", function() {
    equal(ARTC.txt2MathML.parse("x"), "<math> <ci> x </ci> </math>");
});

test("Can parse an equation with x in it", function() {
    equal(ARTC.txt2MathML.parse("3 + (4 - -x)^3"), "<math> <apply> <plus/> <cn> 3 </cn> <apply> <power/> <apply> <minus/> <cn> 4 </cn> <apply> <minus/> <ci> x </ci> </apply> </apply> <cn> 3 </cn> </apply> </apply> </math>");
});

test("(2^2)2", function() {
    equal(ARTC.txt2MathML.parse("(2^2)2"), 8);
});
