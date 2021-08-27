const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = countries.map(function (country) {
    return country.toUpperCase()
})

console.log(newCountries)

const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map((number) => number ** 2)

console.log(squares)