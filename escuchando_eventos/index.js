const h1 = document.querySelector('#title')
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const spanSuma = document.querySelector('#span-suma')
const demo = document.querySelector('#demo')
const random = document.querySelector('#random')
const handler = document.getElementById('remove-handler')
form.addEventListener('submit',sumarInputs)
handler.addEventListener('click',myFuntion)

function sumarInputs(event){
    // console.log({event});
    event.preventDefault()// para enviar que el formulario haga el efecto enviado-reiniciado
    
    let suma = parseInt(input1.value) + parseInt(input2.value)
    let resultado = `La suma es ${suma}`
    spanSuma.innerHTML = resultado
}

document.addEventListener('mouseover',mousedOver)
document.addEventListener('mouseout',mousedOut)
document.addEventListener('click',click)
document.addEventListener('mouseover',random_fuction)

function mousedOver() {
    demo.innerHTML= 'Moused over!'
}
//para que cuando salga el mouse cambie el valor de demo
function mousedOut() {
    demo.innerHTML = 'Moused out!'
    document.body.style.backgroundColor = 'white'
}
//cuando se genere un click haga se relice el evento
function click() {
    demo.innerHTML = 'Clicked!'
    document.body.style.backgroundColor = 'blue'
}

function random_fuction() {
    random.innerHTML = Math.random()
}


function myFuntion() {
    document.removeEventListener('mouseover',random_fuction)
}