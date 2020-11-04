import cipher from './cipher.js';

const btnEncodeElement = document.getElementById("btnEncode");
const btnDecodeElement = document.getElementById("btnDecode");

btnEncodeElement.addEventListener('click', encodeMessage);
function encodeMessage() {
  let str = document.getElementById("str").value;

  const offset = Number(document.getElementByIdr("offset").value);
  const messageEncode = cipher.encode(str, offset);

 document.getElementById("result").innerHTML = messageEncode;
}

btnDecodeElement.addEventListener('click', decodeMessage);
function decodeMessage() {
  let str = document.getElementById("str").value;

  const offset = Number(document.getElementById("offset").value);
  const messageDecode = cipher.decode(str, offset);
  
 document.getElementById("result").innerHTML = messageDecode;
}

// eslint-disable-next-line no-console
console.log(btnDecodeElement)

// eslint-disable-next-line no-console
console.log(cipher);
