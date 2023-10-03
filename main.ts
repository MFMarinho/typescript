// instalar as bibliotecas:
// npm init -y
// npm install tsc
// npm install -g typescript
// npm install -g ts-node
// tsc main.ts (nome do arquivo)

function nome(){
    console.log("Olá");
    return 0;
}

nome();

// função 02: com retorno e sem parêmetros

function funcao02(): string {
    return "Minha segunda função";
}

console.log(funcao02());

// Função sem retorno e com parâmetros

function funcao03(nome: string): void{
    console.log("Bom dia " + nome);
}

// Função com retorno e com parâmetros

function funcao04(num1: number,num2: number): number{
    return num1 + num2;
}

console.log(funcao04(10,2));



