//1
function continhas (a, b) {
    return{
    soma : a + b,
    subt : a - b,
    mult : a * b,
    divd : a / b
    }
}
console.log(continhas(5,5))

//2
const qualTriangulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado2 == lado3){
        console.log('Equilatero')
    }else if (lado1 == lado2  || lado2 == lado3 || lado1 == lado3 ){
        console.log('Isosceles')          
    }else {
        console.log('Escaleno')  
    }
} 
qualTriangulo(2,2,2)
qualTriangulo(1,2,3)
qualTriangulo(2,2,3)