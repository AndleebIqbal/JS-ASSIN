//CHAPTER 01

// alert("Welcome to our website! We're glad you're here.");
// alert("Error! Please enter a valid passward.");
// alert("Welcome to our WEbPg." + "\n" + "Welcom!");
// alert("Welcome to our webpg");
// alert("Welcom!");
// alert("Hello... I can run JS through my web browser's console");

// CHAPTER NO 02

// var username;
// /var myName = "Ashfaq Mian";
// var message;

// // Assign "Hello World" to the variable 'message'
// message = "Hello World";

// // Display the message in an alert box
// alert(message);
 
// Save student's bio data in variables
// var firstName = "John";
// var lastName = "Doe";
// var age = 20;
// var grade = "A";

// Display the data in alert boxes
// alert("First Name: " + firstName);
// alert("Last Name: " + lastName);
// alert("Age: " + age);
// alert("Grade: " + grade);

// var alertMessage = "This is the alert message.";
// alert(alertMessage);

// Declare the email variable and assign a string value representing an email address
// var email = "example@example.com";
// // Display a message in an alert box using string concatenation
// alert("Your email address is: " + email);

// Declare the book variable and assign the value
// var book = "A smarter way to learn JavaScript";

// // Display the message in an alert box
// alert("I am currently reading the book: " + book);

// CHAPTER NO 03

// CHAPTER 04
// var variable1, variable2, variable3;

// LEGAL :
// myVariable,count,userName,totalAmount,isAvailable
// Illegal 
// 123abc (starts with a number)
// my-variable (contains a hyphen)
// var (reserved keyword)
// my variable (contains a space)
// function (reserved keyword)

// CHAPTER NO 05
// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
//     var num1 = parseFloat(prompt("Enter the first number:")); // Take the first number as input
//     var num2 = parseFloat(prompt("Enter the second number:")); // Take the second number as input
    
//     var result = num1 + num2; // Add the numbers
    
//     // Create a new <p> element
//     var paragraph = document.createElement("p");
    
//     // Set the text content of the <p> element
//     paragraph.textContent = "The result is: " + result;
    
//     // Append the <p> element to the document body
//     document.body.appendChild(paragraph);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
//     var usDollars = 10; // Number of US dollars
//     var saudiRiyals = 25; // Number of Saudi Riyals
//     var exchangeRateDollarToRupee = 104.80; // Exchange rate: 1 US Dollar = 104.80 Pakistani Rupee
//     var exchangeRateRiyalToRupee = 28; // Exchange rate: 1 Saudi Riyal = 28 Pakistani Rupee
    
//     // Calculate the total amount in Pakistani Rupees
//     var totalRupees = (usDollars * exchangeRateDollarToRupee) + (saudiRiyals * exchangeRateRiyalToRupee);
    
//     // Create a new <p> element
//     var paragraph = document.createElement("p");
    
//     // Set the text content of the <p> element
//     paragraph.textContent = "Total amount in Pakistani Rupees: " + totalRupees.toFixed(2);
    
//     // Append the <p> element to the document body
//     document.body.appendChild(paragraph);
// });

// CHAPTER NO 06
// Step 1: var a = 2, b = 1;

// Variable a is assigned a value of 2.
// Variable b is assigned a value of 1.
// Step 2: --a

// The pre-decrement operator -- is applied to a.
// a is decremented by 1, so its new value is 1.
// The result of this expression is 1.
// Step 3: --a - --b

// The pre-decrement operator -- is applied to a and b.
// a is already decremented to 1, so its value remains 1.
// b is decremented by 1, so its new value is 0.
// The subtraction operation 1 - 0 is performed.
// The result of this expression is 1.
// Step 4: --a - --b + ++b

// The pre-decrement operator -- is applied to a and b.
// a is already decremented to 1, so its value remains 1.
// b is already decremented to 0, so its value remains 0.
// The pre-increment operator ++ is applied to b.
// b is incremented by 1, so its new value is 1.
// The addition operation 1 + 1 is performed.
// The result of this expression is 2.
// Step 5: --a - --b + ++b + b--

// The pre-decrement operator -- is applied to a and b.
// a is already decremented to 1, so its value remains 1.
// b is already decremented to 0, so its value remains 0.
// The pre-increment operator ++ is applied to b.
// b is incremented by 1, so its new value is 1.
// The post-decrement operator -- is applied to b.
// The value of b (1) is used in the expression, and then it is decremented by 1.
// The addition operation 1 + 1 is performed, and then the result is added to the value of b (1) before the decrement.
// The result of this expression is 3.
// After the execution of the script:

