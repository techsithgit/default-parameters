
// simple add function without default parameters
let add = (a,b) => {
    return a + b;
};

console.log(add()); //a = undefined , b = undefined : outputs NaN

// add Default parameteres ES5 Way
let add = (a,b) => {
    a = a || 0;
    b = b || 0;
    return a + b;
};

console.log(add()); //a = 0 , b = 0 : outputs o
console.log(add(1)); // a =1 , b = 0 : outputs 1
console.log(add(undefined, 1)); // a =0 , b = 1 : outputs 1

// add default parameters ES6 way
let add = (a = 0,b = 0) => {
    return a + b;
};

// passing object literal without default parameters
let x = {a:1, b:2};

let add = (obj) => {
    return obj.a + obj.b;
};

console.log(add(x)); //obj = undefniend : outputs error

// passing object literal with default parameters ES5 way
let x = {a:1, b:2};

let add = (obj) => {
    obj = obj || {};
    let a = obj.a || 0;
    let b = obj.b || 0;
    return a + b;
};

console.log(add(x)); //a =0 , b = 0 : outputs o


// passing object literal with default parameters ES6 way
let x = {a:1, b:2};

let add = ({a=0, b=0}= {}) => {
    return a + b;
};

console.log(add(x)); //a = 0 , b = 0 : outputs o