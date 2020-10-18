import {obtenerChiste} from './http-provider.js';

const body = document.body;
let btnOtro, olList;
let contador=0;

const crearChisteHtml = () =>
{
    const html = `<h1 class="mt-5">Los chistes de chuckNorris</h1>
    <hr>
    <button class="btn btn-primary">nuevo chiste</button>
    <ol class="mt-2 list-group">
      
    </ol>`;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () =>
{
    olList = document.querySelector('ol'); //por etiqueta y solo tiene una ol
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async ()=>{
        //obtenerChiste().then(dibujarChiste); //Es mejor async? averiguar deferencia
        btnOtro.disabled = true;
        try{ 
            const chiste = await obtenerChiste();
            dibujarChiste(chiste);
        }catch (err){
            const chisteDefault = {id:'0',
            value: 'Hubo un problema, intente de nuevo',}
            dibujarChiste(chisteDefault);
        }

        btnOtro.disabled = false;
    })
}

const dibujarChiste = (chiste) =>
{
    
    const olItem = document.createElement('li');
    let icono;
    contador++;
    icono=chiste.icon_url.split('/'); //divide la cadena y devuelve un array
    icono= icono[icono.length-1];     //regreso el ulimo elemento

    olItem.innerHTML=`${contador}.-<b> ${chiste.id} </b> : ${chiste.value} --->${icono} `;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}

export const init = () =>
{
    crearChisteHtml();
    eventos();
}