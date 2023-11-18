function entrar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == "fornecedor@fortes.com.br" && senha =="123"){
        location.href = "telaobra.html"
    }
    else if(login == "cliente@fortes.com.br" && senha =="123"){
        location.href = "perfil.html"
    }

    else{
        alert('Usuario ou senha incorretos');
    }
    
};
    document.addEventListener("DOMContentLoaded", function() {
    var dataAtualElement = document.getElementById("data-janela");
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1; 
    var ano = data.getFullYear();
    var dataFormatada = dia + "/" + mes + "/" + ano;
    dataAtualElement.textContent =  dataFormatada;
  });
  
 
const quantidade = 240;
const unitario =  15;
var total = unitario * quantidade;
document.addEventListener("DOMContentLoaded", function() {
document.getElementById('valortotal').textContent = 'R$'+ total;
document.getElementById('valortotal2').textContent = 'R$' +  total;
document.getElementById('valortotal3').textContent = 'R$' + total;
});  

function salvar(){
window.alert("Suas opções de alimentação foram salvas!");
}

 