function contar(){
    var inicio = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpas')
    var res = window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
        
    }else{
        res.innerHTML = 'Contando: <br> '
        let i  =  Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i <f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `\u{27A1} ${c} `
            }
        }else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `\u{27A1} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}