const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//conceito de closure
//o let com escopo de bloco vai pegar o valor i 
//em cada intervalo