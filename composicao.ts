export class Jogo{
    constructor(public nome: string, public ano: number){}
}

export class MMORPG{
    public jogos: Jogo[] = [];

    adicionarJogo(jogos: Jogo){
        this.jogos.push(jogos);
    }

    listarJogos(){
        console.log("Lista de Jogos:");
        for (const jogos of this.jogos) {
            console.log(`Nome: ${jogos.nome}  |  Ano de Lançamento: ${jogos.ano}`);
        }
    }
}


function main(){
    const meusJogos = new MMORPG();
    const jogo1 = new Jogo("Tibia", 1996);
    const jogo2 = new Jogo("BigTime", 2022);

    meusJogos.adicionarJogo(jogo1);
    meusJogos.adicionarJogo(jogo2);
    meusJogos.listarJogos();
}

main();