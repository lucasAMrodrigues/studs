function ContrutorPessoa (nome){
    this.nome =nome
    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p2 = new ContrutorPessoa('Lucas')
p2.falar()