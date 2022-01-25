var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default {
    validateEmail: (email) => {
        if (email.match(emailRegex))
            return true
        else return false
    },
    validatePassword: (password) => {
        if (password.length >= 1)
            return true
        else return false
    },
}