//metodo que crea un nuevo array 

fetch ('https://pokeapi.co/api/v2/pokemon/') //llamado a la api
.then((res)=>{
    return res.json()
}) //va a esperar una promesa, esperando que la url nos de los datos 
.then(data => {
    //console.log(data.results) 
    let arrayNombres = []
    data.results.forEach(element => {
        //console.log(element.name) 
        arrayNombres.push(element.name) //llenando el array vácio declarado anteriormente 
    }); 
    console.log(arrayNombres)
})
.catch(error => console.log(error)) //capture el error 


//map con async y await 
const obtenerPokemones = async() => { //se crea una función 
    //await adentro de una función async
    try{ //intenta hacerlo 
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/') //esperemos la respuesta 
        const data = await res.json //await siempre funciona dentro de una función async
        console.log(data.results) //data va a esperar a res.json 
        const arrayNombres = data.results.map(poke => console.log(poke.name)) //recorriendo y podemos mostrar todo o un dato
        console.log(arrayNombres) 
    }catch(error){ //en caso que no dame el error 
        console.log(error) 
    }
}
obtenerPokemones() 