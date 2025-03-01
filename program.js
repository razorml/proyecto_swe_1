var map = L.map('map').setView([4.561153, -74.106594], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Agregar un marcador en el Barrio Inglés
var marker = L.marker([4.561153, -74.106594]).addTo(map);
marker.bindPopup("<b>Barrio Inglés</b><br>Localidad Rafael Uribe Uribe, Bogotá.").openPopup();

async function loadPolygon() {
    try {
        let response = await fetch("ingles.geojson");  
        let data = await response.json();
        L.geoJson(data, {
            style: { color: "blue" }
        }).addTo(map);
        console.log("Polígono load ok");

    } catch (error) {
        console.error("can´t load:", error);
    }
}

// Llamar la función
loadPolygon();
