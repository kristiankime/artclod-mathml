if(!ARTC){
    var ARTC = {};
}

ARTC.mathJSDefaults = {
    // All functions here take (node, parseNode)
    functions: {
        "cos#1"     : function(n, pN){ return "<apply> <cos/> " + pN(n.args[0]) + " </apply>"; },
        "sin#1"     : function(n, pN){ return "<apply> <sin/> " + pN(n.args[0]) + " </apply>"; },
        "tan#1"     : function(n, pN){ return "<apply> <tan/> " + pN(n.args[0]) + " </apply>"; },
        "sec#1"     : function(n, pN){ return "<apply> <sec/> " + pN(n.args[0]) + " </apply>"; },
        "csc#1"     : function(n, pN){ return "<apply> <csc/> " + pN(n.args[0]) + " </apply>"; },
        "cot#1"     : function(n, pN){ return "<apply> <cot/> " + pN(n.args[0]) + " </apply>"; },
        "sqrt#1"    : function(n, pN){ return "<apply> <root/> " + pN(n.args[0]) + " </apply>"; },
        "nthRoot#2" : function(n, pN){ return "<apply> <root/> <degree> " + pN(n.args[1]) + " </degree> " + pN(n.args[0]) + " </apply>"; },
        "ln#1"      : function(n, pN){ return "<apply> <ln/> " + pN(n.args[0]) + " </apply>"; },
        "log#1"     : function(n, pN){ return "<apply> <log/> " + pN(n.args[0]) + " </apply>"; },
        "log#2"     : function(n, pN){ return "<apply> <log/> <logbase> " + pN(n.args[1]) + " </logbase> " + pN(n.args[0]) + " </apply>"; },
        "pow#2"     : function(n, pN){ return "<apply> <power/> " + pN(n.args[0]) + " " + pN(n.args[1]) + " </apply>"; },
        "exp#1"     : function(n, pN){ return "<apply> <power/> <exponentiale/> " + pN(n.args[0]) + " </apply>"; }
    },
    operators : {
        "+" : "<plus/>",
        "-" : "<minus/>",
        "*" : "<times/>",
        "/" : "<divide/>",
        "^" : "<power/>"
    },
    symbols : {
        map: {
            "pi": "<pi/>",
            "e": "<exponentiale/>",
            "x": "<ci> x </ci>"
        },
        allowAny : false

    }
}

ARTC.mathJS = (function(){
    var applyWrap = function(operator, elements, parseNode) {
        var ret = "<apply> " + operator + " ";
        var len = elements.length;
        for (var i = 0; i < len; i++) {
            var n = elements[i];
            ret += parseNode(n) + " ";
        }
        ret += "</apply>";
        return ret;
    }

    // What's stores in ARTC.MathJS is function that creates a
    return function(functions, operators, symbols){
        // ==============  Function Handling ==============
        var fncMap = ARTC.argMapCreate(functions);

        var functionNodeFunction = function(node){
            var fnc = fncMap(node.name, node.args.length)
            if(!fnc) { throw { msg: "Error finding function for FunctionNode with name " + node.name + " and # args = " + node.args.length} }
            return fnc(node, parseNode);
        }

        // ==============  Operator Handling ==============
        var opMap = ARTC.argMapCreate(operators);

        var operatorNodeFunction = function(node){
            var op = opMap(node.op)
            if(!op) { throw { msg: "Error finding operator for OperatorNode with op " + node.op } }
            return applyWrap(op, node.args, parseNode);
        }

        // ============== Symbol Handling ===========
        var symMap = ARTC.argMapCreate(symbols.map);

        var symbolNodeFunction = function(node){
            var sym = symMap(node.name)
            if(sym) { return sym }
            if(!sym && !symbols.allowAny){ throw { mag: "Error in SymbolNode, any not allowed, and nothing specified for " + node.name } }
            return "<ci> " + node.name + " </ci>";
        }

        // ============== Full Parsing ===========
        var parseNode = function(node) {
            switch (node.type) {
                case 'OperatorNode': return operatorNodeFunction(node);
                case 'ConstantNode': return "<cn> " + node.value + " </cn>"; // TODO parse down to cn type here
                case 'SymbolNode':   return symbolNodeFunction(node);
                case 'FunctionNode': return functionNodeFunction(node);
                default:             throw { msg: "Error, unknown node type " + node };
            }
        }

        var parse = function(string) {
            return '<math xmlns=\"http://www.w3.org/1998/Math/MathML\"> ' + parseNode(math.parse(string)) + ' </math>';
        }

        return parse;
    }
}());

ARTC.str2MathML = (function() {
    var parse = ARTC.mathJS(ARTC.mathJSDefaults.functions, ARTC.mathJSDefaults.operators, ARTC.mathJSDefaults.symbols);
    return { parse : parse}
}());
