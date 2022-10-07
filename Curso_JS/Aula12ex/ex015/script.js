function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO!] Verifique os  dados e tente novamente')
    }else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 2){
                //Bebe
                img.src = './imagens/BebeMenino.jpg'
            }else if (idade > 2 && idade < 15){
                //criança
                img.src = './imagens/CriançaMenino.jpg'
            }else if(idade >= 15 && idade < 25){
                //jovem
                img.src = './imagens/AdultoMenino.jpg'
            }else if( idade >=25 && idade <= 40){
                //adulto
                img.src = './imagens/HomemAdulto.jpg'
            }else {
                //idoso
                img.src = './imagens/Senhor.jpg'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 2){
                //Bebe
                img.src = './imagens/BebeMenina.jpg'
            }else if (idade > 2 && idade < 15){
                //criança
                img.src = './imagens/CriançaMenina.jpg'
            }else if(idade >= 15 && idade < 25){
                //jovem
                img.src = './imagens/AdultoMenina.jpg'
            }else if( idade >=25 && idade <= 40){
                //adulto
                img.src = './imagens/MulherAdulta.jpg'
            }else{
                //idoso
                img.src = './imagens/Senhora.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}