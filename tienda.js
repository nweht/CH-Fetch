let stockProductos = [
    {id: 1, nombre: "Remera Big Lion Negra", tipo: "remera", desc: "Remera Lions Gym Negra", precio: 1200, talle: "S", img: 'Images/Productos/1.png'},
    {id: 2, nombre: "Remera Big Lion Negra", tipo: "remera", desc: "Remera Lions Gym Negra", precio: 1200, talle: "M", img: 'Images/Productos/1.png'},
    {id: 3, nombre: "Remera Big Lion Negra", tipo: "remera", desc: "Remera Lions Gym Negra", precio: 1200, talle: "L", img: 'Images/Productos/1.png'},
    {id: 4, nombre: "Remera Big Lion Blanca", tipo: "remera", desc: "Remera Lions Gym Blanca", precio: 1200, talle: "S", img: 'Images/Productos/5.png'},
    {id: 5, nombre: "Remera Big Lion Blanca", tipo: "remera", desc: "Remera Lions Gym Blanca", precio: 1200, talle: "M", img: 'Images/Productos/5.png'},
    {id: 6, nombre: "Remera Big Lion Blanca", tipo: "remera", desc: "Remera Lions Gym Blanca", precio: 1200, talle: "L", img: 'Images/Productos/5.png'},
    {id: 7, nombre: "Remera Small Lion Negra", tipo: "remera", desc: "Remera Lions Gym Negra", precio: 1200, talle: "S", img: 'Images/Productos/2.png'},
    {id: 8, nombre: "Remera Small Lion Negra", tipo: "remera", desc: "Remera Lions Gym Negra", precio: 1200, talle: "M", img: 'Images/Productos/2.png'},
    {id: 9, nombre: "Remera Small Lion Negra", tipo: "remera", desc: "Remera Lions Gym Negra", precio: 1200, talle: "L", img: 'Images/Productos/2.png'},
    {id: 10, nombre: "Remera Small Lion Blanca", tipo: "remera", desc: "Remera Lions Gym Blanca", precio: 1200, talle: "S", img: 'Images/Productos/6.png'},
    {id: 11, nombre: "Remera Small Lion Blanca", tipo: "remera", desc: "Remera Lions Gym Blanca", precio: 1200, talle: "M", img: 'Images/Productos/6.png'},
    {id: 12, nombre: "Remera Small Lion Blanca", tipo: "remera", desc: "Remera Lions Gym Blanca", precio: 1200, talle: "L", img: 'Images/Productos/6.png'},
    {id: 13, nombre: "Buzo Big Lion Gris", tipo: "buzo", desc: "Buzo Lions Gym Gris", precio: 2500, talle: "S", img: 'Images/Productos/3.png'},
    {id: 14, nombre: "Buzo Big Lion Gris", tipo: "buzo", desc: "Buzo Lions Gym Gris", precio: 2500, talle: "M", img: 'Images/Productos/3.png'},
    {id: 15, nombre: "Buzo Big Lion Gris", tipo: "buzo", desc: "Buzo Lions Gym Gris", precio: 2500, talle: "L", img: 'Images/Productos/3.png'},
    {id: 16, nombre: "Buzo Small Lion Gris", tipo: "buzo", desc: "Buzo Lions Gym Gris", precio: 2500, talle: "S", img: 'Images/Productos/4.png'},
    {id: 17, nombre: "Buzo Small Lion Gris", tipo: "buzo", desc: "Buzo Lions Gym Gris", precio: 2500, talle: "M", img: 'Images/Productos/4.png'},
    {id: 18, nombre: "Buzo Small Lion Gris", tipo: "buzo", desc: "Buzo Lions Gym Gris", precio: 2500, talle: "L", img: '/Images/Productos/4.png'},
    {id: 19, nombre: "Shaker Rojo y Negro", tipo: "shaker", desc: "Shaker Lions Gym Rojo y Negro", precio: 500, talle: "700ml", img: 'Images/Productos/7.png'},
    {id: 20, nombre: "Shaker Gris y Negro", tipo: "shaker", desc: "Shaker Lions Gym Gris y Negro", precio: 500, talle: "700ml", img: 'Images/Productos/8.png'},
]

let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selCategorias = document.getElementById('selCategorias')
const buscador = document.getElementById('search')



selCategorias.addEventListener('change',()=>{
    if(selCategorias.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        mostrarProductos(stockProductos.filter(elemento => elemento.tipo == selCategorias.value))
    }
})

//Buscador


mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){
    contenedorProductos.innerHTML= ""
    
   array.forEach(item => {

       let div = document.createElement('div')
       div.classList.add('producto')
    div.innerHTML += `
                    <div id='fondo' class="card">
                        <div class="card-image">
                            <img id='image-modal' src=${item.img} ${console.log(item.img)}>
                            <span class="card-title">${item.nombre}</span>
                            
                        </div>
                        <div class="card-content">
                            <p>${item.desc}</p>
                            <p>Talle: ${item.talle}</p>
                            <p> $${item.precio}</p>
                        </div>
                        <div class=botonAAC><a  id="agregar${item.id}" class="agregarTxt"><i id="agregarTxt">Agregar al Carrito</i></a></div>
                    </div>
    `
    contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`agregar${item.id}`)

        btnAgregar.addEventListener('click',()=>{
           agregarAlCarrito(item.id)
        })

   })
}


function agregarAlCarrito(id) {
    let enCarrito = carritoDeCompras.find(item=> item.id == id)
    if(enCarrito){
        enCarrito.cantidad ++
        document.getElementById(`und${enCarrito.id}`).innerHTML =` <p id=und${enCarrito.id}>Und:${enCarrito.cantidad}</p>`
        actualizarCarrito()
    }else{
       let productoAgregar = stockProductos.find(elemento => elemento.id == id)
    
        productoAgregar.cantidad = 1
        
        carritoDeCompras.push(productoAgregar)
        
        actualizarCarrito()

        mostrarCarrito(productoAgregar) 
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    
}





function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML=`
                    <p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id="und${productoAgregar.id}">Und:${productoAgregar.cantidad}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><img class="imgEliminar" src="./Images/Elementos/Eliminar.png"></button>
    `
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
           btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item=> item.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML =` <p id=und${productoAgregar.id}>Und:${productoAgregar.cantidad}</p>`
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
            }
        

    })


}



function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}




function recuperar() {
 let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
 
 if(recuperarLS){
     recuperarLS.forEach(el=> {
         mostrarCarrito(el)
         carritoDeCompras.push(el)
         actualizarCarrito()
     })
 }


}


recuperar()

const carritoAbrir = document.getElementById('boton-carrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})