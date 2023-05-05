MostrarCajitas();
boton=document.getElementById("boton");
boton.addEventListener("click",function(){
    textoNuevo=document.getElementById("texto");
    notas=localStorage.getItem("notas");
    if(notas==null)
    {
        //No se ha agregado ninguna nota
        arreglo=[];
    }
    else
    {
        arreglo=JSON.parse(notas);
    }

    arreglo.push(textoNuevo.value);
    console.log(arreglo);
    localStorage.setItem("notas",JSON.stringify(arreglo));
   
    textoNuevo.value="";
    MostrarCajitas();
});

function MostrarCajitas()
{
    notas=localStorage.getItem("notas");
    if(notas==null)
    {
        //No se ha agregado ninguna nota
        arreglo=[];
    }
    else
    {
        arreglo=JSON.parse(notas);
    }
    html="";
    arreglo.forEach((element,i) =>{
        html=html+
        `
        <div>
        <h3>Nota ${i}</h3>
        <p>${element}</p>
        <button id=${i} onclick="eliminar(this.id)">Eliminar</button>
        </div>
        `; 
    });

    contenedor=document.getElementById("misnotas");
    contenedor.innerHTML=html;
}
function eliminar(index)
{
    notas=localStorage.getItem("notas");
    if(notas==null)
    {
        //No se ha agregado ninguna nota
        arreglo=[];
    }
    else
    {
        arreglo=JSON.parse(notas);
    }
    arreglo.splice(index,1);
    localStorage.setItem("notas",JSON.stringify(arreglo));
    MostrarCajitas();
}

function eliminarTodas()
{
    arreglo=[];
    localStorage.setItem("notas",JSON.stringify(arreglo));
    MostrarCajitas();
}

//Este es un comentario de prueba