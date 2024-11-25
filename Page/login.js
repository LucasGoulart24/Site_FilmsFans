// Login
function cadastro() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email && senha) {
        window.alert('Cadastro com sucesso!');
    }else {
        window.alert('Por favor faça seu cadastro');
    }
}