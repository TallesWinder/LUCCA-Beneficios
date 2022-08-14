
//Função para ativar menu tipo Hamburguer
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})


//Função para verificar Estados e Cnpj
const cadastrar = () => {

    //Validação de estados do Nordeste
    let estado = document.getElementById('state')
   
    if(estado.value == 'MA' || estado.value == 'PI' || estado.value == 'CE' || estado.value == 'RN' || estado.value == 'PB' || estado.value == 'PE' || estado.value == 'AL' || estado.value == 'SE' || estado.value == 'BA' ){
        alert('No momento não estamos atendendo a região do nordeste mas estamos trabalhando para que isso aconteça o quanto antes. Obrigado pela compreensão!')
    }

    //Validação do CNPJ
    let validaCnpj = document.getElementById('00N8V00000Lprk3').value

    validaCnpj = validaCnpj.replace(/[^\d]+/g,'');
 
    if(validaCnpj == '' || validaCnpj.length < 14) alert('CNPJ em branco ou menor que 14 números!');
    
    // Elimina CNPJs invalidos conhecidos
    if (validaCnpj == "00000000000000" || 
        validaCnpj == "11111111111111" || 
        validaCnpj == "22222222222222" || 
        validaCnpj == "33333333333333" || 
        validaCnpj == "44444444444444" || 
        validaCnpj == "55555555555555" || 
        validaCnpj == "66666666666666" || 
        validaCnpj == "77777777777777" || 
        validaCnpj == "88888888888888" || 
        validaCnpj == "99999999999999")
        alert('CNPJ inválido!');
         
    // Valida DVs
    tamanho = validaCnpj.length - 2
    numeros = validaCnpj.substring(0,tamanho);
    digitos = validaCnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
    alert('CNPJ Inexistente!');
         
    tamanho = tamanho + 1;
    numeros = validaCnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
    alert('CNPJ Inexistente!');
}







