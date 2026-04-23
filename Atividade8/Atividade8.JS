const form = document.getElementById('pesquisaForm');
const listaDados = [];
const LIMITE = 45;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    listaDados.push({ idade, sexo, opiniao });

    document.getElementById('contador').innerText = `Entradas: ${listaDados.length} / ${LIMITE}`;
    form.reset();

    if (listaDados.length >= LIMITE) {
        calcularResultados();
        form.classList.add('hidden');
    }
});

function calcularResultados() {
    let somaIdades = 0;
    let maisVelha = -Infinity;
    let maisNova = Infinity;
    let pessimoCount = 0;
    let otimoBomCount = 0;
    let sexos = { M: 0, F: 0, O: 0 };

    listaDados.forEach(p => {

        somaIdades += p.idade;
        if (p.idade > maisVelha) maisVelha = p.idade;
        if (p.idade < maisNova) maisNova = p.idade;

    
        if (p.opiniao === 1) pessimoCount++;
        if (p.opiniao === 4 || p.opiniao === 3) otimoBomCount++;

   
        sexos[p.sexo]++;
    });

    const mediaIdade = (somaIdades / listaDados.length).toFixed(2);
    const porcentagemOtimoBom = ((otimoBomCount / listaDados.length) * 100).toFixed(2);


    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('stats').innerHTML = `
        <p><strong>Média de idade:</strong> ${mediaIdade} anos</p>
        <p><strong>Mais velha:</strong> ${maisVelha} anos</p>
        <p><strong>Mais nova:</strong> ${maisNova} anos</p>
        <p><strong>Respostas "Péssimo":</strong> ${pessimoCount}</p>
        <p><strong>Ótimo/Bom:</strong> ${porcentagemOtimoBom}%</p>
        <p><strong>Homens:</strong> ${sexos.M} | <strong>Mulheres:</strong> ${sexos.F} | <strong>Outros:</strong> ${sexos.O}</p>
    `;
}