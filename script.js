const location_link = document.querySelector('.link')
const location_Words= document.getElementById('location-words')
const arrow_Holder = document.getElementById('arrow_Holder')
console.log(arrow_Holder)
location_link.addEventListener('mouseover',function(){
    location_Words.style.backgroundColor='#D5966C'
    arrow_Holder.style.backgroundColor='#151515'
    
})

location_link.addEventListener('mouseout',function(){
    location_Words.style.backgroundColor='#151515'
    arrow_Holder.style.backgroundColor='#D5966C'
})




var map = L.map('map', {
    center: [41.478, -71.31],
    zoom: 16,
    zoomControl:false,
    scrollWheelZoom: false,
    // dragging:false
});

var myIcon = L.icon({
    iconUrl: 'imgs/icon-location.png',
    iconSize: [66, 88],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
 
});

let marker = L.marker([41.4789533, -71.3108047],{icon:myIcon}).addTo(map);

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,

    attribution: '© OpenStreetMap'
    
}).addTo(map);
