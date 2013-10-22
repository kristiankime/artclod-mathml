
test("Status is failure if id is falsey", function() {
    var res = null;
    ARTC.updateContentMathML(null, "<cn>3<cn/>", function(s){res = s;});
    deepEqual({ success : false, reason : "id falsey", details : null }, res);
});

test("Status is failure if mathMLStr is falsey", function() {
    var res = null;
    ARTC.updateContentMathML("id", null, function(s){res = s;});
    deepEqual({ success : false, reason : "mathMLStr falsey", details : null }, res);
});

test("Status is failure if mathMLStr cannot be parsed", function() {
    var res = null;
    ARTC.updateContentMathML("id", "not a valid equation", function(s){res = s;});
    equal(res.success, false);
    equal(res.reason, "parse error");
});

test("Status is failure id is not a valid HTML element id", function() {
    var res = null;
    ARTC.updateContentMathML("not a valid id", "3", function(s){res = s;});
    equal(res.success, false);
    equal(res.reason, "invalid id");
});