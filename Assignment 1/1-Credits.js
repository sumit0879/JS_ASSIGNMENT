let readlineSync = require("readline-sync");

let credits = readlineSync.question("Enter your credit scrore - ");

if (credits >= 7500) {
  console.log("You earned TERA LEADER badge.");
} else if (credits >= 6000) {
  console.log("You earned GEGA LEADER badge.");
} else if (credits >= 4500) {
  console.log("You earned MEGA LEADER badge");
} else {
  console.log("You earned RISING STAR badge");
}