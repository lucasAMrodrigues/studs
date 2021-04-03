//Closure escopo criado quandfo uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas á função

//Contexrto lexico em ação

 const x = 'Global'

 function fora(){
     const x = 'Local'
     function dentro(){
         return x
     }
     return dentro
 }

 const minhaFuncao = fora()
 console.log(minhaFuncao())
 console.log(fora())