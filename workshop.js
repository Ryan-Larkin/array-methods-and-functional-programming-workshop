function forEach(callback, theArray) {
    for (var i = 0, l = theArray.length; i < l; i++) {
        callback(theArray[i]);
    }
}

function map(mappingFunction, theArray) {
    var newArray = [];
    
    forEach(function(element) {
        newArray.push(mappingFunction(element))
    }, theArray);
    
    return newArray;
}

function filter(predicate, theArray) {
    var newArray = [];
    
    forEach(function(element) {
        if(predicate(element)) {
            newArray.push(element);
        }
    }, theArray)
    
    return newArray;
}

function every(predicate, theArray) {
    var newArray = [];
    
    for (var i = 0, l = theArray.length; i < l; i++) {
        if (predicate(theArray[i])) {
            newArray.push(theArray[i]);
        }
        else {
            return false;
        }
    }
    return true;
}

function some(predicate, theArray) {
    var newArray = [];
    
    for (var i = 0, l = theArray.length; i < l; i++) {
        if (predicate(theArray[i])) {
            return true;
        }
    }
    return false;
}

function indexOf(item, theArray) {
    for (var i = 0, l = theArray.length; i < l; i++) {
        if (theArray[i] === item) {
            return i;
        }
    }
    
    return -1;
}

function findIndex(predicate, theArray) {
    for (var i = 0, l = theArray.length; i < l; i++) {
        if (predicate(theArray[i])) {
            return i;
        }
    }
    
    return -1;
    
    // We must have findIndex because with indexOf, it uses === to match up the array item and the search item 
    // with their value and their type, but with objects, even if their values might be the same, the objects themselves
    // are different and will not fulfill the === condition. We need findIndex to match up object values
}

function first(n, theArray) {
    var bufferArray = [];
    
    if (arguments.length === 1) {
        return n[0];
    }
    else if (n > theArray.length) {
        return theArray;
    }
    else if (n < 0) {
        return bufferArray;
    }
    else {
        for (var i = 0; i < n; i++) {
            bufferArray.push(theArray[i]);
        }
        return bufferArray;
    }
}

function last(n, theArray) {
    var bufferArray = [];
    
    if (arguments.length === 1) {
        return n[n.length-1];
    }
    else if (n > theArray.length) {
        return theArray;
    }
    else if (n < 0) {
        return bufferArray;
    }
    else {
        var startingPosition = theArray.length-n;
        for (var i = startingPosition, l = theArray.length; i < l; i++) {
            bufferArray.push(theArray[i]);
        }
        return bufferArray;
    }
}

function pluck(property, arrayOfObjects) {
    return map(function(element) {
        return element[property];
    }, arrayOfObjects);
}

function flatten(theArray) {
    var tempArray = [];
        
    for (var i = 0, l = theArray.length; i < l; i++) {
        if (!Array.isArray(theArray[i])) {
            tempArray.push(theArray[i]);
        }
        else {
            tempArray = tempArray.concat(flatten(theArray[i]));
        }
    }
    
    return tempArray;
}

function negate1(predicate) {
    return function () {
        return !predicate.apply(this, arguments);
    };
}

function negate2(predicate) {
    return function () {
        return !predicate.apply(this, arguments);
    };
}

function compose1(fun1, fun2) {
    var functions = arguments;

    return function (result) {
        for (var i = functions.length - 1; i > -1; i--) {
            result = functions[i].call(this, result);
        }

        return result;
    };
}

function compose2(arrOfFuncs) {
    var functions = [];
    for (var i = 0; i < arrOfFuncs.length; i++) {
        functions.push(arrOfFuncs[i]);
    }

    return function (result) {
        for (var i = functions.length - 1; i > -1; i--) {
            result = functions[i].call(this, result);
        }

        return result;
    };
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};