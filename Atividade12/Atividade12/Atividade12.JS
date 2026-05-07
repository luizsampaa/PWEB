
function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}


const meuRetangulo = new Retangulo(10, 5);
const areaCalculada = meuRetangulo.calcularArea();

console.log("--- EXERCÍCIO 1: RETÂNGULO ---");
console.log(`Área do Retângulo: ${areaCalculada}`);
document.getElementById('resultado-retangulo').innerText = `Retângulo de ${meuRetangulo.base}x${meuRetangulo.altura} - Área Total: ${areaCalculada}`;


class Conta {
    constructor(nome, banco, numero, saldo) {
        this._nome = nome;
        this._banco = banco;
        this._numero = numero;
        this._saldo = saldo;
    }


    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get numero() { return this._numero; }
    set numero(valor) { this._numero = valor; }

    get saldo() { return this._saldo; }
    set saldo(valor) { this._saldo = valor; }
}

class Corrente extends Conta {
    constructor(nome, banco, numero, saldo, saldoEspecial) {
        super(nome, banco, numero, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

class Poupanca extends Conta {
    constructor(nome, banco, numero, saldo, juros, dataVencimento) {
        super(nome, banco, numero, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() { return this._juros; }
    set juros(valor) { this._juros = valor; }

    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(valor) { this._dataVencimento = valor; }
}


const contaCorr = new Corrente("Ana Silva", "Banco Digital", "1234-X", 1500, 500);
const contaPoup = new Poupanca("Carlos Gomes", "Banco Poupe", "5678-9", 10000, 0.7, "10/05/2026");


console.log("\n--- EXERCÍCIO 2: CONTAS ---");
console.log("Conta Corrente:", contaCorr);
console.log("Conta Poupança:", contaPoup);


const divContas = document.getElementById('resultado-contas');
divContas.innerHTML = `
    <p><strong>Corrente:</strong> ${contaCorr.nome} | Banco: ${contaCorr.banco} | Saldo: ${contaCorr.saldo}€ | Limite: ${contaCorr.saldoEspecial}€</p>
    <p><strong>Poupança:</strong> ${contaPoup.nome} | Juros: ${contaPoup.juros}% | Vencimento: ${contaPoup.dataVencimento}</p>
`;
