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
