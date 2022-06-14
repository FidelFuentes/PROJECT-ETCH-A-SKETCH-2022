const container = document.querySelector('#container')
container.classList.add('container')
const buttonColor=document.querySelector('#buttonColor')
const inputColor=document.querySelector('#inputColor')
buttonColor.classList.add('buttonColor')
buttonColor.addEventListener('click', function(e){
    color = inputColor.value
})
const rainbow=document.querySelector('#rainbow')

rainbow.addEventListener('click',function(e){
  
    color = '#'+Math.floor(Math.random()*16777215).toString(16);
})



const buttonSize = document.querySelector('#buttonSize')
const inputSize= document.querySelector('#inputSize')
buttonSize.classList.add('buttonSize')
buttonSize.addEventListener('click', function(e){
    createDiv(inputSize.value*inputSize.value)
    container.style.display='grid'
    container.style.gridTemplateColumns=`repeat(${inputSize.value},1fr)`
    container.style.gridTemplateRows=`repeat(${inputSize.value},1fr)`
})
let color = 'black';
function createDiv (number){
    
    for (let i = 1; i <= number; i++) {
        const content= document.createElement('div')
        content.classList.add('content')
        content.addEventListener('mouseover',function(e){
            content.style.transition='1s'
            content.style.backgroundColor=color
        })
        container.appendChild(content)
    }
    
}


