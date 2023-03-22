let input = document.querySelector('#input')

let buttonKg = document.querySelector('#convert-to-kg')
let buttonPund = document.querySelector('#convert-to-pound')

let output = document.querySelector('#output')

buttonKg.addEventListener('click', ()=>{
   output.value = input.value / 2.205 + ' Kg'
})

buttonPund.addEventListener('click', ()=>{
    output.value = input.value * 2.205 + ' Pound'
})