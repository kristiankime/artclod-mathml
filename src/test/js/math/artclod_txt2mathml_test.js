var a = function(fakeArray) {
    return Array.prototype.slice.call(fakeArray);
};
var apply = function() {
    return "<apply> " + a(arguments).join(" ") + " </apply>";
};
var ci = function(v) {
    return "<ci> " + v + " </ci>";
};
var cn = function(v) {
    return "<cn> " + v + " </cn>";
};
var times = "<times/>";
var divide = "<divide/>";
var plus = "<plus/>";
var minus = "<minus/>";
var power = "<power/>";

test("Adding two numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4"), "<apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Adding three numbers", function() {
    equal(ARTC.txt2MathML.parse("2+4+7"), "<apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply>");
});

test("Adding two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 + 4"), "<apply> <plus/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Subtracting two numbers", function() {
    equal(ARTC.txt2MathML.parse("2-4"), "<apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Subtracting three numbers", function() {
    equal(ARTC.txt2MathML.parse("12-4-7"), "<apply> <minus/> <apply> <minus/> <cn> 12 </cn> <cn> 4 </cn> </apply> <cn> 7 </cn> </apply>");
});

test("Subtracting two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 - 4"), "<apply> <minus/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Multplying two numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4"), "<apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Multplying three numbers", function() {
    equal(ARTC.txt2MathML.parse("2*4*4"), "<apply> <times/> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> <cn> 4 </cn> </apply>");
});

test("Multplying two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2* 4"), "<apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Dividing two numbers", function() {
    equal(ARTC.txt2MathML.parse("2/4"), "<apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Dividing three numbers", function() {
    equal(ARTC.txt2MathML.parse("4/2/2"), "<apply> <divide/> <apply> <divide/> <cn> 4 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply>");
});

test("Dividing two numbers, with whitespace", function() {
    equal(ARTC.txt2MathML.parse("2 /4"), "<apply> <divide/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Multiplication takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("3+2*4"), "<apply> <plus/> <cn> 3 </cn> <apply> <times/> <cn> 2 </cn> <cn> 4 </cn> </apply> </apply>");
});

test("Raising a number to a power", function() {
    equal(ARTC.txt2MathML.parse("2^4"), "<apply> <power/> <cn> 2 </cn> <cn> 4 </cn> </apply>");
});

test("Raising a number to a power twice", function() {
    equal(ARTC.txt2MathML.parse("2^2^4"), "<apply> <power/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 4 </cn> </apply>");
});

test("Powers takes precidence over multiplication", function() {
    equal(ARTC.txt2MathML.parse("2*4^2"), "<apply> <times/> <cn> 2 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply>");
});

test("Powers takes precidence over addition", function() {
    equal(ARTC.txt2MathML.parse("5+4^2"), "<apply> <plus/> <cn> 5 </cn> <apply> <power/> <cn> 4 </cn> <cn> 2 </cn> </apply> </apply>");
});

test("Parentheses can be parsed", function() {
    equal(ARTC.txt2MathML.parse("(2+2)+2"), "<apply> <plus/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 2 </cn> </apply>");
});

test("Parentheses change order of operations", function() {
    equal(ARTC.txt2MathML.parse("(2+2)*8"), "<apply> <times/> <apply> <plus/> <cn> 2 </cn> <cn> 2 </cn> </apply> <cn> 8 </cn> </apply>");
});

test("- negates number", function() {
    equal(ARTC.txt2MathML.parse("-5"), "<cn> -5 </cn>");
});

test("- negates arbitrary term", function() {
    equal(ARTC.txt2MathML.parse("5+-(5*3)"), "<apply> <plus/> <cn> 5 </cn> <apply> <minus/> <apply> <times/> <cn> 5 </cn> <cn> 3 </cn> </apply> </apply> </apply>");
});

test("can add a - term", function() {
    equal(ARTC.txt2MathML.parse("5+-1"), "<apply> <plus/> <cn> 5 </cn> <cn> -1 </cn> </apply>");
});

test("Subtracting a negative number", function() {
    equal(ARTC.txt2MathML.parse("2--4"), "<apply> <minus/> <cn> 2 </cn> <cn> -4 </cn> </apply>");
});

test("Can parse decimals", function() {
    equal(ARTC.txt2MathML.parse("2.4"), "<cn> 2.4 </cn>");
});

test("Can parse scientific notation", function() {
    equal(ARTC.txt2MathML.parse("2.4e3"), "<cn> 2.4e3 </cn>");
});

test("Can parse negatives with scientific notation", function() {
    equal(ARTC.txt2MathML.parse("-2.4e3"), "<cn> -2.4e3 </cn>");
});

test("Can parse number then parens", function() {
    equal(ARTC.txt2MathML.parse("7(4 + 5)"), "<apply> <mult/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply>");
});

test("Can parse number then space then parens", function() {
    equal(ARTC.txt2MathML.parse("7 (4 + 5)"), "<apply> <mult/> <cn> 7 </cn> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply>");
});

test("Can parse back to back parens", function() {
    equal(ARTC.txt2MathML.parse("(3 + 6)(4 + 5)"), "<apply> <mult/> <apply> <plus/> <cn> 3 </cn> <cn> 6 </cn> </apply> <apply> <plus/> <cn> 4 </cn> <cn> 5 </cn> </apply> </apply>");
});

test("parse 2^2+(3*(5^(-1*-2)))", function() {
    equal(ARTC.txt2MathML.parse("2^2+(3*(5^(-1*-2)))"), "<apply> <plus/> <apply> <power/> <cn> 2 </cn> <cn> 2 </cn> </apply> <apply> <times/> <cn> 3 </cn> <apply> <power/> <cn> 5 </cn> <apply> <times/> <cn> -1 </cn> <cn> -2 </cn> </apply> </apply> </apply> </apply>");
});

test("parse 2.5e1 + 6.2", function() {
    equal(ARTC.txt2MathML.parse("2.5e1 + 6.2"), "<apply> <plus/> <cn> 2.5e1 </cn> <cn> 6.2 </cn> </apply>");
});
