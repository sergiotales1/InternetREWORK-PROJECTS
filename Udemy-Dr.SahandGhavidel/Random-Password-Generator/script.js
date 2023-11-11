const alertContainerEl = document.querySelector(".alert-container");
const copyIconEl = document.querySelector(".fa-copy");
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");

btnEl.addEventListener("click", createPassword);

copyIconEl.addEventListener("click", copyPassword);

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz)(@*#!&%$[]{}ABCDEFGHIJKLMNOPQRSTUVXWYZ";
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainerEl.textContent = password + " copied!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
}
