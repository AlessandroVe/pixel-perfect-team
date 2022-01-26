import CryptoJS from "crypto-js"

const PASSWORD = "123"

export default {
    encryptData: (data) => {
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), PASSWORD).toString()
        return ciphertext
    },
    decryptData: (cipher, key) => {
        var bytes = CryptoJS.AES.decrypt(cipher, key);
        return  JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
}