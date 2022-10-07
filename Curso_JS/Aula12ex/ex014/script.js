function carregar() {
var msg = window.document.getElementById('msg')
var img =  window.document.getElementById('imagem')
var msg2 = window.document.getElementById('mensagemtela')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src = './Imagens/Manhã.jpg'
    document.body.style.background = "linear-gradient(#EBC572,#B48747)"
    msg2.innerHTML = '<h2>Bom Dia!</h2>'
}else if (hora >= 12 && hora <= 18) {
    img.src = './Imagens/Tarde.jpg'
    document.body.style.background = 'linear-gradient(#FCB462,#FEB83F)'
    msg2.innerHTML = '<h2>Boa Tarde!</h2>'
}else {
    img.src = './Imagens/Noite.jpg'
    document.body.style.background = 'linear-gradient(#9577AE,#1D1827)'
    msg2.innerHTML = '<h2>Boa Noite!</h2>'
}
}