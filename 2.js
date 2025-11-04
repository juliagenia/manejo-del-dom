const contadorElement= document.getElementById("contador")
const menosButton= document.getElementById("menos")
const masButton= document.getElementById("mas")
const resetButton= document.getElementById("reset")
let contador= 0
function actualizarContador(){
    contadorElement.textContent= contador
    if (contador<=0){
        menosButton.disabled=true
    }else{
        menosButton.disabled= false
    }
}
menosButton.addEventListener("click", ()=>{
    contador--
    actualizarContador()
})
masButton.addEventListener("click", ()=>{
    contador++
    actualizarContador()
})
resetButton.addEventListener("click", ()=>{
    contador=0
    actualizarContador()
})
actualizarContador()