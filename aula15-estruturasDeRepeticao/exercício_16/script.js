function contar(){
    let txtinicio = document.getElementById('inicio')
    let txtfim = document.querySelector('input#fim')
    let txtpasso = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
       
   }else{
        res.innerHTML = 'Contando: <br>'
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        if(passo <=0){
            alert('Passo inválido!!Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim){
            for(let cont = inicio; cont <= fim; cont+=passo){
                res.innerHTML += ` ${cont} \u{1F449}`
            }
              
        }else{
            for(let cont = inicio; cont >= fim; cont-=passo){
                res.innerHTML +=` ${cont} \u{1F449} `
            }
           
        }
        res.innerHTML += '\u{1F3c1}'
        
   }
   
}