const countriesNormalFunction = ['Finland', 'Estonia', 'Sweden', 'Norway']
countriesNormalFunction.forEach(function (country, index, array) {
    console.log(array)
    console.log(index, country.toUpperCase())
})

const countriesArrowFunction = ['Finland', 'Estonia', 'Sweden', 'Norway']
countriesArrowFunction.forEach((country, index) => console.log(index, country.toUpperCase()))
