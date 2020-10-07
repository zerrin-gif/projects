//calculate dog years
//let myAge = 3;
let myAge = prompt('what is your age?') *1;

//The first two years of a dog’s life count as 10.5 dog years each
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//later years result has been set
let laterYears = myAge - 2;
//Each year following equates to 4 dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//ages are stored
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'JOHN';
//print name in lowercase
console.log(myName.toLowerCase());
//display myname and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
alert(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
 



