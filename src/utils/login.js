var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var regNumber = /^[0-9]+$/;

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
    validateNumberPhone: (numberString) => {
        if (numberString.match(regNumber)) {
            if (numberString.length === 10) {
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    }
}