import readline from "readline-sync";

// // EXERCICIO 01 

// function exibirMensagem(): void{
//     console.log("Olá mundo!");
// }

// exibirMensagem();


// // EXERCICIO 02

// function dobro(num: number): void {
//     const mensagem = `${num*2}`;
//     console.log(mensagem);
// }

// dobro(2);

// // EXERCICIO 03

// function mostrarNumeros(inicio: number, fim: number): void{
//     while (inicio <= fim) {
//         if (inicio % 2 == 0) {
//           console.log(inicio); 
//         }
//         inicio++;
//     }
// }

// mostrarNumeros(1,10);

// // EXERCICIO 04

// function verificarPar(num: number){
//     if (num % 2 === 0){
//         console.log (`O número ${num} é par`);
//     } else {
//         console.log(`O número ${num} é impar`);
//     }
// }

// verificarPar(3);

// // EXERCICIO 05

// let array: Array<number> = [1,2,3,4,5];

// function imprimirLista(lista: Array<number>): void{
//     console.log(lista);
// }

// imprimirLista(array);

// // EXERCICIO 06

// const numeros: Array<number> = [1,2,3,4,5];

// function calcularMedia(array: Array<number>): number{
//     let soma = 0;
//     for (let i = 0; i < array.length; i++) {
//         soma += array[i];
//     }
//     const media = soma / array.length;
//     return media;
// }

// console.log(calcularMedia(numeros));

// // EXERCICIO 07

// const numMaiorNumero: Array<number> = [1,2,3,4,5]

// function maiorNumero(array : Array<number>){
//     console.log(Math.max(...array));
// }

// maiorNumero(numMaiorNumero);

// // EXERCICIO 08

// function contarVogais(palavra: string){
//     let totalVogal = 0;
//     let vogais = ['a', 'e', 'i', 'o', 'u'];
//     let i;
//     for (i = 0; i < palavra.length; i++ ) {
//         if(vogais.indexOf(palavra[i]) != -1) {
//             totalVogal++;
//         }
//     }
//     console.log(`O total de vogais da ${palavra} é ${totalVogal}.`);
// }

// contarVogais("Matheus");

// EXERCICIO 09

function imprimirTabuada(numero: number){
    let num = readline.questionInt("Insira um número: ");
    let tabuada = " ";
    for (var count=1; count<=10 ; count++){
        tabuada += `\n ${num} x ${count} = ${num*count}`;
    }
    console.log(tabuada);
}

imprimirTabuada(5);