import readline from "readline";

class Usuario {
    constructor() {
        this.numeros = Array(9).fill(undefined);
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.contador = 0;
        this.jogador = "X";
        this.Njogadas = [];
        this.rodar();
    }

    rodar() {

        this.rl.on("line", (input) => {
 
            const posicao = parseInt(input);
            if (!isNaN(posicao) && posicao >= 0 && posicao <= 8 && this.numeros[posicao] === undefined) {
                this.Njogadas.push(Number(input));
                this.numeros[posicao] = this.jogador;
                this.contador++;
                this.exibirTabuleiro();

                // Alternar entre jogador X e jogador O
                this.jogador = this.jogador === "X" ? "O" : "X";

                // Verificar a vitória ou empate
                if (this.contador >= 5 && this.verificarVitoria()) {
                    console.log(`Jogador ${this.jogador === "X" ? "O" : "X"} Venceu!!, Zé fini`);
                    this.rl.close();
                } else if (this.contador === 9) {
                    console.log("Empate!");
                    this.rl.close();
                }
            } else {
                console.log("Jogada inválida. Tente novamente.");
            }
        });
    }

    exibirTabuleiro() {
        console.log(`
            ${this.numeros[0] || ' '} | ${this.numeros[1] || ' '} | ${this.numeros[2] || ' '}
            ---------
            ${this.numeros[3] || ' '} | ${this.numeros[4] || ' '} | ${this.numeros[5] || ' '}
            ---------
            ${this.numeros[6] || ' '} | ${this.numeros[7] || ' '} | ${this.numeros[8] || ' '}
        `);
    }

    verificarVitoria() {

        const vitriaLinhas = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6] // Diagonais
        ];

        for (const linha of vitriaLinhas) {
            const [a, b, c] = linha;
            if (this.numeros[a] && this.numeros[a] === this.numeros[b] && this.numeros[a] === this.numeros[c]) {
                return true;
            }
        }

        return false;
    }
}

const usuarioInstancia = new Usuario();
