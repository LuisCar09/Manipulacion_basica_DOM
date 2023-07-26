const h1 = document.querySelector('h1')//para seleccionar el nombre de la etiqueta utilizamos el querySelector
const p = document.querySelector('p')
const parrafo1 = document.getElementsByClassName('parrafito')[0]//selecciona las etiquetas con las clases 
const parrafo2 = document.getElementById('parrafito')//selecciona la etiqueta con por el ID
const input = document.querySelector('input')

console.log(h1);
console.log({h1,p,parrafo1,parrafo2,input});//cuando lo colocamos entre llaves lo convertimos a objeto y nos permite ver las propiedades que tiene esa variable en el dom

console.log(input.value);
//Para cambiar el valor de un elemento del dom con js
h1.innerHTML = 'Aprendiendo home'
p.innerHTML = 'El escudo del club mas glorioso del futbol'
parrafo1.innerHTML = 'El parrafo 2 tiene sueño, pero no va a dormir'
parrafo2.innerHTML = 'Simplemente cambie el parrafo'

//Para agregar una clase a un atributo
const h2 = document.querySelector('h2')
console.log(h2.getAttribute('class'));//para acceder a el atributo de una etiqueta

//para modificar esa clase

h2.setAttribute('class','rojo') //a la clase de la etiqueta h2 


//Cambiar las clases directamente

h1.classList.add('titulo') // con esto le agregamos otra clase a la clase que ya tiene la etiqueta
h1.classList.remove('titulo') //aqui eliminamos la clase que deseemos en la etiqueta

const boton = document.getElementById('boton-eliminador')
const parrafoManipulado = document.querySelector('.parrafo-manipular')//No olvidar el punto cuando utilizamos query selector

//Aqui ocultamos y mostramos la etiqueta que querramos en el dom util para el carrito de compra
boton.addEventListener('click',ocultar)
function ocultar() {
    parrafoManipulado.classList.toggle('clase')
}


//cambiar el valor de un input

input.value='456'

//crear un elemento desde 0
const img = document.createElement('img')
img.setAttribute('src','https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/static/twitter-image.png')
//el setAtribute nos ayuda a crearle el atributo para poder ingregarlo al dom

p.append(img)

const img2 = document.createElement('img')
img2.setAttribute('src','https://4.bp.blogspot.com/-UPcbU65tdsI/XBhbYCJmiWI/AAAAAAABTlo/2c8JJ3Gm_UQV4v58pqF8-sX9ehhlkk1WgCLcBGAs/s1600/Zamora%2BFC.png')

parrafo2.innerHTML = ''
parrafo2.append(img2)


let img3 = document.createElement('p')
img3.setAttribute('class','parrafo-glorioso')
parrafoManipulado.appendChild(img3)



let newDiv = document.createElement('div')
newDiv.setAttribute('id','div_new')
let body = document.querySelector('body')
body.appendChild(newDiv)

const escudoLakers = document.createElement('img')
escudoLakers.setAttribute('src','https://logodownload.org/wp-content/uploads/2019/06/los-angeles-lakers-logo.png')
escudoLakers.setAttribute('id','logo-lakers')

newDiv.appendChild(escudoLakers)