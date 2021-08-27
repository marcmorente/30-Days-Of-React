const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur)
//console.log(sum)

const sumPlusFive = numbers.reduce((previous, current) => previous + current, 5)
//console.log(sumPlusFive)

//Initial value will multiply by 10 each element
const value = numbers.reduce(function(previous, current) {
    console.log(previous, current)
    return previous * current
}, 10)
console.log(value)

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
//console.log(helloWorld) // "Hello world !"