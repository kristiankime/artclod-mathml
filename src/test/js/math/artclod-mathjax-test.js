
test("Status is failure if id is falsey", function() {
    var res = null;
    ARTC.mathJax.update(null, "<cn>3<cn/>", function(s){res = s;});
    deepEqual({ success : false, reason : "id falsey", details : "id was null" }, res);
});

test("Nothing happens if callback does not exist", function() {
    ARTC.mathJax.update(null, "<cn>3<cn/>");
    ok(true, "no errors should be thrown"); 
});

test("Status is failure if math arg is falsey", function() {
    var res = null;
    ARTC.mathJax.update("id", null, function(s){res = s;});
    deepEqual({ success : false, reason : "math falsey", details : "math was null" }, res);
});

test("Status is failure id is not a valid HTML element id", function() {
    var res = null;
    ARTC.mathJax.update("not a valid id", "3", function(s){res = s;});
    equal(res.success, false);
    equal(res.reason, "invalid id");
});