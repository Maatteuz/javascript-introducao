// itarator = iterador = contador

// for(let i = 1; i <= 11; i++){
//     console.log(i);
// }let contador = 0;

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }

// for(let i = 1; i <= 10; i++){
//      console.log(`5 x ${i} = ` , i * 5);
//  }

// 
// for(let i = 1; i <= 100; i++){
//      contador += i;
//  }
//  console.log(`a soma dos 100 primeiros numeros é: ` , contador);

// for(let i = 1; i <= 50; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
//   }


// let nomes = ["Camila" , "Mateus" , "Lais" , "Frank" , "Vitoria" , "Jefferson" , "Ana" , "Edgar"];

// for (let i = 0; i < nomes.length; i++){
//     console.log(`Seja Bem-Vindo(a), ${nomes[i]}`);
// }

// let contador = 1;
// for(let i = 1; i <= 10; i++){
//      contador *= i;
//  }
//  console.log(`a multiplicação dos 100 primeiros numeros é: ` , contador);


// let nome = "Mateus";

// console.log(numeros[0]);
// console.log(nome[220]);


let contador = 0;
let numeros = [1,2,3, 0]
let nomes = ["Camila" , "Mateus" , "Lais" , "Frank" , "Vitoria" , "Jefferson" , "Ana" , "Edgar"];

function contar(array){
    
while(array[contador] != undefined){
    contador++;
}
console.log(contador);
}


contar (numeros)
contar (nomes)
contar()

