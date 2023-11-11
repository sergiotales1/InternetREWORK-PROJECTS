const textAreaEl = document.getElementById('textarea')
const totalCounter = document.getElementById('total-counter')
const remainingCounter = document.getElementById('remaining-counter')

textAreaEl.addEventListener("keyup", ()=>{
   updateCounter()
})

updateCounter()
function updateCounter(){
   totalCounter.innerText = textAreaEl.value.length
   remainingCounter.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length
}