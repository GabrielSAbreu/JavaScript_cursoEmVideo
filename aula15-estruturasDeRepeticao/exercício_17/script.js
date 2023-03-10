function gerar(){
    let txtnum = document.querySelector('input#txtnum')
    let num = Number(txtnum.value)

    let display = document.getElementById('seltab')

    if(txtnum.value.length == 0){
        alert('[ERRO] Insira um valor!')
    }else{
        /*let c = 0
        do{
            let res = num * c
            display.innerHTML += `${num} x ${c} = ${res}`
            c++
        }while(c <=10)*/
        display.innerHTML = '' 
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text =  `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            display.appendChild(item)  
        }
       
    }
    //display.innerHTML = `${num} x 0 =`

}