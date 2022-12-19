/* se pretende al cargar el index simular una carga desde alguna base de datos 
de cualquier item que forme parte de la operatoria de la pagina 
Ej: productos 

En principio se definen   y luego  mediante el recurso de localStorage o sessionStorage se iran utilizando.

*/
//alert("HOLA");
var productos = [
    {
        id: 1,
        nombre: "Tierra del Fuego y la Patagonia",
        descripcion: "Este fantástico trekking de aventura te lleva a dos de los lugares más extraordinarios del planeta que sorprenden...",
        imagen: "./imagenes/tierra-del-fuego-patagonia__product.jpg",
        precio: "3875",
        moneda: "USD",
        descuento: 50,    //si el valor es 0 no tiene descuento
        cupoMensual: 24
    },
    {
        id: 2,
        nombre: "Trekking guiado por el circuito O",
        descripcion: "Recorre la impresionante cordillera de Torres del Paine en solo 7 días en esta increíble aventura de trekking.",
        imagen: "./imagenes/o-circuit-torres-del-paine__product.jpg",
        precio: "2904",
        moneda: "USD",
        descuento: 50,    //si el valor es 0 no tiene descuento
        cupoMensual: 30
    },
    {
        id: 3,
        nombre: "Circuito W, Torres del Paine",
        descripcion: "Explora los puntos emblemáticos del famoso Parque Nacional Torres del Paine en cuatro caminatas distintas...",
        imagen: "./imagenes/w-trek-torres-del-paine__product.jpg",
        precio: "1843",
        moneda: "USD",
        descuento: 50,    //si el valor es 0 no tiene descuento
        cupoMensual: 50
    },
    {
        id: 4,
        nombre: "T. del Fuego y la P.",
        descripcion: "Este fantástico trekking de aventura te lleva a dos de los lugares más extraordinarios del planeta que sorprenden...",
        imagen: "./imagenes/tierra-del-fuego-patagonia__product.jpg",
        precio: "3875",
        moneda: "USD",
        descuento: 0,    //si el valor es 0 no tiene descuento
        cupoMensual: 36
    },
    {
        id: 5,
        nombre: "Trekking circuito O",
        descripcion: "Recorre la impresionante cordillera de Torres del Paine en solo 7 días en esta increíble aventura de trekking.",
        imagen: "./imagenes/o-circuit-torres-del-paine__product.jpg",
        precio: "2904",
        moneda: "USD",
        descuento: 0,    //si el valor es 0 no tiene descuento
        cupoMensual: 20
    },
    {
        id: 6,
        nombre: "Circuito W, Torres ",
        descripcion: "Explora los puntos emblemáticos del famoso Parque Nacional Torres del Paine en cuatro caminatas distintas...",
        imagen: "./imagenes/w-trek-torres-del-paine__product.jpg",
        precio: "1843",
        moneda: "USD",
        descuento: 0,    //si el valor es 0 no tiene descuento
        cupoMensual: 27
    },
];

// inicializamos el carrito vacio
var carrito= []; 
var carritoStorage = JSON.stringify(carrito);
localStorage.setItem("carrito",carritoStorage);

//convertimos a formato de srtings JSON para pode guardar en el localStorage
var productosParaStorage = JSON.stringify(productos);

// almaceno en localStorage para disponibilidad de otras paginas    
localStorage.setItem("productos", productosParaStorage);

//leemos los productos desde el strorage para chequear que se recuepren cono uno piensa que se guardaron
let productosDesdeStorage = JSON.parse(localStorage.getItem("productos"));

sessionStorage.setItem("usuarioId", null);



// armado de las tarjetas de promociones actuales 

// obtengo etiqueta referencia de div  html donde voy a colgar las tatjetas de promocioens

let tarjetasHTML = document.getElementById("promocionesActuales");



