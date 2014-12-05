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
        "cos#1"  : function(node){ return "<cos/> " + parseNode(node.args[0]); },
        "sin#1"  : function(node){ return "<sin/> " + parseNode(node.args[0]); },
        "tan#1"  : function(node){ return "<tan/> " + parseNode(node.args[0]); },
        "sec#1"  : function(node){ return "<sec/> " + parseNode(node.args[0]); },
        "csc#1"  : function(node){ return "<csc/> " + parseNode(node.args[0]); },
        "cot#1"  : function(node){ return "<cot/> " + parseNode(node.args[0]); },
        "sqrt#1"  : function(node){ return "<root/> " + parseNode(node.args[0]); },
        "nthRoot#2"  : function(node){ return "<root/> <degree> " + parseNode(node.args[1]) + " </degree> " + parseNode(node.args[0]); },
        // "ln#1"  : function(node){ return "<ln/> " + parseNode(node.args[0]); },
        // "ln#1"  : function(node){ return "<ln/> " + parseNode(node.args[0]); },
        // "ln#1"  : function(node){ return "<ln/> " + parseNode(node.args[0]); },
        // "ln#1"  : function(node){ return "<ln/> " + parseNode(node.args[0]); },
        "ln#1"  : function(node){ return "<ln/> " + parseNode(node.args[0]); },
        "log#1" : function(node){ return "<log/> " + parseNode(node.args[0]); },
        "log#2" : function(node){ return "<log/> <logbase> " + parseNode(node.args[1]) + " </logbase> " + parseNode(node.args[0]); },
        "pow#2" : function(node){ return "<power/> " + parseNode(node.args[0]) + " " + parseNode(node.args[1]); },
        "exp#1" : function(node){ return "<power/> <exponentiale/> " + parseNode(node.args[0]); }
    })

    var functionNodeFunction = function(node){
        var fnc = fnMap(node.name, node.args.length)
        if(!fnc) { throw "Error finding function for FunctionNode with name " + node.name }
        return "<apply> " + fnc(node) + " </apply>";
    }

    // ============== Symbol Support ===========
    var symbolNodeFunction = function(node){
        switch (node.name) {
            case 'Pi': return "<pi/>";
            case 'pi': return "<pi/>";
            case 'e': return "<exponentiale/>";
            default: return "<ci> " + node.name + " </ci>";
        }
    }

    // ============== Full Parsing ===========
    var parseNode = function(node) {
        switch (node.type) {
            case 'OperatorNode': return operatorNodeFunction(node);
            case 'ConstantNode': return "<cn> " + node.value + " </cn>"; // TODO parse down to cn type here
            case 'SymbolNode': return symbolNodeFunction(node);
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