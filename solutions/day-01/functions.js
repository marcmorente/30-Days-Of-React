//N arguments
function sumAllNums() {
	console.log(arguments);
	let sum = 0
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	return sum
}

//Self invoking functions
; (function (n) {
	console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
	return n * n
})(10)