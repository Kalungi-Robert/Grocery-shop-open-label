const date = new Date();
// date.setDate(29);
//console.log("current Day", currentDate);
console.log("currentDate", date);
//let currentDay = 0;

const currentDay = date.getDay();
const hoursEL = document.querySelector("#hours");
//Another option
// const hoursEL = document.getElementById("hours"),

const isSunday = currentDay === 0;
const isSaturday = currentDay === 6;
const isWeekend = isSunday || isSaturday;
//console.log("it's weekend", isWeekend);

if (isWeekend) {
     console.log("it's weekend!");
     hoursEL.style.backgroundcolor = "red";
     hoursEL.textContent = "we are closed!"
      //changing text
    // hoursEL.innerHTML = "we are closed";
   

} else {
    console.log("it's not weekend!");
    hoursEL.textContent = "we are open!"
    //changing text
   // hoursEL.innerHTML = "we are open";

//changing background
   //hoursEL.style.backgroundcolor = "green";

    
}
