var btn = document.querySelector('#enviar')
var btn2 = document.querySelector('#nome')
var btn3 = document.querySelector('#email')
var btn4 = document.querySelector('#assunto')
var btn5 = document.querySelector('#mensagem')
var mensagem = document.querySelector('#enviado')
lista = [btn2, btn3, btn4, btn5]


btn.addEventListener('click', function(){
    btn2.value = ''
    btn3.value = ''
    btn4.value = ''
    btn5.value = ''
    mensagem.classList.add('aparecer')
})