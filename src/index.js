import cipher from './cipher.js';

const btnEncodeElement = document.getElementById("btnEncode");
function encodeMessage(event) {
  event.preventDefault();

  let str = document.getElementById("str").value;

  const offset = Number(document.getElementById("offset").value);
  const messageEncode = cipher.encode(str, offset);

  document.getElementById("result").innerHTML = messageEncode;
}

btnEncodeElement.addEventListener('click', encodeMessage);

const btnDecodeElement = document.getElementById("btnDecode");
function decodeMessage(event) {
  event.preventDefault();

  let str = document.getElementById("str").value;

  const offset = Number(document.getElementById("offset").value);
  const messageDecode = cipher.decode(str, offset);
  
 document.getElementById("result").innerHTML = messageDecode;
}

btnDecodeElement.addEventListener('click', decodeMessage);

// eslint-disable-next-line no-console
console.log(cipher);