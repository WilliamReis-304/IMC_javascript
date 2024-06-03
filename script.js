let nome = prompt("Insira o seu nome:")
let altura = Number(prompt("Insira a sua altura em centímetros:"))
let peso = Number(prompt("Insira seu peso:"))

const imc = peso/(altura**2)
console.log(imc)

if(imc>16){
    console.log("Baixo peso muito grave")
}else if(imc<=16 & imc>17){
    console.log("Baixo peso grave")
}else if(imc<=17 & imc>18.5){
    console.log("Baixo peso")
}else if(imc<=18.5 & imc>25){
    console.log("Peso normal")
}else if(imc<=25 & imc>30){
    console.log("Sobrepeso")
}else if(imc<=30 & imc>35){
    console.log("Obesidade grau I")
}else if(imc<=35 & imc>40){
    console.log("Obesidade grau II")
}else{
    console.log("Obesidade grau III")
}