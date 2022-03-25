//filter, para ver un dato especifico de un array o descartar un dato

const obtenerPokemones = async() => { //se crea una función 
    //await adentro de una función async
    try{ //intenta hacerlo 
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/') //esperemos la respuesta 
        const data = await res.json //await siempre funciona dentro de una función async
        console.log(data.results) //data va a esperar a res.json 
        //const arrayNombres = data.results.filter(poke => console.log(poke.name === 'bulbasaur')) //recorriendo y podemos mostrar todo o un dato
        const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur') //nos devuelva los distinto de !== 
        console.log(arrayNombres) 
    }catch(error){ //en caso que no dame el error 
        console.log(error) 
    }
}
obtenerPokemones() 