// Variable a has a value of 1.
// Variable b has a value of 0.
// Variable result has a value of 3.
// Therefore, the output of variables a, b, and result after the execution of the script will be:

// a: 1
// b: 0
// result: 3


//    // JavaScript code
//    document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
//     var name = prompt("Enter your name:"); // Prompt the user to enter their name
    
//     // Create a new <p> element
//     var paragraph = document.createElement("p");
    
//     // Set the text content of the <p> element with a greeting message
//     paragraph.textContent = "Hello, " + name + "! Welcome to our website!";
    
//     // Append the <p> element to the document body
//     document.body.appendChild(paragraph);
// });


// // JavaScript code
// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter subject names
//     var subject1 = prompt("Enter the name of the first subject:");
//     var subject2 = prompt("Enter the name of the second subject:");
//     var subject3 = prompt("Enter the name of the third subject:");
    
//     // Total marks for each subject
//     var totalMarks = 100;
    
//     // Prompt the user to enter obtained marks for each subject
//     var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));
//     var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
//     var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));
    
//     // Calculate total marks and percentage
//     var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//     var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
    
//     // Create a table to display the result
//     var table = document.createElement("table");
    
//     // Create the table rows and cells
//     var row1 = table.insertRow();
//     var cell1_1 = row1.insertCell();
//     var cell1_2 = row1.insertCell();
    
//     var row2 = table.insertRow();
//     var cell2_1 = row2.insertCell();
//     var cell2_2 = row2.insertCell();
    
//     var row3 = table.insertRow();
//     var cell3_1 = row3.insertCell();
//     var cell3_2 = row3.insertCell();
    
//     // Set the content of the table cells
//     cell1_1.textContent = "Subject";
//     cell1_2.textContent = "Marks Obtained";
    
//     cell2_1.textContent = subject1;
//     cell2_2.textContent = obtainedMarks1;
    
//     cell3_1.textContent = subject2;
//     cell3_2.textContent = obtainedMarks2;
    
//     cell4_1.textContent = subject3;
//     cell4_2.textContent = obtainedMarks3;
    
//     // Append the table to the document body
//     document.body.appendChild(table);
    
//     // Display the total marks and percentage
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "Total Obtained Marks: " + totalObtainedMarks + ", Percentage: " + percentage.toFixed(2) + "%";
//     document.body.appendChild(paragraph);
// });


// CHAPTER NO 07

// JavaScript code
// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter a city name
//     var city = prompt("Enter a city name:");
    
//     // Check if the entered city is "Karachi"
//     if (city.toLowerCase() === "karachi") {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a welcome message
//         paragraph.textContent = "Welcome to the city of lights!";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     }
// });


// JavaScript code
// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter their gender
//     var gender = prompt("Enter your gender (male/female):");
    
//     // Convert the gender input to lowercase for case-insensitive comparison
//     gender = gender.toLowerCase();
    
//     // Check the gender and display the corresponding greeting
//     if (gender === "male") {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a greeting message for males
//         paragraph.textContent = "Good Morning Sir.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else if (gender === "female") {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a greeting message for females
//         paragraph.textContent = "Good Morning Ma'am.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message for invalid input
//         paragraph.textContent = "Invalid gender input.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     }
// });


 // JavaScript code
//  document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter the remaining fuel in litres
//     var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
    
//     // Check if the remaining fuel is less than 0.25 litres
//     if (remainingFuel < 0.25) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message to refill the fuel
//         paragraph.textContent = "Please refill the fuel in your car.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     }
// });



// JAVA SCRIPT 
// var a = 4;
// if (++a === 5) {
//     alert("Given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("Given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("Condition 1 is true");
// }
// if (c === 13) {
//     alert("Condition 2 is true");
// }
// if (++c < 14) {
//     alert("Condition 3 is true");
// }
// if (c === 14) {
//     alert("Condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// CHAPTER NO 08

// JavaScript code
// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter a character
//     var character = prompt("Enter a character:");
    
//     // Get the ASCII code of the character
//     var asciiCode = character.charCodeAt(0);
    
