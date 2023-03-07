//alert("OI")
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO]Verifique os dados digitados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/babyBoy.png')
            }else if(idade > 10 && idade < 50){
                //jovem e adulto
                img.setAttribute('src','imagens/youngBoy.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/oldMan.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src' , 'imagens/babyGirl.png')
            }else if(idade< 50){
                //jovem e adulto
                img.setAttribute('src' , "imagens/youngGirl.png")
            }else{
                //idoso
                img.setAttribute('src' , 'imagens/oldWoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}