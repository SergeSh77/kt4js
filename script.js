const circle = document.querySelector('#circle')
const res = document.querySelector('#res')
const slider = document.querySelector('#slider')
const test = document.querySelector('#test')
const square = document.querySelector('#square')

let sliderX = 100
let b = null
function a(ev){
    ev.preventDefault()
    test.innerText = ev.x
    if (ev.x > 96 && ev.x < 300){
        circle.style.left = `${ev.x - 105}px`
        res.innerText = (((ev.x - 96) / 204) * 200).toFixed(0)
    }
}

circle.addEventListener('mousedown', function(){
    slider.addEventListener('mousemove', a)
})

document.body.addEventListener('mouseup', function(){
    console.log(a)
    slider.removeEventListener('mousemove', a)
})