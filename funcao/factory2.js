
function criarProduto (nome, preco, percentDesc = 35){
    desconto =  preco - ((preco * percentDesc) / 100)
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('arroz', 25))
console.log(criarProduto('feijao', 15)) 