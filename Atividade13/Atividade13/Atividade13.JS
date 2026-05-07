const imgJanela = document.getElementById('imagem-janela');
const titulo = document.getElementById('titulo-estado');

const imgFechada = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqdZ2VF8R12K-drl32VmwmMs_9W893DJrEQ&s";
const imgAberta = "https://i.pinimg.com/736x/b5/da/fd/b5dafdf35c7e0b77e4be6453c04069a7.jpg";
const imgQuebrada = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSlOKOg7lv2q4AVjyTyWpigYZobTL1yccew&s";


let estaQuebrada = false;


imgJanela.addEventListener('mouseover', () => {
    if (!estaQuebrada) {
        imgJanela.src = imgAberta;
        titulo.innerText = "Janela Aberta";
    }
});


imgJanela.addEventListener('mouseout', () => {
    if (!estaQuebrada) {
        imgJanela.src = imgFechada;
        titulo.innerText = "Janela Fechada";
    }
});


imgJanela.addEventListener('click', () => {
    estaQuebrada = true; 
    imgJanela.src = imgQuebrada;
    titulo.innerText = "Janela Quebrada";
});
