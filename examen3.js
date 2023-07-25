/* 

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/


function imprimir_array(valor) {
    
    for (let i = 0; i < valor.length ; i++) {
        console.log(valor[i],);
        
    }
}

let lista = [1,2,3,4,5,6,7,8,9]
imprimir_array(lista)

function Objeto(nombre,edad,pais){
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
}

let objeto1 = new Objeto('Luis',29,'Venezuela')
let objeto2 = new Objeto('Sarah',34,'Venezuela')
let objeto3 = new Objeto('Elizabe',11,'Venezuela')

variable = Object.keys(objeto1)
console.log(variable);

function recorrerObjeto(objeto) {
    
    for (let valores in objeto){
        console.log('Los valores' ,valores);
        console.log(objeto[valores]);
    }

console.log('--------------------------------------------------');
}
function recorrerObjeto2(objetos) {
    let objeto = ''
    for(objeto in objetos){
        console.log(`Los valor de ${objeto} es ${objetos[objeto]}`)
    }
}

let resultado = recorrerObjeto(objeto1)
let resultado2 = recorrerObjeto2(objeto2)