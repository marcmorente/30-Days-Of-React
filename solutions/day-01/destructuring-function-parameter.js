const rectangle = { width: 20, height: 10 }
const calculateArea = ({ width, height }) => width * height
// const calculatePerimeter = ({ width, height } = 2 * (width * height))

console.log(calculateArea({...rectangle}));
