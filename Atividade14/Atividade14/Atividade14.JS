
const inputTexto = document.getElementById('campoTexto');
const radioMaiuscula = document.getElementById('btnMaiuscula');
const radioMinuscula = document.getElementById('btnMinuscula');


radioMaiuscula.addEventListener('change', function() {
    if (this.checked) {
        inputTexto.value = inputTexto.value.toUpperCase();
    }
});


radioMinuscula.addEventListener('change', function() {
    if (this.checked) {
        inputTexto.value = inputTexto.value.toLowerCase();
    }
});