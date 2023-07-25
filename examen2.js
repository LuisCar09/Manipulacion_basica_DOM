/* 
 Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

*/
i = 0
while (i < 5) {
    console.log(`El valor de i es: ${i} `);
    i++
}
j = 10
while (j >= 2) {
    console.log(`El valor de i es: ${j}`);
    j--
}

function preguntaUsuario(valor) {
    respuesta = false
    comparacion = 4
    while (respuesta == false){
        if (parseInt(valor) == comparacion) {
            alert('Respuesta correcta');
            respuesta = true
        }else{
            alert('Respuesta Incorrecta');
            valor = parseInt(prompt('Ingresa nuevamente el numero: '))
        }
        
    }
}

let valor = prompt('¿Cuanto es la suma de 2 + 2? ')
preguntaUsuario(valor)