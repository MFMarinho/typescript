export interface IVeiculos {
    nome: string;
    ano: number;
    flex: boolean;

    abastecer(tipoDeComb: string): void;
}

export class Carro implements IVeiculos {
    constructor (
        public nome: string,
        public ano: number,
        public flex: boolean
    ){}

    abastecer(tipoDeComb: string): void {
        console.log(`O carro ${this.nome} abasteceu com ${tipoDeComb}.`);
    }
}

function main(){
    const carro = new Carro ("Gol", 2020, true);

    console.log(carro);
    carro.abastecer("gasolina");
}

main();

// -------------------------------

// export interface IVeiculos {
//     nome: string;
//     ano: number;
//     flex: boolean;

//     abastecer(tipoDeComb: string): void;
// }

// export interface ILoja extends IVeiculos {
//     nomeLoja: string;
// }

// export class Carro implements ILoja {
//     constructor (
//         public nome: string,
//         public ano: number,
//         public flex: boolean,
//         public nomeLoja: string,
//     ){}

//     abastecer(tipoDeComb: string): void {
//         console.log(`O carro ${this.nome} abasteceu com ${tipoDeComb}.`);
//     }
// }

// function main(){
//     const carro = new Carro ("Ford Ka", 2018, true, "ViaSul");

//     console.log(carro);
//     carro.abastecer("gasolina");
// }

// main();

