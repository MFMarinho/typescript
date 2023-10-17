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