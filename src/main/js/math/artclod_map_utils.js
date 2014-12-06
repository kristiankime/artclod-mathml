if (!ARTC) {
    var ARTC = {};
}

ARTC.argMapCreate = function(map){
    return function(key, num_args) {
        if (typeof num_args !== 'undefined') {
            var argsKey = key + "#" + num_args
            if ( map.hasOwnProperty(argsKey) ) {
                return map[argsKey];
            }
        }
        return map[key];
    };
}
