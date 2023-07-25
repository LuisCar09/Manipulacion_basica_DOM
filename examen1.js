/* */
let nombre = 'Luis Carlos'
let apellido = 'Bravo Aguilera'
console.log(nombre + ' ' + apellido);
dineroAhorrado = 1000
deudas = 300
dineroTotal = dineroAhorrado - deudas

console.log((dineroTotal));

/* 
Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function nombreCompleto(name,lastname,nickname) {
    const completeName = name + lastname
    return console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname} `);
}

nombreCompleto('Luis Carlos','Bravo Aguilera','LuisCar')

console.log('------------------------------------------------');

nombreCompleto('Sarah Antonietta',' Di Massimo Lima','Mochi')

/*
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} 
*/

function tipoDeSuscripcion(suscipcion) {
    if (suscipcion == 'Free')
        console.log('Solo puedes tomas los cursos gratis');
    else if (suscipcion == 'Basic')
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
    else if (suscipcion == 'Expert')
        console.log('Puedes tomar todos los curso de Platzi durante un año');
    else if(suscipcion == 'Expert Plus')
        console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
    else
        console.log('Error suscripción no válida');
}

tipoDeSuscripcion('Free')
tipoDeSuscripcion('Basic')
tipoDeSuscripcion('Expert')
tipoDeSuscripcion('Expert Plus')
tipoDeSuscripcion('Otro tipo')
console.log('--------------------------------------');


function tipoDeSuscripcion(suscipcion) {
    if (suscipcion == 'Free')
        console.log('Solo puedes tomas los cursos gratis');
    if (suscipcion == 'Basic')
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
    if (suscipcion == 'Expert')
        console.log('Puedes tomar todos los curso de Platzi durante un año');
    if(suscipcion == 'Expert Plus')
        console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
    
}
tipoDeSuscripcion('Free')
tipoDeSuscripcion('Basic')
tipoDeSuscripcion('Expert')
tipoDeSuscripcion('Expert Plus')
tipoDeSuscripcion('Otro tipo')
console.log('--------------------------------------')




function Suscripcion(nombre,apellido,suscipcion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.suscipcion = suscipcion;

    this.subscriptionType = function(){
        if (this.suscipcion == 'Basic')
            console.log(`${this.nombre} ${this.apellido} solo puedes tomas los cursos gratis `)
        else if (this.suscipcion == 'Basic')
            console.log(`${this.nombre} ${this.apellido} Puedes tomar casi todos los cursos de Platzi durante un mes`);
        else if (this.suscipcion == 'Expert')
            console.log(`${this.nombre} ${this.apellido} Puedes tomar todos los curso de Platzi durante un año`);
        else if(this.suscipcion == 'Expert Plus')
            console.log(`${this.nombre} ${this.apellido} Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año`);
        else
            console.log('Error suscripción no válida');
    }
    
}

const nombre1 = new Suscripcion('Luis','Bravo','Expert Plus')
const nombre2 = new Suscripcion('Sarah','Di Massimo','Expert')
const nombre3 = new Suscripcion('Pepe','El perro','Basic')
const nombre4 = new Suscripcion('Olga','Aguilera','Free')

clientes = []
clientes.push(nombre1,nombre2,nombre3,nombre4)
console.log(clientes);
console.log('--------------------------------------')


function verificar(cliente) {
    if (cliente){
        return cliente.subscriptionType();
    }
    // return ('Cliente invalido')
}

verificar(nombre2)