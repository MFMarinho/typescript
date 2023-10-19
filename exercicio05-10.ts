import readline from "readline-sync";

// EXERCICIO 01

// class Pessoa {
//     nome: string;
//     idade: number;
//     email: string;
//     constructor(nome: string, idade: number, email: string) {
//         this.nome = nome;
//         this.idade = idade;
//         this.email = email;   
//     }
// }

// let matheus = new Pessoa ("Matheus", 27, "email@email.com");
// console.log(matheus);

// EXERCICIO 02

// class Aluno extends Pessoa {
//     matricula: number;
//     constructor (nome: string, idade: number, email: string, matricula: number){
//         super(nome, idade, email);
//         this.matricula = matricula;
//     }
// }

// let lucas = new Aluno("Lucas", 26, "email@email.com", 1);
// console.log(lucas);

// EXERCICIO 03

// class Retangulo {
//     largura: number;
//     altura: number;
//     constructor(largura: number, altura: number){
//         this.largura = largura;
//         this.altura = altura;
//     }

//     area() {
//         return this.largura * this.altura;
//     }
//     perimetro() {
//         return (this.largura*2) + (this.altura*2);
//     }

// }

// let teste = new Retangulo (1,2);
// console.log(teste.area());

// EXERCICIO 04

// class Circulo {
//     raio: number;
//     constructor(raio: number){
//         this.raio = raio;
//     }

//     area(raio: number) {
//         let area = Math.PI * (raio^2);
//         return area;
//     }

//     circuferencia(raio: number) {
//         let circ = 2 * Math.PI * raio;
//         return circ;
//     }
// }

// let teste2 = new Circulo(2);
// console.log(teste2.circuferencia(3));

// EXERCICIO 05

// class ContaBancaria{
//     saldo: number;
//     numeroConta: number;
//     constructor(saldo: number, numeroConta: number){
//         this.saldo = saldo;
//         this.numeroConta = numeroConta;
//     }

//     depositar(valor){
//         this.saldo += valor;
//         console.log("Deposito realizado com sucesso!");
//     }

//     sacar(valor){
//         this.saldo -= valor;
//         console.log("Saque realizado com sucesso!");
//     }

//     verificarSaldo(){
//         console.log(`Seu saldo é ${this.saldo}.`);
//     }
// }

// EXERCICIO 06


