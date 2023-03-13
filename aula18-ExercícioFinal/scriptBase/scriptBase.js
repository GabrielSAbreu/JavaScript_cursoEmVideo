let numeros = []
function adicionar(){
 /*1ªAdicionar elementos em um array [ok]
 2ª verificar se o campo está em branco [ok]
 3ª verificar se o elemento ja existe
 */  
    let txtnum = document.querySelector('input#txtNum')
    let num = Number(txtnum.value)
    let display = document.getElementById('seltab')
    
    if(num < 1 || num > 100){
        alert('[ERRO]Dados inválidos! Dado fora do intervalo!')
        
        
    }else if(numeros.indexOf(num)){
        alert('Número já existente!')
              
    }else{
        numeros.push(num)
        alert(numeros) // ta certo
    }
 
}


function finalizar(){
    /*1 verificar quantos itens tem no array
    2ª informar maior valor
    3ªinformar menor valor
    4º soma dos valores
    5º A média */
    numeros = [] // limpa array
    alert('Array vazio')
    alert(numeros)
}