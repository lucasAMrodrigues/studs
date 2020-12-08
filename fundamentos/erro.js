function tratarErroLancar(erro){
    throw  {
        msg: 'Erro Interno',
        e: erro.TypeError,
        data: new Date
    } 
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
   }catch(e){
       tratarErroLancar(e)
   }finally{
       console.log('final')
   }  
}

const onj = {
    nome: 'Roberto'
}
imprimirNomeGritado(onj)