const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(4))

/*
o toString converte o valor incialmente em Number
Num valor de String, adicionando o 2 no parenteses
esse valor é transformado em binário
*/
console.log(media.toString())
console.log(media.toString(2))

console.log(typeof media)