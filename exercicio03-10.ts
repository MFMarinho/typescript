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

// function imprimirTabuada(numero: number){
//     let num = readline.questionInt("Insira um número: ");
//     let tabuada = " ";
//     for (var count=1; count<=10 ; count++){
//         tabuada += `\n ${num} x ${count} = ${num*count}`;
//     }
//     console.log(tabuada);
// }

// imprimirTabuada(5);

// EXERCICIO 10

// function verificarPrimo(): void{
//     let num = readline.questionInt("Insira o número: ");
//     let divisores = 0;
//     for(var count=1 ; count<=num ; count++){
//         if(num % count == 0){
//             divisores++;
//         }
//     }
//     if (divisores===2){
//         console.log(`O número ${num} é primo.`);
//     } else {
//         console.log(`O número ${num} não é primo.`);    
//     }
// }

// verificarPrimo();

// ------------------------------------------
// SLIDE 30-31

// EXERCICIO 01

// function saudacao(nome: string = 'pessoa'){
//     console.log(`Olá, ${nome}!`);
// }

// saudacao("Matheus");

// EXERCICIO 02

// function calculadora(num1: number,num2: number,operacao: string= 'adição') {
//     switch (operacao){ 
//         case 'adição': 
//             console.log(`${num1+num2}`)
//             break;
//         case 'subtração':
//             console.log(`${num1-num2}`);
//             break;
//         case 'multiplicação':
//             console.log(`${num1*num2}`);
//             break;
//         case 'divisão':
//             console.log(`${num1/num2}`);
//             break;
       
//     }  
    
// }
// calculadora(8,4,'subtração');

// EXERCICIO 03

// function contagemRegressiva(inicio: number= 10){
//     while (inicio >= 1){
//         console.log(inicio);
//         inicio--;
//         }
// }

// contagemRegressiva();

// EXERCICIO 04

// function apresentacao(nome: string= 'Alguém', idade: number= undefined, profissao: string= "desempregado"){
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`)
// }

// apresentacao("Matheus",27,"autônomo");

// EXERCICIO 05

// function mensagemPersonalizada(texto: string, estilo: string= 'normal'){

//     switch (estilo){
//         case 'normal':
//             console.log(texto);
//             break;
//         case 'negrito':
//             console.log(texto.bold());
//             break;
//         case 'italico':
//             console.log(texto.italics());
//             break;
//     }
// }

// mensagemPersonalizada("Olá mundo!", 'negrito');

// ---------------------------------------
// FUNÇÃO COM RETURN (SLIDE 39-40)

// function criarMensagemDeSaudacao(nome: string, saudacao: string= 'Hello'){
//     const mensagem = `${saudacao}, ${nome}!`;
//     return mensagem;
// }

// let mensagemDeSaudacao = criarMensagemDeSaudacao(1);
// console.log(mensagemDeSaudacao);

// EXERCICIO 01

// function somar(num1: number,num2: number){
//     const somando = `${num1+num2}`;
//     return somando;
// }

// console.log(somar(1,2));

// EXERCICIO 02

// function ehPar(num: number){
//     if (num % 2 === 0){
//         const resposta = true;
//         return resposta;
//     } else {
//         const resposta = false;
//         return resposta;
//     }
// }

// console.log(ehPar(3));

// EXERCICIO 03

// function maiorNumero(num1: number,num2: number,num3: number){
//     const maior = Math.max(num1,num2,num3);
//     return maior;
// }

// console.log(maiorNumero(3,11,8));

// EXERCICIO 04

// function calcularIMC(peso: number,altura: number){
//     return peso/(altura^2);
// }

// console.log(calcularIMC(57,1.70));