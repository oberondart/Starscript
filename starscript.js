let varstorage = {};
let arraystorage = new Array;

function print(value) {
    if (value == ret()) {
        console.log(ret(value));
        return;
    } else if (varstorage[value]) {
        console.log(varstorage[value]);
        return;
    } else if (arraystorage[value]) {
        console.log(arraystorage[value]);
        return;
    } else if (value == len()) {
        console.log(len(value));
        return;
    } else {
        console.log(value);
        return;
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
    if (name && name.length !== undefined && varstorage[name] == false) {
        console.log(name.length);
    } else if (varstorage[name]) {
        console.log(varstorage[name].length)
        return;
    } else {
        console.log(name)
    }
}

function condition(input) {
    if (varstorage[input] || arraystorage[input] || input == true) {
        print("true")
        return
    } else {
        print("false")
        return
    }
}
