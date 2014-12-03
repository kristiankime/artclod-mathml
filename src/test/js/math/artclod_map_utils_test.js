
test("Gets element by key", function() {
    var map = ARTC.argMapCreate({ "a" : "a value", "a#2" : "a for 2"});
    deepEqual(map("a"), "a value");
});

test("Gets element by key and number", function() {
    var map = ARTC.argMapCreate({ "a" : "a value", "a#2" : "a for 2"});
    deepEqual(map("a", 2), "a for 2");
});

test("defaults to no # value if number doesn't match", function() {
    var map = ARTC.argMapCreate({ "a" : "a value", "a#2" : "a for 2"});
    deepEqual(map("a", 3), "a value");
});