window.addEventListener("load", function () {
    const senhaCorreta = "07/09"; // Defina sua senha correta aqui

    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitButton");
    const conteudoEscondido = document.querySelector(".conteudo-escondido");

    submitButton.addEventListener("click", function () {
        const senhaDigitada = passwordInput.value;

        if (senhaDigitada === senhaCorreta) {
            // Exibe o conteúdo oculto
            conteudoEscondido.style.display = "block";
            // Oculta o campo de senha
            document.querySelector(".senha").style.display = "none";
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    });
});
