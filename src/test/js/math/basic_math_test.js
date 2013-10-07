test("Adding two numbers", function() {
    equal(6, basic_math.parse("2+4"), "Equals");
});

test("Multplying two numbers", function() {
    equal(8, basic_math.parse("2*4"), "Equals");
});