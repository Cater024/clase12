// alert(): sale una alerta en pantalla
//document referencia toda la pagina, todo nuestro documento
//addEventListener escucha el evento que queremos que se haga
//DOMContentLoaded asegura que haya cargado la pagina antes de ejecutar el script

/*document.addEventListener("DOMContentLoaded", function(){   
    alert()
})*/

//normalmente seleccionamos los elementos por id, casi no se usan las clases
document.addEventListener("DOMContentLoaded", function(){ 
    let nav = document.querySelector("#navegacion")//seleccionar elemento del id dado(#)
     let link=document.createElement("a")//creamos el elemento link
     link.href="http://www.google.com"
     link.innerText="google"
    nav.appendChild(link)
}) //forma 1 añadir un elemente (este caso link)

document.addEventListener("DOMContentLoaded", function(){ 
    let nav = document.querySelector("#navegacion")
    
    nav.innerHTML += '<a href="https://www.google.com" target="_blank">google2</a>'//inserta o añade en el html el elemento

}) //forma 2 añadir elemento

//el contenido dinamico (que cambia, no es constante) no se crea o deja en el html, se inserta desde el javascript

document.addEventListener("DOMContentLoaded", function(){ 
    let aside = document.querySelector("aside")

    let button = document.querySelector("button")
    button.innerText = "saludar" 

    //button.addEventListener("click", saludar)
    button.onclick = saludar

    aside.innerHTML += "<button onclick='alert(\"hola mundo\")'>Saludar</button>"//esta se usa mas


})//varias formas contenido dinamico evento boton

document.addEventListener("DOMContentLoaded", function(){
let segundos = document.querySelector("#segundos")
    let contador = 0
    setInterval(function() {
        contador ++
        segundos.innerText = contador
    },1000)
})//evento de tipo intervalo

function saludar(){
    alert("hola mundo")
}//creando el botton directamente en el html

function sumar(a, b){
    return a + b
}

