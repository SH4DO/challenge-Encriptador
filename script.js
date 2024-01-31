let keys = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let keys2 = ['a', 'e', 'i', 'o', 'u'];
//---- orden de las keys a e i o u
const textContent = document.getElementById('text-main').value;

let copyText = document.querySelector('.btn.copy');
let textResponse = document.querySelector('.text-output');


function process(op) {
    // validarCadena();
    let textFinal = document.getElementById('text-main').value;
    let arrayText = textFinal.split('');

    
    //validar si hay algo escrito en el text area
    if (textFinal.length > 0) {

        // validar si tiene los caracteres requeridos
        if (validText(textFinal)) {

            //validar si es para encriptar
            if (op === 0) {
                textFinal = '';
                for (let i = 0; i < arrayText.length; i++) {
                    if (arrayText[i] == keys2[i]) { arrayText[i] = keys[i] }

                    switch (arrayText[i]) {
                        case 'a': arrayText[i] = keys[0]; break;
                        case 'e': arrayText[i] = keys[1]; break;
                        case 'i': arrayText[i] = keys[2]; break;
                        case 'o': arrayText[i] = keys[3]; break;
                        case 'u': arrayText[i] = keys[4]; break;
                    }
                    textFinal += arrayText[i];
                }


            }
            // si no, entonces es para desencriptar
            else {

                for (let i = 0; i < keys.length; i++) {
                    textFinal = textFinal.replaceAll(keys[i], keys2[i]);
                }
            }


            document.getElementById("default-output").style.display = "none";
            document.getElementById('result-output').style.display = "flex";

            document.querySelector('.text-output').innerHTML = textFinal;
            console.log(textFinal);
            document.getElementById("text-main").value = "";

        }
        else alert('ERROR ¡Solo letras minúsculas y sin acentos!');
     
    }
    // si no
    else {
        alert("ingrese un mensaje para encriptar");
    }

    



}

/*
copyText.addEventListener('click', () => {
    let text = textResponse.textContent;
    navigator.clipboard.writeText(text);

    alert('texto copiado:');
});

*/

function validText(cadena){
    const validar = /^[a-z\s]+$/ ; 
    return validar.test(cadena);
}

const copyClipboard = async () => {
    let texto = textResponse.textContent;
    try {
       await navigator.clipboard.writeText(texto); 
       console.log('texto copiado!');
       
    } catch (error) {
        console.error('Error al copiar:',error);
    }
}

