// par nome/valor
const saudacao = 'Opa' // contesto léxico

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Top',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)