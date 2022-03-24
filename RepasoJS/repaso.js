
//var y let 

var edad = 10
var edad = 20
console.log(edad) // 20, con var se cambia el valor de la variable facilmente

let edad = 10
let edad = 20
console.log(edad) // error, let no permite declarar la variable dos veces 

// solución
let edad = 10
edad = 20
console.log(edad) // 20

//ejemplos 

var edad = 10 //con var estamos declarando nuevamente las variables 
if(true){
    var edad = 20
    console.log(edad) // 20
}
console.log(edad) // 20

let edad = 10
    if(true){
        let edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10

//por eso lo mejor es usar const, const no se cambia el valor 
const edad = 10
const edad = 20 // el output da SyntaxError

const edad = 10
edad = 20 // Error: "edad" is read-only

const edad = 10
    if(true){
        const edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10


//FUNCIONES 
function sumar (num){ //declaración que recibe algo
    console.log(num) //recibimos por consola ese num
}
sumar(10) //llamado

const sumarDos = (num1, num2) => { //funcion flecha o arrow function
    console.log(num1+num2)
}
sumarDos()

//reducción de código
const resultado = sumarDos(20,30)
console.log(resultado) 

const sumaTres = (num) =>{
    console.log(num+3)
}
sumaTres(9) 

//template string
const numero = () => {
    console.log(10)
}
numero() //10 

const numero2 = (num) => {
    return `el numero es: ${num}` 
    
}
const resultado2 = numero2(10)
console.log(resultado2)

//objetos 
const mascota = {
    nombre: "tom", //asignar valor a la propiedad usamos : (se usa , para agregar mas propiedades) 
    edad: 10, 
    vivo: true 
}
console.log(mascota) //visualizar los datos 
console.log(mascota.nombre) //ingresar a un tipo de propiedad del objeto

const nombreMascota = mascota.nombre  //guardar la ubicación en un const
console.log(nombreMascota)

//const {edad, nombre} = mascota 
console.log(edad) //otra forma de acceder  

const web = {
    nombre: 'blue',
    links: {
        enlace: "www.com"
    },
    redesSociales: {
        youtube: {
            enlace: "youtube.com",
            nombre: "blue yt" 

        },
        
    }
}
 
console.log(web.redesSociales.youtube.nombre)  //acceder a una propiedad especifica, primero el objeto padre 

