const form = document.getElementById('form-deposito');
console.log(form);

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return(nomeComoArray.length>=2)
}
let formEValido = false

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContatoBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o ${nomeBeneficiario.value}- conta ${numeroContatoBeneficiario.value}`
    formEValido = validaNome(nomeBeneficiario.value)
    if(formEValido ){
        alert(mensagemSucesso)
        nomeBeneficiario.value = ' ';
        numeroContatoBeneficiario.value = ' ';
        valorDeposito,value = ' ';
        
    }
    else{alert("o nome está incompleto")}
})
