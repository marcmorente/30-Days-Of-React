// a callback function, the function could be any name
const callback = (n) => {
    return n ** 2
}

// function take other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }

    return doSomething
}

console.log(higherOrder(2));