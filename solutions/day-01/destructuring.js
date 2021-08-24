const numbers = [1, 2, 3]
const [one, two, three] = numbers
console.log(one, two, three);

const constants = [2.72, 3.14, 9.82, 37, 100]
const [e, pi, gravity, bodyTemp, boilingTemp] = constants
console.log(e, pi, gravity, bodyTemp, boilingTemp);

const countries = ['Findland', 'Sweden', 'Norway']
const [fin, sew, nor] = countries
console.log(fin, sew, nor);

//Destructuring nested arrays
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd);