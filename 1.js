document.addEventListener("DOMContentLoaded" , () =>{
    const texto= document.getElementById("texto");
    const boton= document.getElementById("boton");
    boton.addEventListener("click", ()=>{
        
            texto.textContent= "El texto ahora se modificó";
            texto.classList.add("nuevoEstilo")
        
    });
    })