//     // Check if the ASCII code falls within the range of numbers, uppercase letters, or lowercase letters
//     if (asciiCode >= 48 && asciiCode <= 57) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating it is a number
//         paragraph.textContent = "The input is a number.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating it is an uppercase letter
//         paragraph.textContent = "The input is an uppercase letter.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating it is a lowercase letter
//         paragraph.textContent = "The input is a lowercase letter.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating it is neither a number, uppercase letter, nor lowercase letter
//         paragraph.textContent = "The input is not a number, uppercase letter, or lowercase letter.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     }
// });


// JavaScript code
// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter the first integer
//     var firstInteger = parseInt(prompt("Enter the first integer:"));
    
//     // Prompt the user to enter the second integer
//     var secondInteger = parseInt(prompt("Enter the second integer:"));
    
//     // Compare the two integers
//     if (firstInteger > secondInteger) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating the larger integer
//         paragraph.textContent = "The larger integer is: " + firstInteger;
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else if (firstInteger < secondInteger) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating the larger integer
//         paragraph.textContent = "The larger integer is: " + secondInteger;
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating that the two integers are equal
//         paragraph.textContent = "The two integers are equal.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     }
// });


 // JavaScript code
//  document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter a number
//     var number = parseFloat(prompt("Enter a number:"));
    
//     // Check if the number is positive, negative, or zero
//     if (number > 0) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating that the number is positive
//         paragraph.textContent = "The number is positive.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else if (number < 0) {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating that the number is negative
//         paragraph.textContent = "The number is negative.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     } else {
//         // Create a new <p> element
//         var paragraph = document.createElement("p");
        
//         // Set the text content of the <p> element with a message indicating that the number is zero
//         paragraph.textContent = "The number is zero.";
        
//         // Append the <p> element to the document body
//         document.body.appendChild(paragraph);
//     }
// });


// JavaScript code
// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed after the document is fully loaded
    
//     // Prompt the user to enter a character
//     var character = prompt("Enter a character:");
    
//     // Convert the character to lowercase for case-insensitive comparison
//     character = character.toLowerCase();
    
//     // Check if the character is a vowel
//     var isVowel = false;
//     if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//         isVowel = true;
//     }
    
//     // Create a new <p> element
//     var paragraph = document.createElement("p");
    
//     // Set the text content of the <p> element based on whether the character is a vowel or not
//     if (isVowel) {
//         paragraph.textContent = "The character is a vowel.";
//     } else {
//         paragraph.textContent = "The character is not a vowel.";
//     }
    
//     // Append the <p> element to the document body
//     document.body.appendChild(paragraph);
// });


// JS
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


// Prompt the user to enter the time in 24-hour clock format
// var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// // Extract the hour and minute from the input
// var hour = Math.floor(time / 100);
// var minute = time % 100;

// // Initialize a variable to store the converted time in 12-hour clock format
// var convertedTime;

// // Check the time and set the converted time accordingly using if, else if, and else statements
// if (hour >= 0 && hour <= 11) {
//     if (hour === 0) {
//         convertedTime = "12:" + (minute < 10 ? "0" + minute : minute) + "am";
//     } else {
//         convertedTime = hour + ":" + (minute < 10 ? "0" + minute : minute) + "am";
//     }
// } else if (hour === 12) {
//     convertedTime = "12:" + (minute < 10 ? "0" + minute : minute) + "pm";
// } else {
//     hour -= 12;
//     convertedTime = hour + ":" + (minute < 10 ? "0" + minute : minute) + "pm";
// }

// // Display the converted time
// alert("The converted time is: " + convertedTime);


// CHAPTER No 09
// var studentNames = [];
// studentNames.push("Uncle");

// var studentNames = {};

// var fruits = ["apple", "banana", "orange", "mango"];

// var numbers = [1, 2, 3, 4, 5];

// var boolArray = [true, false, true, true];

// var mixedArray = [1, "apple", true, null, { name: "John", age: 25 }];



// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Display the qualifications in browser
// document.write("<h2>List of Education Qualifications in Pakistan:</h2>");

// document.write("<ul>");
// for (var i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ul>");


// CHAPTER NO 10
// var multiArray = [[]];


// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// //   ];


// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }


// var tableNumber = parseInt(prompt("Enter the number for multiplication table: "));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table: "));

// console.log("Multiplication table of " + tableNumber + ":");

// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   console.log(tableNumber + " x " + i + " = " + result);
// }


// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// console.log("The largest number in the array is: " + largest);


// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// console.log("The smallest number in the array is: " + smallest);


// console.log("Multiples of 5 from 1 to 100:");

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }


_