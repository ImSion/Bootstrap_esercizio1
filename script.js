const center = document.querySelector(`.center-card`)
const lateral = document.querySelectorAll(`.card-to-move`)
const lateraltwo = document.querySelectorAll(`.card-to-move2`)

center.addEventListener(`mouseover`, function(){
    lateral.forEach(function(lateral){
        lateral.classList.add(`animazione`)

    })
})

    

