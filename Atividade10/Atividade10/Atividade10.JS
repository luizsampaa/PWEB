
function executarCalculo() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const display = document.getElementById('resultado');

    if (altura > 0 && peso > 0) {
        const imc = calcularIMC(peso, altura);
        const classificacao = obterClassificacao(imc);
        
        display.innerText = `Seu IMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`;
    } else {
        display.innerText = "Por favor, insira valores válidos.";
    }
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function obterClassificacao(imc) {
    if (imc < 18.5) return "MAGREZA (OBESIDADE GRAU 0)";
    if (imc <= 24.9) return "NORMAL (OBESIDADE GRAU 0)";
    if (imc <= 29.9) return "SOBREPESO (OBESIDADE GRAU I)";
    if (imc <= 39.9) return "OBESIDADE (OBESIDADE GRAU II)";
    return "OBESIDADE GRAVE (OBESIDADE GRAU III)";
}
