let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(Math.PI))

const arrowfunc = a => 2 * a

console.log(arrowfunc(Math.PI))

let tstAF = (a , b) => {
    return a + b
}

console.log(tstAF(3,2))

let ola = function() {
    return 'Ola'
}

ola = () => 'ola'

console.log(ola())