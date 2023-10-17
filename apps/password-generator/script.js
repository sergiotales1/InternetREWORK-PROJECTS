const copyBtn = document.querySelector(".fa-copy");
const btn = document.getElementById("btn");
const inputEl = document.getElementById("input");

const chars =
  "abcdefghijklmnopqrstuvwxyxz1234567890!@#$%¨&*()ABCDEFGHIJKLMNOPQRSTUVWXYXZ";

btn.addEventListener("click", () => {
  let password = [];
  for (let i = 0; i < 14; i++) {
    // this 14 is the length of the pw
    let randomNum = Math.floor(Math.random() * chars.length);
    password.push(chars[randomNum]);
  }
  inputEl.value = password.join("");
});

copyBtn.addEventListener("click", () => {
  if (inputEl.value.length > 1) {
    document.getElementById("alert").classList.remove("error");
    // select the text field
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);

    // copy the text inside the text field
    navigator.clipboard.writeText(inputEl.value);

    document.querySelector("#alert").classList.remove("active");
    document.querySelector("#alert").textContent = inputEl.value + " copied!";
    setTimeout(
      () => document.querySelector("#alert").classList.add("active"),
      3000
    );
  } else {
    document.querySelector("#alert").classList.add("error");
    document.querySelector("#alert").classList.remove("active");
    document.querySelector("#alert").textContent = "No value to copy!";
    setTimeout(
      () => document.querySelector("#alert").classList.add("active"),
      3000
    );
  }
});
