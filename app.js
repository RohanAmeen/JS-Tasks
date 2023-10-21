// //CHAPTER 35 TO 38 TASKS
// function displayCurrentDateTime() {
//     const currentDate = new Date();
//     alert(`Current Date and Time: ${currentDate}`);
//   }
//   displayCurrentDateTime();
  
//   function greetUser(firstName, lastName) {
//     alert(`Hello, ${firstName} ${lastName}!`);
//   }
  
//   // Example usage
//   greetUser("John", "Doe");

//   function addNumbers(num1, num2) {
//     return num1 + num2;
//   }
  
//   // Example usage
//   const sum = addNumbers(5, 7);
//   alert(`Sum: ${sum}`);

  
//   function calculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         alert("Invalid operator");
//         return;
//     }
//     alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
//   }
  
//   // Example usage
//   calculator(10, 5, '+');

  
//   function squareNumber(num) {
//     return num * num;
//   }
  
//   // Example usage
//   const squared = squareNumber(4);
//   alert(`Square: ${squared}`);
  

//   function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   }
  
//   // Example usage
//   const fact = factorial(5);
//   alert(`Factorial: ${fact}`);

  
//   function countNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//       console.log(i);
//     }
//   }
  
//   // Example usage
//   countNumbers(1, 10);

//   function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }
  
//     const hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
//     const hypotenuse = Math.sqrt(hypotenuseSquared);
//     return hypotenuse;
//   }
  
//   // Example usage
//   const hyp = calculateHypotenuse(3, 4);
//   alert(`Hypotenuse: ${hyp}`);

  
//   // Using arguments as values
// function calculateRectangleArea1(width, height) {
//     return width * height;
//   }
  
//   // Using arguments as variables
//   function calculateRectangleArea2() {
//     const width = 5;
//     const height = 10;
//     return width * height;
//   }
  
//   // Example usage
//   const area1 = calculateRectangleArea1(5, 10);
//   const area2 = calculateRectangleArea2();
//   alert(`Area 1: ${area1}`);
//   alert(`Area 2: ${area2}`);

  
//   function isPalindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
//   }
  
//   // Example usage
//   const isPal = isPalindrome("madam");
//   alert(`Is it a palindrome? ${isPal}`);

  

//   function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(" ");
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return capitalizedWords.join(" ");
//   }
  
//   // Example usage
//   const inputStr = 'the quick brown fox';
//   const outputStr = capitalizeFirstLetterOfEachWord(inputStr);
//   alert(`Capitalized: ${outputStr}`);

  
//   function findLongestWord(str) {
//     const words = str.split(" ");
//     let longestWord = "";
//     for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
  
//   // Example usage
//   const inputStr = 'Web Development Tutorial';
//   const longest = findLongestWord(inputStr);
//   alert(`Longest word: ${longest}`);

  

//   function countLetterOccurrences(str, letter) {
//     let count = 0;
//     for (const char of str) {
//       if (char === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   // Example usage
//   const inputStr = 'JSResourceS.com';
//   const letter = 'o';
//   const occurrences = countLetterOccurrences(inputStr, letter);
//   alert(`Occurrences of '${letter}': ${occurrences}`);

  

//   function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     alert(`The circumference is ${circumference}`);
//   }
  
//   function calcArea(radius) {
//     const area = Math.PI * radius * radius;
//     alert(`The area is ${area}`);
//   }
  
//   // Example usage
//   calcCircumference(5);
//   calcArea(5);
  
  

