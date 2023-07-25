const objeto ={
    'Free':"Solo puedes tomar los cursos gratis",
    'Basic':'Puedes tomar casi todos los cursos de Platzi durante un mes',
    'Expert':'Puedes tomar casi todos los cursos de Platzi durante un año',
    'Expert Duo':'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

function tipoDeSuscripcion(subs,objetos) {
    let sub = ''
    for (sub in objetos){
       if (sub == subs){
        console.log(`Con la suscripción ${subs} ${objetos[sub]}`);
        return;
    }
    
}
}
let resultado = tipoDeSuscripcion('Free',objeto)
let resultado2 = tipoDeSuscripcion('Basic',objeto)
let resultado3 = tipoDeSuscripcion('Expert',objeto)
let resultado4 = tipoDeSuscripcion('Expert Duo',objeto)

/*Esta es la mejor opcion*/
function subscriptionType(subs) {
    if (objeto[subs]){
        console.log(objeto[subs]);
        return;
    }

    console.warn('Suscripción no existe');
}

let resultado5 = subscriptionType('Free')
let resultado6 = subscriptionType('Basic')
let resultado7 = subscriptionType('Expert')
let resultado8 = subscriptionType('Expert Duo')