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

// Checar 

template = `
Hi
<ion-icon name="warning-outline"></ion-icon>
`

alert("You are my sunshine")
error = document.getElementById("error-message-email")
error.innerHTML = template