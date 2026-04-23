// 1) 
function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

// 2) 
function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];
    return numeros.sort((x, y) => x - y);
}

// 3) 
function ehPalindromo(texto) {
   
    let limpo = texto.toLowerCase()
                     .normalize("NFD")
                     .replace(/[\u0300-\u036f]/g, "")
                     .replace(/\s+/g, '');          
    
    let reverso = limpo.split('').reverse().join('');
    return limpo === reverso;
}

// 4)
function verificarSubconjunto(p1, p2) {
   
    if (!p1 || !p2 || p1.trim() === "" || p2.trim() === "") {
        return "erro";
    }

    if (p1.includes(p2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// 5)
function diaDaSemana(dataString) {
   
    const dias = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    
    const data = new Date(dataString);
    
    
    if (isNaN(data.getTime())) return "Data inválida";
    
    return dias[data.getUTCDay()];
}

console.log("1) Maior número (10, 50, 20):", maiorDeTres(10, 50, 20));
console.log("2) Ordem crescente (80, 10, 45):", ordemCrescente(80, 10, 45));
console.log("3) É palíndromo? (A sacada da casa):", ehPalindromo("A sacada da casa"));
console.log("4) Subconjunto:", verificarSubconjunto("programação", "grama"));
console.log("5) Dia da semana (2023-12-25):", diaDaSemana("2023-12-25"));