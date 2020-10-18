//Creación de función para consultas http
const jokeurl ='https://api.chucknorris.io/jokes/random/';

export const obtenerChiste =  async () =>
{
    try{

        const resp = await fetch(jokeurl);
        
        if(!resp.ok) //devuelve true si la respuesta fue correcta o false
        {
            console.log('Sin respuesta del servidor'); 
            return {icon_url:'sin enlace', id:'0', value: 'Hubo un problema, intente de nuevo'};
        }
        
        const {icon_url, id, value} = await resp.json(); 
        // tomo solo los valores que me interesen, se llaman igual que los que devuelve el la función
        return  {icon_url, id, value}; //retorno los valores.         
    }catch (err){
        console.log("No se pudo procesar la petición");
       
        return {icon_url:'sin enlace', id:'0', value: 'Hubo un problema, intente de nuevo'};
        //throw err;  //aquí podemos decidir si regresar valores vacion, mandar el erro, etc.

    }
}
