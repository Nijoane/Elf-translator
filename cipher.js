
const cipher = {
  encode: (str, offset) => {
    let thisCipher = "";
    for(let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);

      if(code >= 65 && code <= 90) {
        thisCipher += String.fromCharCode(((code -65 + offset)%26)+ 65);

      } else if(code >= 97 && code <= 122) {
        thisCipher += String.fromCharCode(((code -97 + offset)%26)+ 97);

      } else {
        thisCipher += str.charAt(i);
      }
    }  
    
    return thisCipher;
  },

  decode: (str, offset) => {
    let thisDecipher = "";
    for(let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);

      if(code >= 65 && code <= 90) {
        thisDecipher += String.fromCharCode(((code - 90 - offset)%26)+ 90);

      } else if(code >= 97 && code <= 122) {
        thisDecipher += String.fromCharCode(((code - 122 - offset)%26)+ 122);

      } else {
        thisDecipher += str.charAt(i);
      }
    }  

    return thisDecipher;
  },
}

export default cipher;
