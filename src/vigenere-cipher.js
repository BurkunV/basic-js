const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(directing = true){
        this.directing = directing;
    }
    encrypt(information, key) {
        return this.laborer(information, key, true);
    }

    decrypt(encodedInformation, key) {
        return this.laborer(encodedInformation, key, false);
    }

    laborer (information, key, encrypt = true) {
        let res = "";
        let times = 0;
        const informationUpper = information.toUpperCase();
        const keyBig = key.toUpperCase();
        for (let i = 0; i < information.length; i++) {
            const code = informationUpper.charCodeAt(i) - 65;
            if (code >= 0 && code <= 25) {
                const keyCode = keyBig.charCodeAt(times % key.length) - 65;
                let resultCode;
                if (encrypt) {
                    if(code + keyCode <= 25){
                        resultCode =  code + keyCode
                    } else{
                        resultCode = (code + keyCode) - 26;
                    }
                    
                } else {
                    if(code - keyCode  >= 0) {
                        resultCode =  code - keyCode
                    } else {
                        resultCode = (code - keyCode) + 26;
                    }
                    
                }
                res += String.fromCharCode(resultCode + 65);
                times++;
            } else {
                res += information[i];
            }
        }
        if(this.directing) {
            return res
        } 
        return res.split('').reverse().join('')
        
        
    }
}

module.exports = VigenereCipheringMachine;
