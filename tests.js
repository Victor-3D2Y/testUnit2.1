// Validar senha (requerida e deve conter pelo menos um caractere especial)


var specialCharacters = /[!@#$%^&*()_+\-={}[\]|:;'"<>,.?/]/;

function validatePassword(password) {
    if (password === "") {
        // displayPasswordMessage("Por favor, informe sua senha.");
        return false;
    } else if (!specialCharacters.test(password)) {
        // displayPasswordMessage("A senha deve conter pelo menos um caractere especial.");
        return false;
    } else {
        return true
    }

}

// Validar confirmação de senha
function confirmSenha(password, confirmPassword) {
    if (confirmPassword === "" && password === "") {
        // displayConfirmPasswordMessage("Por favor, confirme sua senha.");
        return false;
    } else if (password !== confirmPassword) {
        // displayConfirmPasswordMessage("As senhas digitadas não correspondem. Por favor, digite novamente.");
        return false;
    } else {
        return true
    }
}

function confirmAge(age) {
    if (age === "" || parseInt(age) < 18) {

        return false;
    } else {
        return true
    }
}

function onSubmit(password, confirmPassword, age) {
    const boleanPassword = validatePassword(password)
    const boleanConfirm= confirmSenha(password, confirmPassword)
    const boleanAge = confirmAge(age)

    if (boleanPassword == true && boleanAge == true && boleanConfirm == true) {
        return true
    } else {
        return false
    }
}

module.exports = { validatePassword, confirmAge, onSubmit, confirmSenha }