const togglePasswordDisplay = document.getElementById("toggle-password-display");
const passwordDisplayBox = document.getElementById("password-input");
const passwordIcon = document.getElementById("password-icon");

const hidenPasswordIcon = "eye-outline";
const exposedPasswordIcon = "eye-off-outline";

var passwordHidden = true;

togglePasswordDisplay.addEventListener('click', () => {
    if (passwordHidden) {
        // Caso a senha estiver escondida, iremos mostra-lá e alterar o icone.

        passwordDisplayBox.type = "text";
        passwordIcon.name = exposedPasswordIcon;
        passwordHidden = false;
    }
    else {
        // Caso a senha estiver exposta, iremos esconde-lá e alterar o icone.

        passwordDisplayBox.type = "password";
        passwordIcon.name = hidenPasswordIcon;
        passwordHidden = true;
    }
})

// REALIZANDO A IMPRESSÃO DOS DETALHES DE LOGIN

const loginForm = document.getElementById("login-form");
const emailTextBox = document.getElementById("email-input");
const lembrarDeMimInput = document.getElementById("remember-me-input");

/*
loginForm.addEventListener('submit', () => {
    let passwordGiven = passwordDisplayBox.value;
    let emailGiven = emailTextBox.value;
    let lembrarDeMimGiven = lembrarDeMimInput.value;

    alert("LOGIN FEITO: \n Email: " + emailGiven + "\nSenha: " + passwordGiven + "\n Lembrar de mim: " + lembrarDeMimGiven)
})*/