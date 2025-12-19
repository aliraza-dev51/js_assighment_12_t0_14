  /*----------Chapter practice 12 to 14----------*/     
/*
//Q1
let ch = prompt("Q1: Enter a character:");
let code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
  alert("Q1: It is a Number<br>");
} else if (code >= 65 && code <= 90) {
  alert("Q1: It is an Uppercase Letter<br>");
} else if (code >= 97 && code <= 122) {
  alert("Q1: It is a Lowercase Letter<br>");
} else {
  alert("Q1: Invalid Input<br>");
}

//Q2

let num1 = +prompt("Q2: Enter first number:");
let num2 = +prompt("Q2: Enter second number:");

if (num1 > num2) {
  alert("Q2: " + num1 + " is larger<br>");
} else if (num2 > num1) {
  alert("Q2: " + num2 + " is larger<br>");
} else {
  alert("Q2: Both numbers are equal<br>");
}

//Q3

let num = +prompt("Q3: Enter a number:");

if (num > 0) {
  alert("Q3: Number is Positive<br>");
} else if (num < 0) {
  alert("Q3: Number is Negative<br>");
} else {
  alert("Q3: Number is Zero<br>");
}

//Q4

let char = prompt("Q4: Enter a single character:");
char = char.toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  alert("Q4: true<br>");
} else {
  alert("Q4: false<br>");
}

//Q5

let correctPassword = "javascript123";
let userPassword = prompt("Q5: Enter your password:");

if (!userPassword) {
  alert("Q5: Please enter your password<br>");
} else if (userPassword === correctPassword) {
  alert("Q5: Correct! The password you entered matches the original password<br>");
} else {
  alert("Q5: Incorrect password<br>");
}


//Q6


let greeting;
let hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert("Q6: " + greeting + "<br>");


//Q7

let time = +prompt("Q7: Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
  alert("Q7: Good Morning");
} else if (time >= 1200 && time < 1700) {
  alert("Q7: Good Afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Q7: Good Evening");
} else if (time >= 2100 && time <= 2359) {
  alert("Q7: Good Night");
} else {
  alert("Q7: Invalid Time");
}
  */
