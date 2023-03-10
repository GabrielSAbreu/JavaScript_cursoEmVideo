let num = [01,09,03,10,12,13]
num[3] = 05
num.push(08) // Acrescenta elemento no final do array
/*console.log(num)
console.log(num.length)
console.log(num.sort())

for(let i=0; i <= num.length; i++){
    console.log(`Na posição ${i} temos o valor: ${num[i]}`)
}*/

for (const i in num) {
    console.log(num[i])
    num.sort()
}

console.log(`O numero 9 está na posição: ${num.indexOf(9)}`)