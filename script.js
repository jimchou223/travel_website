const spotBtn = document.getElementById('spot-btn')
const foodBtn = document.getElementById('food-btn')
const spotHidden = document.querySelectorAll('.spot-hidden')
const foodHidden = document.querySelectorAll('.food-hidden')

let spotStatus = true
let foodStatus = true


// mobile mode navbar control
spotBtn.addEventListener('click', () => {
    if (window.innerWidth < 768 && spotStatus == true) {
        spotHidden.forEach((btn) => btn.classList.remove('hidden'))
        spotStatus = false
    } else if (window.innerWidth < 768 && spotStatus == false) {
        spotHidden.forEach((btn) => btn.classList.add('hidden'))
        spotStatus = true
        
    }
})
foodBtn.addEventListener('click', () => {
    if (window.innerWidth < 768 && foodStatus == true) {
        foodHidden.forEach((btn) => btn.classList.remove('hidden'))
        foodStatus = false
    } else if (window.innerWidth < 768 && foodStatus == false) {
        foodHidden.forEach((btn) => btn.classList.add('hidden'))
        foodStatus = true
    }
})

