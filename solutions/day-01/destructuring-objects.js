const rectangle = {
    width: 20,
    height: 10,
}

let { width, height, perimeter = 200 } = rectangle
// console.log(width, height, perimeter)

let { width: w, height: h } = rectangle
// console.log(w, h)

const props = {
    user: {
        firstName: 'Marc',
        lastName: 'Morente',
        age: 30
    },
    post: {
        title: 'Destructuring and Spread',
        subtitle: 'ES6',
        year: 2020
    },
    skills: ['JS', 'Reac', 'Redux', 'Node', 'Python']
}

// const { user, post, skills } = props
// const { firstName, lastName, age } = user
// const { title, subtitle, year } = post
// const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills

const { 
    user: { firstName, lastName, age },
    post: { title, subtitle, year }, 
    skills: [skillOne, skillTwo, skillThree, skillFour, skillFive] 
} = props
console.log(firstName)