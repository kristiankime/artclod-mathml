if(!ARTC){
    var ARTC = {};
}

ARTC.str2MathML = (function() {
    // ============== Operator Support ===========
    var opMap = ARTC.argMapCreate({
        "+" : "<plus/>",
        "-" : "<minus/>",
        "*" : "<times/>",
        "/" : "<divide/>",
        "^" : "<power/>"
    })

    var operatorNodeFunction = function(node){
        var ret = "<apply> " + opMap(node.op) + " ";
        var len = node.args.length;
        for (var i = 0; i < len; i++) {
            var n = node.args[i];
            ret += parseNode(n) + " ";
        }
        ret += "</apply>";
        return ret;
    }

    // ============== Function Support ===========
    var fnMap = ARTC.argMapCreate({
        "log#1" : function(node){ return "<log/> " + parseNode(node.args[0]); },
        "log#2" : function(node){ return "<log/> <logbase> " + parseNode(node.args[1]) + " </logbase> " + parseNode(node.args[0]); }
    })

    var functionNodeFunction = function(node){
        return "<apply> " + fnMap(node.name, node.args.length)(node) + " </apply>";
    }

    // ============== Full Parsing ===========
    var parseNode = function(node) {
        switch (node.type) {
            case 'OperatorNode': return operatorNodeFunction(node);
            case 'ConstantNode': return "<cn> " + node.value + " </cn>"; // TODO parse down to cn type here
            case 'SymbolNode': return "<ci> " + node.name + " </ci>";
            case 'FunctionNode': return functionNodeFunction(node);
            default: return 'Default' + node;
        }
    }

    var parse = function(string) {
        return '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> ' + parseNode(math.parse(string)) + ' </math>';
    }

    return {
        parse: parse
    };
}());