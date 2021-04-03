function rand ({min = 1, max}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log('Rodado um d20 que deu: ' + rand({max:20}))
console.log('Rodado um d100 que deu: ' + rand({max:100}))
console.log('Rodado um d6 que deu: ' + rand({max:6}))