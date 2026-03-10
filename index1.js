class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        // A fórmula está correta: peso / altura ao quadrado
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 40) {
            return "Obesidade";
        } else {
            return "Obesidade Grave";
        }
    }
}

// Testes
const jose = new Pessoa("José", 70, 1.75);
console.log(`${jose.nome} tem IMC: ${jose.calcularIMC().toFixed(2)} - Status: ${jose.classificarIMC()}`);

const vitor = new Pessoa("Vitor", 60, 1.69);
console.log(`${vitor.nome} tem IMC: ${vitor.calcularIMC().toFixed(2)} - Status: ${vitor.classificarIMC()}`);
