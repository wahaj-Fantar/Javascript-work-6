// ---chapter 21-25 ---
// ---------Q1-------

// let firstName = prompt("Enter your first name : ");
// let lastName = prompt("Enter your last name : ");
// let fullName = firstName + lastName;
// console.log(`Welcome! ${fullName}`);

// ---------Q2-------

// let phoneModel = prompt("Enter your favourite Phone : ");
// console.log(`My favourite Phone is : ${phoneModel}`)
// console.log(`Length of string : ${phoneModel.length}`);

// ---------Q3-------

// let word = "Pakistani";
// console.log(`String : ${word}`)
// console.log(`Index of 'n' is : ${word.indexOf("n")}`);

// ---------Q4-------

// let word = "Hello World";
// console.log(`String : ${word}`)
// console.log(`Index of 'l' is : ${word.lastIndexOf("l")}`);

// ---------Q5-------

// let word = "Pakistani";
// console.log(`String : ${word}`)
// console.log(`Character at index 3 : ${word[3]}`);

// ---------Q6-------

// let firstName = prompt("Enter your first name : ");
// let lastName = prompt("Enter your last name : ");
// let fullName = firstName.concat(lastName);
// console.log(`Welcome! ${fullName}`);

// ---------Q7-------

// let city = "Hyderabad";
// let replace =  city.replace("Hyder","Islam");
// console.log(`City : ${city}`)
// console.log(`Atfer replacement : ${replace}`)

// ---------Q7-------

// let message ="Ali and Sami are best friends. They play cricket and football together.";
// let replace = message.replaceAll("and","&");
// console.log(`${replace}`)

// ---------Q8-------

// let value = "472";
// console.log(`value : ${value}`);
// console.log(`Type : ${typeof(value)}`);
// let change = Number(value)
// console.log(`value : ${change}`);
// console.log(`Type : ${typeof(change)}`);

// ---------Q9-------

// let userInput = prompt("Enter any word : ");
// let changeCase = userInput.toUpperCase();
// console.log(`User Input : ${userInput}`);
// console.log(`Upper case : ${changeCase}`);

// ---------Q10-------

// let word = prompt("Enter any word : ");
// let firstChar = word.slice(0,1);
// let othersChars = word.slice(1);
// firstChar = firstChar.toUpperCase();
// othersChars = othersChars.toLowerCase();
// let fullName = firstChar + othersChars;
// console.log(`User Input : ${word}`);
// console.log(`Title Case : ${fullName}`);

// ---------Q11-------

// let num = 35.36;
// let  numAsString = num.toString();
// let numWithoutDot = numAsString.replace('.', '');
// console.log(`Number : ${num}`)
// console.log(`Result : ${numWithoutDot}`);

// ---------Q13-------

// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am"
// );
// let flag = true;

// for (let i = 0; i <= arr.length; i++) {
//   if (userInput == arr[i]) {
//     flag = false;
//     console.log(`${userInput} is avaliable at index ${i} in our bakery`);
//     break;
//   }
// }
// if (flag == true) {
//   console.log(`We are sorry. ${userInput} is not avaliable in our bakery`);
// }

// ---------Q14-------
// ---------Q15-------

// let university = "University of Karachi";
// let separate = university.split("");
// for (let i = 0; i < separate.length; i++) {
//   console.log(separate[i]);
// }

// ---------Q16-------

// let str = prompt("Enter any word : ")
// let res = str.slice(-1);
// console.log(`User input : ${str}`)
// console.log(`Last character of input : ${res}`);

// ---------Q17-------

// let sentence = "The quick brown fox jumps over the lazy dogs";
// let wordToCount = "the";
// let lowercaseSentence = sentence.toLowerCase();
// let word = lowercaseSentence.split(" ");
// let count = 0;
// for (let i = 0; i <= lowercaseSentence.length; i++) {
//   if (wordToCount === word[i]) {
//     count++;
//   }
// }
// console.log(`Text : ${sentence}`);
// console.log(`There are ${count} occurences of word ${wordToCount}`);

// ---chapter 26-30 ---
// ---------Q1-------

// let num = +prompt("Enter any positive number : ");
// let num1 = Math.round(num);
// let num2 = Math.floor(num);
// let num3 = Math.ceil(num);
// console.log(`number : ${num}`);
// console.log(`round off value : ${num1}`);
// console.log(`floor value : ${num2}`);
// console.log(`ceil value : ${num3}`);

// ---------Q2-------

// let num = +prompt("Enter any negative number : ");
// let num1 = Math.round(num);
// let num2 = Math.floor(num);
// let num3 = Math.ceil(num);
// console.log(`number : ${num}`);
// console.log(`round off value : ${num1}`);
// console.log(`floor value : ${num2}`);
// console.log(`ceil value : ${num3}`);

// ---------Q3-------

// let num = -5;
// let num1 = Math.abs(num);
// console.log(`The absolute value of ${num} is ${num1}`)

// ---------Q4-------

// let num = Math.floor(Math.random() * 6) + 1
// console.log(`random dice value : ${num}`)

// ---------Q5-------

// let num = Math.floor(Math.random() * 2) + 1;
// if (num === 1) {
//   console.log(`Random coin value : Heads`);
// } else {
//   console.log(`Random coin value : Tails`);
// }

// ---------Q6-------

// let num = Math.floor(Math.random()*100)+1;
// console.log(`Random numbers between 1 and 100 : ${num}`)

// ---------Q7-------

// let secretNum = 5;
// let userInput = +prompt("Enter a number between 1 and 10 : ");
// if (userInput === secretNum) {
//   console.log("Congratulation! You guessed it right.");
// } else {
//   console.log(`Sorry! Try again!`);
// }












