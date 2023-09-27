

// Productos ------------------------------------------------------------------------

function removerNodos(id){
    let el = document.getElementById(id);
    while(el.hasChildNodes()){
            el.removeChild(el.firstChild);
    }
}

function agregaProducto(p){
    let divPrincipal = document.getElementById('pr');
    divPrincipal.appendChild(p);
}

function mostrarTodo(){
    removerNodos('pr');

    fetch('productos.json')
    .then(response => response.json())
    .then(data => {
         data.forEach(function(producto) {
            let div = document.createElement('div');
            div.classList.add("producto");

            let img = document.createElement('img');
            img.setAttribute('src', producto.url);

            let title = document.createElement('p');
            title.classList.add('titulo-producto');
            title.textContent = producto.titulo;

            let precio = document.createElement('p');
            precio.classList.add('precio');
            precio.textContent = "$" + producto.precio;

            let descripcion = document.createElement('p');
            descripcion.classList.add('descripcion-producto');
            descripcion.textContent = producto.descripcion;

            let boton = document.createElement('button');
            boton.textContent = "Agregar";

            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(precio);
            div.appendChild(descripcion);
            div.appendChild(boton);

            agregaProducto(div);

        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
}

function departamento(d){

    if(d == "todo"){
        mostrarTodo();
        return;
    }

    removerNodos('pr');

    fetch('productos.json')
    .then(response => response.json())
    .then(data => {

        data.forEach(function(producto) {

            if(d == producto.tipo_de_producto){

                let div = document.createElement('div');
                div.classList.add("producto");

                let img = document.createElement('img');
                img.setAttribute('src', producto.url);

                let title = document.createElement('p');
                title.classList.add('titulo-producto');
                title.textContent = producto.titulo;

                let precio = document.createElement('p');
                precio.classList.add('precio');
                precio.textContent = "$" + producto.precio;

                let descripcion = document.createElement('p');
                descripcion.classList.add('descripcion-producto');
                descripcion.textContent = producto.descripcion;

                let boton = document.createElement('button');
                boton.textContent = "Agregar";

                div.appendChild(img);
                div.appendChild(title);
                div.appendChild(precio);
                div.appendChild(descripcion);
                div.appendChild(boton);

                agregaProducto(div);

            }

        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
}

document.getElementById('btn-frutasVerduras').addEventListener('click', function() {
    departamento("frutas y verduras");
});

document.getElementById('btn-vinosylicores').addEventListener('click', function() {
    departamento("vinos y licores");
});

document.getElementById('btn-abarrotes').addEventListener('click', function() {
    departamento("abarrotes");
});

document.getElementById('btn-todo').addEventListener('click', function() {
    departamento("todo");
});

//--------------------------------------------------------------------------------------------