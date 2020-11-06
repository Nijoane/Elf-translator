const upperCase = 65;
const lowerCase = 97;
const maxUpperCase = 90;
const maxLowerCase = 122;

const cipher = {
  encode: (offset, str) => {
    let thisCipher = "";
    if(str == "" || str == null || offset == "" || offset == null){
      throw new TypeError('Ops, something seems to have gone wrong ):', 'cipher.js', 10);

    }else{
      for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
  
        if(code >= upperCase && code <= maxUpperCase){
          thisCipher += String.fromCharCode((code -upperCase + offset) %26 + upperCase);
  
        }else if(code >= lowerCase && code <= maxLowerCase){
          thisCipher += String.fromCharCode((code -lowerCase + offset) %26 + lowerCase);

        }else{
          thisCipher += str.charAt(i);
        }
      }  
    }
    return thisCipher;
  },

  decode: (offset, str) => {
    let thisDecipher = "";

    if(str == "" || str == null || offset == "" || offset == null){
      throw new TypeError('Ops, something seems to have gone wrong ):', 'cipher.js', 32);

    }else{
      for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
  
        if(code >= upperCase && code <= maxUpperCase){
          thisDecipher += String.fromCharCode((code - maxUpperCase - offset) %26 + maxUpperCase);
  
        }else if(code >= lowerCase && code <= maxLowerCase){
          thisDecipher += String.fromCharCode((code - maxLowerCase- offset) %26 + maxLowerCase);
          
        }else{
          thisDecipher += str.charAt(i);
        }
      }  
    }
    return thisDecipher;
  },
}

export default cipher;
