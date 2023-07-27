const h1 = document.querySelector('#title')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const spanSuma = document.querySelector('#span-suma')

console.log(input1.value)
function buttonOnClick(){
    
if (input1.value == '0') {
    console.log(input1.value);
    input1.setAttribute('value','0')
}else if(input2.value == '0')
    input2.setAttribute('value','0')
        
    console.log(input1.value);  
    let suma = parseInt(input1.value) + parseInt(input2.value)
    let resultado = `La suma es ${suma}`
    spanSuma.innerHTML = resultado
}

// boton.addEventListener('click',calculo(input1,input2))