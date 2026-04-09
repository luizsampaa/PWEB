function calcularMedia() {
    let nome = prompt("Digite o nome do aluno:");
    let n1 = parseFloat(prompt("Digite a primeira nota:"));
    let n2 = parseFloat(prompt("Digite a segunda nota:"));
    let n3 = parseFloat(prompt("Digite a terceira nota:"));
    let n4 = parseFloat(prompt("Digite a quarta nota:"));

    let media = (n1 + n2 + n3 + n4) / 4;

    alert(`Aluno: ${nome}\nMédia Final: ${media.toFixed(2)}`);
    
    if(confirm("Deseja calcular outra média?")) {
        calcularMedia();
    }
}
