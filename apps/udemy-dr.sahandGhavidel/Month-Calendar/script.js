const monthIndex = new Date().getMonth();

const monthEl = document.querySelector('.date h1')
const fullDateEl = document.querySelector('.date p')
const daysEl = document.querySelector('.days')
// we get the date from user and store it into myDate variable
const myDate = new Date()
// here to discover the last day of month (because our calendar needs to show this) we create a new Date object with our year and the month index of the user plus 1, this plus 1 is explained for the 0, when we say that we want x month with 0 day we are telling JavaScript to search for the previous day of that month.
// example i have the month 3 but i want no 1, 2 or 3 day, the day that i want is the one before first day of month (which have the index of 0)
const lastDay = new Date(myDate.getFullYear(), monthIndex + 1, 0).getDate()

// to find the first day we just send the user's year and month index with the day 1 them we use .getDay to get the day.
// now we have a little problem, JavaScript starts the week on Sunday, but on the script we start at Monday so we subtract 1 
const firstDay = new Date(myDate.getFullYear(), monthIndex, 1).getDay() - 1


const months = [
   "January",  
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
]

monthEl.innerHTML = months[monthIndex]
fullDateEl.innerHTML = new Date().toDateString()

let days = "";
// here we are creating the amount of div that correspond the quantity of empty days (if the month start on Wednesdays we have 2 empty divs)
for (let i = firstDay; i > 0; i--){
   days += `<div class="empty"></div>`
}

// here we make the divs that correspond of the days of months 

for(let i=1; i <=lastDay; i++){
   if (i === new Date().getDate()) {
      days += `<div class="today">${i}</div>`
   } else {
      days += `<div>${i}</div>`
   }
}

daysEl.innerHTML = days