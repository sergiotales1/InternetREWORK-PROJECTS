const backgroundImgEl = document.getElementById('bg-image')
const myBtn = document.querySelector('#myBtn')

window.addEventListener("scroll", () =>{
   updateImage()
})

function updateImage(){
   backgroundImgEl.style.opacity = 1 - window.pageYOffset / 900
   backgroundImgEl.style.backgroundSize = 160 - window.pageYOffset / 11 + "%"
}

myBtn.addEventListener("click", ()=>{
   window.scrollTo({top: 0, behavior: 'smooth'})
   
})
console.log(window)
// scrolls back to top