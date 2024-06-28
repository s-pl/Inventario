document.addEventListener("DOMContentLoaded", function() {
    var productosContainer = document.querySelector(".productos-container");

    fetch("/products")
        .then(response => response.json())
        .then(data => {
            console.log('Response data:', data);
            Object.keys(data).forEach(function(key) {
                var row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data[key].name}</td>
                    <td>${data[key].description}</td>
                    <td>${key}</td>
                    <td class="price">${data[key].price}</td>
                    <td class="quantity">${data[key].quantity}</td>
                    <td>${data[key].specifications.brand}</td>
                    <td>${data[key].specifications.color}</td>
                    <td>${data[key].specifications.dimensions}</td>
                    <td>${data[key].specifications.model}</td>
                    <td>${data[key].specifications.weight}</td>
                    <td>${data[key].dateAdded}</td>
                    <td>${data[key].lastUpdated}</td>
                    <td>${data[key].supplier}</td>
                    <td><button onclick="editar('${key}')">Editar</button></td>
                `;
                productosContainer.appendChild(row);
            });

            $('#tablaproductos').DataTable();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            productosContainer.innerHTML = `<tr><td colspan="13">Error fetching data: ${error.message}</td></tr>`;
        });
});

function editar(id) {
    if (id) {
        fetch("/product?id=" + id)
            .then(response => response.json())
            .then(data => {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0');
                var yyyy = today.getFullYear();
                today = dd + '/' + mm + '/' + yyyy;

                document.getElementById("overlay").style.display = "block";
                document.getElementById("popupDialog").style.display = "block";
                document.getElementById("popupDialog").innerHTML = `
                    <form id="updateForm" action="/update" method="post">
                        <input type="hidden" name="id" value="${id}">
                        
                        <input type="text" name="id_producto" value="${data.id}">
                        
                        <input type="text" name="name" value="${data.name}">
                        
                        <input type="text" name="description" value="${data.description}">
                        
                        <input type="text" name="quantity" value="${data.quantity}">
                       
                        <input type="text" name="price" value="${data.price}">
                        
                        <input type="text" name="brand" value="${data.specifications.brand}">
                        
                        <input type="text" name="dimensions" value="${data.specifications.dimensions}">
                        
                        <input type="text" name="model" value="${data.specifications.model}">
                        
                        <input type="text" name="color" value="${data.specifications.color}">
                     
                        <input type="text" name="weight" value="${data.specifications.weight}">
                        
                        <input type="text" name="lastUpdated" disabled value="${today}">
                        
                        <input type="text" name="supplier" value="${data.supplier}">
                        <button type="submit">Actualizar</button>
                        <button type="button" id="closeButton" onclick="closeFn()">Cerrar</button>
                    </form>
                    <button onclick="del('${id}')">Eliminar</button>
                `;
            });
    }
}

function menuAdd() {



    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupDialog").style.display = "block";
    document.getElementById("popupDialog").innerHTML = `
                    <form id="updateForm" action="/addProduct" method="post">
            
                        
                        
                        
                          <input type="text" name="id" placeholder="ID del producto" value="">

    <input type="text" name="name" placeholder="Nombre del producto" value="">

    <input type="text" name="description" placeholder="Descripción del producto" value="">

    <input type="text" name="quantity" placeholder="Cantidad" value="">

    <input type="text" name="price" placeholder="Precio" value="">

    <input type="text" name="brand" placeholder="Marca" value="">

    <input type="text" name="dimensions" placeholder="Dimensiones" value="">

    <input type="text" name="model" placeholder="Modelo" value="">

    <input type="text" name="color" placeholder="Color" value="">

    <input type="text" name="weight" placeholder="Peso" value="">

    

    <input type="text" name="supplier" placeholder="Proveedor" value="">
                        <button type="submit">Actualizar</button>
                        <button type="button" id="closeButton" onclick="closeFn()">Cerrar</button>
                    </form>
                `;


}

function del(id) {
    fetch('/deleteProduct?id=' + id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById("popupDialog").innerHTML = "Producto eliminado con éxito";
            }
        });
}

function closeFn() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupDialog").style.display = "none";
    document.getElementById("popupDialog").innerHTML = "";
}