const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
// const milliSecondEl = document.getElementById('millisecond')
const amPmEl = document.getElementById('amPm')

function getTime() {
   let h = new Date().getHours()
   let m = new Date().getMinutes()
   let s = new Date().getSeconds()
  // let ml = new Date().getMilliseconds()
   let amPm = "AM"

   if (h > 12) {
      h = h - 12
      amPm = "PM"
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
  // ml = ml < 10 ? '0' + ml : ml;

   hourEl.innerText = h
   minuteEl.innerText = m
   secondEl.innerText = s
   // milliSecondEl.innerText = ml
   amPmEl.innerText = amPm

}
getTime()
setInterval(() => {
   getTime()
}, 1);