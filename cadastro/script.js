const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// const estado = document.getElementById("state")
// const botao = document.getElementById("button")

// botao.addEventListener("click", () => {

//     if(estado.value == 'PI'){
//         alert('Por enquanto não atendemos os estados do Nordeste. Estamos trabalhando para que isso aconteça o quanto antes!')
//     }
// } )


const naoAceitaEstado = () => {

    let estado = document.getElementById('state')

    if(estado.value == 'MA' || estado.value == 'PI' || estado.value == 'CE' || estado.value == 'RN' || estado.value == 'PB' || estado.value == 'PE' || estado.value == 'AL' || estado.value == 'SE' || estado.value == 'BA' ){
        alert('No momento não estamos atendendo a região do nordeste mas estamos trabalhando para que isso aconteça o quanto antes. Obrigado pela compreensão!')
    }

    let validarCnpj = document.getElementsByClassName('cnpj')

    validarCnpj = validarCnpj.replace(/[^\d]+/g,'');
 
    if(validarCnpj == '') return false;
     
    if (validarCnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (validarCnpj == "00000000000000" || 
        validarCnpj == "11111111111111" || 
        validarCnpj == "22222222222222" || 
        validarCnpj == "33333333333333" || 
        validarCnpj == "44444444444444" || 
        validarCnpj == "55555555555555" || 
        validarCnpj == "66666666666666" || 
        validarCnpj == "77777777777777" || 
        validarCnpj == "88888888888888" || 
        validarCnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = validarCnpj.length - 2
    numeros = validarCnpj.substring(0,tamanho);
    digitos = validarCnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = validarCnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;

}

// function validarCNPJ(cnpj) {
 
//     cnpj = cnpj.replace(/[^\d]+/g,'');
 
//     if(cnpj == '') return false;
     
//     if (cnpj.length != 14)
//         return false;
 
//     // Elimina CNPJs invalidos conhecidos
//     if (cnpj == "00000000000000" || 
//         cnpj == "11111111111111" || 
//         cnpj == "22222222222222" || 
//         cnpj == "33333333333333" || 
//         cnpj == "44444444444444" || 
//         cnpj == "55555555555555" || 
//         cnpj == "66666666666666" || 
//         cnpj == "77777777777777" || 
//         cnpj == "88888888888888" || 
//         cnpj == "99999999999999")
//         return false;
         
//     // Valida DVs
//     tamanho = cnpj.length - 2
//     numeros = cnpj.substring(0,tamanho);
//     digitos = cnpj.substring(tamanho);
//     soma = 0;
//     pos = tamanho - 7;
//     for (i = tamanho; i >= 1; i--) {
//       soma += numeros.charAt(tamanho - i) * pos--;
//       if (pos < 2)
//             pos = 9;
//     }
//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitos.charAt(0))
//         return false;
         
//     tamanho = tamanho + 1;
//     numeros = cnpj.substring(0,tamanho);
//     soma = 0;
//     pos = tamanho - 7;
//     for (i = tamanho; i >= 1; i--) {
//       soma += numeros.charAt(tamanho - i) * pos--;
//       if (pos < 2)
//             pos = 9;
//     }
//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitos.charAt(1))
//           return false;
           
//     return true;
    
// }






