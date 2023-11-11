const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
setInterval(() => {
  monthName.textContent = date.toLocaleDateString("en", {
    month: "long",
  }); //getMonthName()
  dayNumber.textContent = date.getDate();
  dayName.textContent = date.toLocaleDateString("en", {
    weekday: "long",
  }); //getDayName();
  yearEl.textContent = date.getFullYear();
}, 100);

/* other way
function getMonthName() {
  let month;
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
    "December",
  ];
  month = months[date.getMonth()];
  return month;
}

const getDayName = function () {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};
*/
