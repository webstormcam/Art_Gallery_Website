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




let map = L.map('map').setView([41.4782999, -71.3143662], 16);

var myIcon = L.icon({
    iconUrl: 'imgs/icon-location.svg',
    iconSize: [66, 88],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

let marker = L.marker([41.4782999, -71.3143662],{icon:myIcon}).addTo(map);

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
  
    attribution: '© OpenStreetMap'
    
}).addTo(map);
