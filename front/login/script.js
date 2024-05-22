function rememberMeState() {
    const checkbox = document.getElementById("rememberMe");
    const isChecked = checkbox.checked;
    if (isChecked == true) {
        saveData();
    } else {
        localStorage.removeItem('dados');
    }
}

function saveData(){
    const user = document.getElementById("login");
    const password = document.getElementById("senha");

    const dados = {
        usuario: user.value,
        senha: password.value
    }

    localStorage.setItem('dados', JSON.stringify(dados));
}

function autoFill() {
    const dadosString = localStorage.getItem('dados');
    const dados = JSON.parse(dadosString);

    if(dados != null) {
        document.getElementById("login").value = dados.usuario;
        document.getElementById("senha").value = dados.senha;
        document.getElementById("rememberMe").checked = true;
    }
}

document.addEventListener("DOMContentLoaded", autoFill());