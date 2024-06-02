const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length>=2;
}
form.addEventListener('submit', function(e){
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `O montante de <b>${valorDeposito.value}</b> foi depositado para o <b>${nomeBeneficiario.value}</b>-conta<b>${numeroContaBeneficiario.value}</b>`
    let formEValido = false;
    e.preventDefault();

    formEValido = validaNome(nomeBeneficiario.value)
    if(formEValido){
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    nomeBeneficiario.value = '';
    numeroContaBeneficiario.value = '';
    valorDeposito.value = '' ;
    }
    else{document.querySelector('.error-mensage').style.display = 'block';
        nomeBeneficiario.style.border = '1px solid red';
    }
    
})
nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);
if(!formEValido){
    nomeBeneficiario.classList.add('error');
    document.querySelector('.error-mensage').style.display = 'block'
}
else{
    document.querySelector('.error-mensage').style.display = 'none';
    nomeBeneficiario.classList.remove('error');

}}
)
