function CalculoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

let imc = peso / (altura*altura);
console.log(imc);

if(imc<20)
{
document.getElementById("mensagem").innerText = "Magro";
document.getElementById("imagem").src="images/magro_mais.gif";
}
else if(imc >=25)
{
document.getElementById("mensagem").innerText = "Sobrepeso";
document.getElementById("imagem").src="images/seu_barriga.gif";
}
else
{
document.getElementById("mensagem").innerText = "OK";
document.getElementById("imagem").src="images/normal.gif";
}
}