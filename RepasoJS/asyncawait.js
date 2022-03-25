//la función se comporta de función asincronica 

fetch ('https://pokeapi.co/api/v2/pokemon/') //llamado a la api
.then((res)=>{
    return res.json()
}) //va a esperar una promesa, esperando que la url nos de los datos 
.then(data => {
    //console.log(data.results) 
    data.results.forEach(element => {
        //console.log(element.name) 
    }); 
})
.catch(error => console.log(error)) //capture el error 

//async await
const obtenerPokemones = async() => { //se crea una función 
    //await adentro de una función async
    try{ //intenta hacerlo 
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/') //esperemos la respuesta 
        const data = await res.json //await siempre funciona dentro de una función async
        console.log(data.results) //data va a esperar a res.json 
    }catch(error){ //en caso que no dame el error 
        console.log(error) 
    }
}
obtenerPokemones() 