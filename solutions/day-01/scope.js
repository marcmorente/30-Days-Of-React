a = 'JavaScript';
b = 10;
const test = 2;
let aaa = 'a'
function letsLearnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}
console.log(a, b);