function jogar(escolhaUsuario) {

    let numeroAleatorio = Math.random();
    let escolhaComputador;

    if (numeroAleatorio < 0.33) {
        escolhaComputador = "pedra";
    } else if (numeroAleatorio < 0.66) {
        escolhaComputador = "papel";
    } else {
        escolhaComputador = "tesoura";
    }

    let resultadoFinal = "";

    if (escolhaUsuario === escolhaComputador) {
        resultadoFinal = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        resultadoFinal = "Ganhou! " + escolhaUsuario + " vence " + escolhaComputador + ".";
    } else {
        resultadoFinal = "Perdeu! " + escolhaComputador + " vence " + escolhaUsuario + ".";
    }


    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <p>Você escolheste: <strong>${escolhaUsuario}</strong></p>
        <p>O computador escolheu: <strong>${escolhaComputador}</strong></p>
        <h3>${resultadoFinal}</h3>
    `;
}
