console.log('hello');
// alert('hello the is shabs');

// comment inline

// variables
var b =  'smoothies';
console.log(b)

var somenumber = 45;
console.log(somenumber);

// document.getElementById('sometext').innerHTML = 'hey there';

// manipulate DOM with javascript
// its just a fansy way of saying change html with javascript

// var age = prompt('whats your age');
// document.getElementById('someage').innerHTML = age;

// numbers in javascript

var num1 = 5.7;
console.log(5 * 10);

var num1 = 5.7;
console.log(50 / 5);

var num1 = 10;
num2 = num1 + 6;
console.log(num2);

// increment num1 by 1

var num1 = 13;
num1++;
console.log(num1);

// decrement num1 by 1

var num1 = 13;
num1--;
console.log(num1);

// remainder of num1

console.log(num1 % 7);

// addition of num1

console.log(num1 + 5);

// increment by 10

var num3 = 10;
num3 += 20;
console.log(num3);

// decrement by 10

var num3 = 10;
num3 -= 20;
console.log(num3);

console.log(num3 + 100);
console.log(num3 - 50);




/*  Function
 - create a function
 - call the function
*/

// create a function
function fun() {
    console.log('what are you doing there john');
}

// call the function
fun();

/* Let create a function that takes in a name that says hello followed by your name

for example

Name: shabs
Return: hello shabs

*/


// not the way to right the code

function greeting() {
    var name = prompt('What is your name?');
    var result = 'hello' + ' ' + name;
    console.log(result);
}


// greeting();


function greeting(yourname) {
    var result = 'hello' + ' ' + yourname;
    console.log(result);
}

// var name1 = prompt('what is your name?');
// greeting(name1);

/* 
 - How do arguments work i functions
 - How do we add 2 numbers together in a function
*/

function sumnumbers(num1, num2) {
    var result = (num1 + num2);
    console.log(result);
}

sumnumbers(2, 5);

// while loops


/*

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/


/*

var num = 0;

while (false) {
    num += 1;
    console.log(num);
    }

*/

// For loops

for (let num = 0; num <= 100; num++) {
    console.log(num);
}


// Data types


let yourage = 18; // number
let yourname = 'shabs'; // string
let name = {first: 'ajide', last: 'shabs'}; // object
let truth = false; // boolean
let groceries = ['apple', 'bannana', 'orange']; //array
let random; // underfined
let nothing = null; // value null


// Strings in Javascript (common methods)
let fruit = 'banana';
let morefruits = 'banana\napple';    // new line

console.log(morefruits);
console.log(fruit.length);
console.log(fruit.indexOf('an'));
console.log(fruit.slice(3,5));
console.log(fruit.replace('ban', '124'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); //split by a characters


// Array in javascript 
let fruits = ['apple', 'banana', 'orange', 'pineapple'];
fruits = new Array('apple', 'banana', 'orange', 'pineapple');

// alert(fruits[2]);
console.log(fruits[3]);

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Array common methods
console.log('to stings', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes last Array
console.log(fruits.push('blackberry'), fruits); // appends

console.log(fruits[4]);
fruits[4] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift(); // remove first element from an array
console.log(fruits);
fruits.unshift('kiwi'); // add first element from an array
console.log(fruits);

let vegetables = ['tomato', 'broccoli', 'asparagus'];
let allGroceries = fruits.concat(vegetables); // combination of two array
console.log(allGroceries);
console.log(allGroceries.slice(3,7)); 
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let somenumbers = [5, 38, 6, 32, 09, 10, 349, 57, 98, 112, 134, 60];
console.log(somenumbers.sort(function(a,b) {return a-b}));  //sorted in ascending order
console.log(somenumbers.sort(function(a,b) {return b-a}));  //sorted in decending order 

/*let emptyArray = new Array();
for (num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);*/



// objects in javascript
// dictionaries in python

let student = {
    first: 'Shabs', 
    last: 'Planta',
    age: 26,
    height: 165,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
/*
console.log(student.first);
console.log(student.last);
student.first = 'Not Shabs';
console.log(student.first);
*/
student.age++;
console.log(student.age);
console.log(student.studentInfo())


// conditionals, control flows (if else)
// 18-35 is my target demographic
// && and
// || or

var age = 45;

if ( (age >= 18) && (age <= 35) ) {
    verification = 'target demo';
    console.log(verification);
} else {
    verification = 'not my audience';
    console.log(verification);
}


// switch statements
// differentiate between weekday vs. weekend
// 0 --> sunday --> weekend
// 1 --> monday --> weekday
// 0 --> tuesday --> weekday
// 0 --> wednesday --> weekday
// 0 --> thursday --> weekday
// 0 --> friday --> weekend
// 0 --> saturday --> weekend


switch (6) {
    case 0:
        Text = 'weekend';
        break;

    case 5:
        Text = 'weekend';
        break;

    case 6:
        Text = 'weekend';
        break;

    default:
        Text = 'weekday';
}

console.log(Text);


