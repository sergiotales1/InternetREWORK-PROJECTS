const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".closed-icon");
const trailerContainerEl = document.querySelector(".trailer-content");
const videoEl = document.querySelector("video")

// I put one class called active into the div that carry all the popup structure, that class gives 0 opacity and visibility hidden, and when someone clicks the Watch now button the JS removes the class from the HTML and the pop up appears, the reverse occurs when the X is clicked

btnEl.addEventListener('click', ()=> {
   trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=> {
   trailerContainerEl.classList.add("active");
   videoEl.pause()
})
