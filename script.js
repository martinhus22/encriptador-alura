const input= document.querySelector(".input-texto")
const mensaje=document.querySelector(".mensaje")
const btnEncriptador = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const Copiar = document.querySelector(".copiar");

document.getElementById("div-aparece").style.display='none';
inputverificar();

document.getElementById('btn-encriptar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = textoEncriptado;
  input.value = "";
  aparece()
}

document.getElementById('btn-desencriptar').onclick=(e)=>{
   e.preventDefault();
   const textoDesencriptado= desencriptar(input.value);
   mensaje.value=textoDesencriptado;
   input.value="";
   aparece()
}

document.getElementById('copiar').onclick=(e)=>{
   e.preventDefault();
   const mensaje=document.querySelector(".mensaje");
   mensaje.select();
   navigator.clipboard.writeText(mensaje.value)
   mensaje.value="";
}


function btnEncriptar(){
    const textoEncriptado= encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value="";
}
   

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i= 0;i < matrizCodigo.length; i++) {
      if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
      }
    }
   return stringEncriptada; 

}

//function btnDesencriptar(){
  // const textodEncriptado= desencriptar(inputTexto.value)
  // mensaje.value=textodEncriptado
  // inputTexto.value="" 

//}//


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i= 0;i < matrizCodigo.length; i++) {
      if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
      }
    }
   return stringDesencriptada;

}

function aparece(){
  document.getElementById("div-desaparece").style.display='none';
  document.getElementById("div-aparece").style.display='block';
}

function home(){
  document.getElementById("div-aparece").style.display='none';
  document.getElementById("div-desaparece").style.display='block';
}

function inputverificar(){
  var inputPalabra=document.querySelector(".input-texto");
  inputPalabra.addEventListener("keypress",function(e){
    var keyCode=(e.keyCode? e.keyCode:e.which);
    if(keyCode >47 && keyCode<65){
      e.preventDefault();
    }
  })
}

