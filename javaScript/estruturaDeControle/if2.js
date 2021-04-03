function teste(num){
    if (num > 7)
        console.log(num)

    console.log('Final')
}

teste(6)
teste(8)

function teste2(num){
    if (num > 7); {  //não utilizar ';', numa estrutura de controle
        console.log(num)
    }
}

teste(6)
teste(8)