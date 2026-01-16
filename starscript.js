let varstorage = {};
let arraystorage = new Array;

function print(value) {
    if (value == ret()) {
        console.log(ret(value));
    } else if (varstorage[value]) {
        console.log(varstorage[value]);
    } else if (arraystorage[value]) {
        console.log(arraystorage[value]);
    } else {
        console.log(value);
    }
    if (value == len()) {
        console.log(len(value));
    }
}

function variable(variable, value) {
    varstorage[variable] = value;
}

function array(arr, value) {
    arraystorage[arr] = value;
}

function ret(name) {
    return varstorage[name] || null;
}

function len(name) {
    if (name && name.length !== undefined) {
        return name.length;
    }
    return 0;
}
