function executarOperacoes() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    let soma = num1 + num2;
    let subtraçao = num1 - num2;
    let produto = num1 * num2;
    let divisao = num1 / num2;
    let resto = num1 % num2;

    alert(
        `Resultados:\n` +
        `Soma: ${soma}\n` +
        `Subtração: ${subtraçao}\n` +
        `Produto: ${produto}\n` +
        `Divisão: ${divisao}\n` +
        `Resto: ${resto}`
    );
}
