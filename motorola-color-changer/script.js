const selectEl = document.querySelector("#mySelect");
const myColor = document.querySelector(".myColor");
let myStr = selectEl.value[0].toUpperCase() + selectEl.value.slice(1);

myColor.innerHTML = `Cor: <strong>${myStr}</strong>`;

function changeColor() {
  window.location = `${selectEl.value}.html`;
}
