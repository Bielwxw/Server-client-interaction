const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (buscarPorTitulo.checked) {
        window.location.assign('/?titulo=' + titulo.value);
    }
    else if (buscarPorAno) {
        window.location.assign('/' + ano.value);
    }
});

function habilitarBusca(campo) {
    var checkBoxTitulo = document.getElementById("buscarPorTitulo");
    var checkBoxAno = document.getElementById("buscarPorAno");
    var campoTitulo = document.getElementById("titulo");
    var campoAno = document.getElementById("ano");

    if (campo === 'titulo') {
        if (checkBoxTitulo.checked) {
            campoTitulo.disabled = false;
            campoAno.disabled = true;
            checkBoxAno.checked = false;
        } else {
            campoTitulo.disabled = true;
        }
    } else if (campo === 'ano') {
        if (checkBoxAno.checked) {
            campoAno.disabled = false;
            campoTitulo.disabled = true;
            checkBoxTitulo.checked = false;
        } else {
            campoAno.disabled = true;
        }
    }
}

