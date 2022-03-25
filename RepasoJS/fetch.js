//podemos consumir api
//api es una rta del servidor que nos va a entregar datos en algunos casos será necesario manipular esos datos 
//fetch lee imagenes y archivos en el sistema pero por lo general se usa para apis

fetch ('https://pokeapi.co/api/v2/pokemon/') //llamado a la api
    .then((res)=>{
        return res.json()
    }) //va a esperar una promesa, esperando que la url nos de los datos 
    .then(data => {
        //console.log(data.results) 
        data.results.forEach(element => {
            console.log(element.name) 
        }); 
    })
    .catch(error => console.log(error)) //capture el error 



 