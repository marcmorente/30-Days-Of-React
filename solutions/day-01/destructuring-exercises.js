const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

function getPersonInfo(person) {
    const {firstName, lastName, age, country, job} = person
    const {skills, languages} = person
    const [HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python, D3] = skills
    const [Amharic, English, Suomi] = languages

    console.log(`
        ${firstName} ${lastName} lives ${country}. Hi is ${age} old.
        He is an ${job}. He teaches ${HTML}, ${CSS}, ${JavaScript}, 
        ${React}, ${Redux}, ${Node}, ${MongoDB}, ${Python} and ${D3}. 
        He speaks ${Amharic}, ${English} and a little bit of ${Suomi}
    `)
}

getPersonInfo(person)