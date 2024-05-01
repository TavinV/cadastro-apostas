const togglePasswordDisplay = document.getElementById("toggle-password-display");
const passwordInput = document.getElementById("password-input");
const passwordIcon = document.getElementById("password-icon");
var passwordHidden = true;

// password 2 variables

var passwordHidden2 = true;
const togglePasswordDisplay2 = document.getElementById("toggle-password-display2");
const passwordInput2 = document.getElementById("password-input2");
const passwordIcon2 = document.getElementById("password-icon2")

// shared variables

const hidenPasswordIcon = "eye-outline";
const exposedPasswordIcon = "eye-off-outline";

togglePasswordDisplay.addEventListener('click', () => {
    if (passwordHidden) {
        passwordInput.type = "text";
        passwordHidden = false;
        passwordIcon.name = exposedPasswordIcon;
    }
    else {
        passwordInput.type = "password";
        passwordHidden = true;
        passwordIcon.name = hidenPasswordIcon;
    }
})

togglePasswordDisplay2.addEventListener('click', () => {
    if (passwordHidden2) {
        passwordInput2.type = "text";
        passwordHidden2 = false;
        passwordIcon2.name = exposedPasswordIcon;
    }
    else {
        passwordInput2.type = "password";
        passwordHidden2 = true;
        passwordIcon2.name = hidenPasswordIcon;
    }
})

let inputs = {
    email_input: document.getElementById("email-input"),
    username_input: document.getElementById("username-input"),
    password_input: document.getElementById("password-input"),
    password2_input: document.getElementById("password-input2"),
    name_input: document.getElementById("name-input"),
    age_input: document.getElementById("age-input"),
    phone_input: document.getElementById("phone-input"),
    cpf_input: document.getElementById("cpf-input"),
}

// Mensagens de erro

let errorMessageEmail = document.getElementById("error-message-email")
let errorMessageUsername = document.getElementById("error-message-username")
let errorMessagePassword = document.getElementById("error-message-password")
let errorMessagePassword2 = document.getElementById("error-message-password2")
let errorMessageName = document.getElementById("error-message-name")
let errorMessageAge = document.getElementById("error-message-age")
let errorMessageTel = document.getElementById("error-message-tel")
let errorMessageCpf = document.getElementById("error-message-cpf")

// Icones de erro / sucesso

const warningIcon = `<ion-icon name="warning-outline"></ion-icon>`
const successIcon = `<ion-icon name="checkmark-outline"></ion-icon>`
const successClass = "success-message"
const successClass = "success-message"

const register_form = document.getElementById("register-form");

function stringContemTexto(texto1, texto2) {
    return texto2.split('').some(char => texto1)
}

register_form.addEventListener('submit', (e) => {
    let erros = 0;

    // Todos os campos estão preenchidos

    for (const [key, value] of Object.entries(inputs)) {
        // alert(key + " : " + value.value);

        if (value.value == " " || value.value == null || value.value == "") {
            value.innerHTML = "Campo obrigatório!"
        }
    }

    // Nome de usuário

    usernamePassed = true

    const prohibitedChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;~^1234567890`
    const usernameContemCaracteresProibidos = prohibitedChars.split('').some(char => inputs.username_input.value)

    if (usernameContemCaracteresProibidos) {
        erros++
        usernamePassed = false
        errorMessageUsername.innerHTML = "O nome de usuário não pode conter caracteres especiais!" + warningIcon
    }

    // Caso todos os testes sejam positivos 
    if (usernamePassed) {
        errorMessageUsername.innerHTML = successIcon
        errorMessageUsername.setAttribute("class", successClass)
    }

    // Senha 

    passwordPassed = true

    const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
    const numbers = `1234567890`

    const senhaContemCaracterEspecial = specialChars.split('').some(char => inputs.password_input.value)
    const senhaContemNumeros = numbers.split('').some(char => inputs.password_input.value)

    if (!senhaContemCaracterEspecial) {
        erros++
        passwordPassed = false
        errorMessagePassword.innerHTML = "Senha deve conter ao menos um caracter especial!" + warningIcon
    }
    if (!senhaContemNumeros) {
        erros++
        passwordPassed = false
        errorMessagePassword.innerHTML = "Senha deve conter ao menos um numero!" + warningIcon
    }

    // Caso todos os testes sejam positivos 

    if (passwordPassed) {
        errorMessagePassword.innerHTML = successIcon
        errorMessagePassword.setAttribute("class", successClass)
    }


    // Senhas batem

    password2Passed = true

    if (inputs.password_input.value != inputs.password2_input.value) {
        erros++
        password2Passed = false
        errorMessagePassword2.innerHTML = "As senhas não coincidem!" + warningIcon
    }

    // Caso todos os testes sejam positivos 
    if (password2Passed) {
        errorMessagePassword2.innerHTML = successIcon
        errorMessagePassword2.setAttribute("class", successClass)
    }

    // Idade maior que 18
    agePassed = true;

    let obj = new Date();
    let year = obj.getFullYear()

    anoInserido = inputs.age_input.value.split("-")[0]

    if (year - anoInserido < 18) {
        erros++
        errorMessageAge.innerHTML = "Esse site é proibido para menores de 18 anos!" + warningIcon

    }
    // Impedir o envio do formulario 

    if (erros > 0) {
        e.preventDefault()
    }
})

// Adicionar traços, DDD entre outros

let CpfInput = inputs.cpf_input

CpfInput.addEventListener('keypress', () => {

    let TextLenght = CpfInput.value.length

    if (TextLenght === 3 || TextLenght === 7) {
        CpfInput.value += '.'
    } else if (TextLenght === 11) {
        CpfInput.value += '-'
    }
})

let PhoneInput = inputs.phone_input

PhoneInput.addEventListener('keypress', () => {
    let TextLenght = PhoneInput.value.length

    console.log(PhoneInput.value.charAt(PhoneInput.value.length))

    if (TextLenght === 0) {
        PhoneInput.value += "+"
    } else if (TextLenght === 3 || TextLenght === 6) {
        PhoneInput.value += " "
    } else if (TextLenght === 12) {
        PhoneInput.value += "-"
    }
})