var generarTarjetasPromociones = (items, padreHTML) => {

    //recorro la lista de productos y si es promocion agrego a lista de tarjeta
    // crea un a referencia html para la tarjeta
    //let cardProductos = document.createElement("div");
    //cardProductos.className = "card m-3";
    //se confecciona la trajeta 
    //card=
    // se inserta la tarjeta a la refernrcia         
    //cardProductos.innerHTML = card;
    //luego la grego al padre 
    //cards.appendChild(cardProductos);

//    let tarjetasHTML = document.getElementById("promocionesActuales");


    var grupoTarjetaHTML = document.createElement("div");
    grupoTarjetaHTML.className = "card-group";

    items.forEach(item => {
        if (parseInt(item.descuento) !== 0) {

            let cardItems = document.createElement("div");
            cardItems.className = "card";
            let card = `
        <img src=${item.imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.nombre}</h5>
          <p class="card-text">
          ${item.descripcion}
           </p>
           <div class="contenedorPrecioPromocion">
              <div class="contenedorPrecio" id="precio"> 
                  Precio: <span> ${item.moneda} ${item.precio}</span>
             </div>
              <div class="contenedorPromocion" id="promocion"> 
              ${item.descuento} % OFF 
              </div>
           </div>
           <div class="contenedorBotonAceptarOferta">
              <a class="btn btn-primary"  id="item${item.id}">Quiero la oferta!</a>              
           </div>        
        `;
            
            /* let cardProductos = document.createElement("div");
             cardProductos.className = "card m-3";
     
             let card = `
                 <img class="card-img-top h-50 w-50" src="${producto.img}" alt="Card image cap">
                 <div class="card-body">
                     <h4 class="card-title">${producto.nombre}</h4>
                     <p class="card-text">
                         ${producto.descripcion}
                     </p>
                     <p class="card-text">
                         ${producto.precio}
                     </p>
                     <a class="btn btn-primary" id="cart${producto.id}">Eliminar</a>
                 </div>
             `;*/


            cardItems.innerHTML = card;
            grupoTarjetaHTML.appendChild(cardItems);

            padreHTML.appendChild(grupoTarjetaHTML);
           // tarjetasHTML.appendChild(grupoTarjetaHTML);

            //evento de boton de tarjeta
           let itemCard = document.getElementById("item" + item.id);
            itemCard.addEventListener("click", (evento) => {
                evento.preventDefault();
                // Agregamos el producto al carrito

                 let productosDesdeStorage = JSON.parse(localStorage.getItem("productos"));

                carrito= JSON.parse(localStorage.getItem("carrito"));
                carrito.push(item);
                // var productosParaStorage = JSON.stringify(carrito);
                localStorage.setItem("carrito",JSON.stringify(carrito));
            });
        }
        });
 //   padreHTML.appendChild(grupoTarjetaHTML);
 //   tarjetasHTML.appendChild(grupoTarjetaHTML);
};

// llamo a generar las tarjetas con la lista de productos y el html referenci de la pagina en particular
tarjetasHTML.appendChild(generarTarjetasPromociones(productos, tarjetasHTML));
//generarTarjetasPromociones(productos, tarjetasHTML)










/*
 crea un a referencia html para la tarjeta
let cardProductos = document.createElement("div");
cardProductos.className = "card m-3";
 
se confecciona la trajeta 

 cardProductos.innerHTML = card;

 luego la grego al padre 
cards.appendChild(cardProductos);

        let card = `
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
                <a class="btn btn-primary" id="cart${producto.id}">Agregar al Carrito</a>
            </div>
        `;
    
        // Escribimos el contenido de la plantilla card en la etiqueta div que creamos (Texto - String)
        cardProductos.innerHTML = card;

        // Append Child nos permite agregar una etiqueta hija dentro de una etiqueta padre
        cards.appendChild(cardProductos);

<div class="card-group" >
            <div class="card">
              <img src="./imagenes/tierra-del-fuego-patagonia__product.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tierra del Fuego y la Patagonia</h5>
                <p class="card-text">
                    Este fantástico trekking de aventura te lleva a dos de los lugares más extraordinarios del planeta que sorprenden...
                 </p>
                 <div class="contenedorPrecioPromocion">
                    <div class="contenedorPrecio" id="precio"> 
                        Precio: <span> USD 3875</span>
                   </div>
                    <div class="contenedorPromocion" id="promocion"> 
                        50% OFF 
                    </div>
                 </div>
                 <div class="contenedorBotonAceptarOferta">
                    <a class="btn btn-primary" >Quiero la oferta!</a>
                 </div>
              </div>
            
            </div>.......
  </div>      
  */
