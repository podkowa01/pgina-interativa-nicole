function entrar() {

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login === "" || senha === "") {
        alert("Digite o login e a senha.");
        return;
    }

    alert("Login realizado com sucesso!");
}


function mostrar(tipo) {

    const texto = document.getElementById("texto");

    if (tipo === "chegada") {

        texto.innerHTML = `
            <h2>🐷 Chegada dos Leitões</h2>

            <p>
                Registre a chegada dos leitões na Granja Podkowa.
            </p>

            <p>
                Quantidade, data de chegada, origem e lote
                poderão ser cadastrados aqui.
            </p>
        `;

    } else if (tipo === "creche") {

        texto.innerHTML = `
            <h2>🏠 Saída para a Creche</h2>

            <p>
                Registre a saída dos leitões para a creche.
            </p>

            <p>
                Informe o lote, quantidade de animais,
                data de saída e destino.
            </p>
        `;

    } else if (tipo === "abate") {

        texto.innerHTML = `
            <h2>🚛 Saída para o Abate</h2>

            <p>
                Registre os animais enviados para o abate.
            </p>

            <p>
                Informe o lote, quantidade, data de saída
                e destino dos animais.
            </p>
        `;

    }
}