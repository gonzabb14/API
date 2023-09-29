const API_URL = "https://randomuser.me/api/";

const contenedor = document.getElementById("container");
const imagen = document.getElementById("img");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const ubicacion = document.getElementById("ubicacion");
const boton = document.getElementById("btn");

fetch(API_URL)
        .then(response => {
            console.log(response.ok);
            return response.json();
        })
        .then(data => {
            const pic = data.results[0].picture.large;
            const name = data.results[0].name.first + " " + data.results[0].name.last;
            const emailApi = data.results[0].email;
            const phone = data.results[0].phone;
            const ubication = data.results[0].location.city + ", " + data.results[0].location.country;
            
            console.log(ubication);

            imagen.src = pic;
            nombre.innerHTML = "Nombre: " + name;
            email.innerHTML = "Email: " + emailApi;
            telefono.innerHTML = "Telefono: " + phone;
            ubicacion.innerHTML = "Ubicación: " + ubication;

            

        })
        .catch(error => {
            console.log(error.message);
        })


boton.addEventListener("click", function(e) {
    location.reload();
})
