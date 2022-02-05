let nome = []
let nascimento = []
let telefone = []
let cadastrados = document.getElementById(lista)

function cadastrar(){

nome.push(document.querySelector('input#nome'))
nascimento.push(document.querySelector('input#nascimento'))
telefone..push(document.querySelector('input#telefone'))

let item = document.createElement("option")
item.text =`${nome} nascido em ${data} com telefone ${telefone} foi adicionado!`
cadastrados.appendChild(item)
}
console.log(telefone);