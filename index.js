import cipher from './cipher.js';

const btnEncodeElement = document.getElementById("btnEncode");

function encodeMessage(e) {
  e.preventDefault();
  const offset = Number(document.getElementById("offset").value);

  let str = document.getElementById("str").value;

  const messageEncode = cipher.encode(offset, str);
  document.getElementById("result").value = messageEncode;
}

btnEncodeElement.addEventListener('click', encodeMessage);

const btnDecodeElement = document.getElementById("btnDecode");
function decodeMessage(e) {
  e.preventDefault();
  const offset = Number(document.getElementById("offset").value);

  let str = document.getElementById("str").value;

  const messageDecode = cipher.decode(offset, str);
  document.getElementById("result").value = messageDecode;
}

btnDecodeElement.addEventListener('click', decodeMessage);
