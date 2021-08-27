const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = countries.filter((country) => country.includes('land'))
console.log(countriesWithLand)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter(number => number % 2 === 0)
const odds = numbers.filter(number => number % 2 !== 0)
console.log(evens)
console.log(odds)
