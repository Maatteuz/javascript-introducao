// let idade = 17;
// if(idade >= 18) {
//     console.log("Maior de idade");
// }else{
//     console.log("Menor de idade");
    
// }

// questão 2
let numero;

if(!numero){
    console.log("Digite um numero válido");
    return;
    }

if(numero > 0){
    console.log(`${numero} é positivo`);
}else if(numero < 0){
    console.log(`${numero} é negativo`);
}else{
    console.log(`é zero`);
}