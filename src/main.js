const login = document.getElementById('LOGIN_BUTTON');
const register = document.getElementById('REGISTER_BUTTON');

login.addEventListener("click", () => {
    window.open("../separate-pages/login.html", '_blank');
})

register.addEventListener("click", () => {
    alert("REGISTRAR")
})