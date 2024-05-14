// debugger
// console.log(a);
// var a = 1;
// let abc = "          hi         helklo         i       ";
// let b = "sd";

// const randomNum = Math.floor(Math.random() * (20 - 10) + 10) + 1;
// console.log(randomNum);

// const userName = prompt("Please enter user name") || "procoder";
// const userAge = parseInt(prompt("Please enter user age")) || 22;

// if (userAge >= 25 && userAge <= 45) {
//   console.log(`user ${userName} with age ${userAge} is a working professional`);
// }
// console.log(`user ${userName} with age ${userAge} `);

// const dayNumber = 0;

// switch (dayNumber) {
//   case 0: {
//     console.log("today is sunday");
//     break;
//   }
//   case 1: {
//     console.log("today is monday");
//     break;
//   }
//   case 2: {
//     console.log("today is tuesday");
//     break;
//   }
//   case 3: {
//     console.log("today is wednesday");
//     break;
//   }
//   case 4: {
//     console.log("today is thursday");
//     break;
//   }
//   case 5: {
//     console.log("today is friday");
//     break;
//   }
//   case 6: {
//     console.log("today is saturday");
//     break;
//   }
//   default:{
//     console.log('enter a valid day number')
//   }
// }

// const name = "arya";
// const age = 25;
// const isGraduate = true;

// const objArya={}

// const fruits1 = ["apple", "banana", "chikku", "dates"];
// const fruits2 = [];

// Object.assign(fruits2,fruits1)

// const tictactoe = [
//   [
//     ["x", null, null],
//     [null, null, "x"],
//     ["o", null, "x"],
//   ]
// ];
// const tictactoe = [
//   [
//     ["x", "o", "x"],
//     ["x", "x", "x"],
//     ["o", "x", "x"],
//   ],
//   [
//     ["x", "o", "x"],
//     ["x", "x", "x"],
//     ["o", "x", "x"],
//   ],
//   [
//     ["x", "o", "x"],
//     ["x", "x", "x"],
//     ["o", "x", "x"],
//   ],
// ];

// const name='arya';
// let num=9;

// const fruits1 = ["apple", "banana", "chikku", "dates"];

// let i=0
// while(i<fruits1.length){
// console.log(`${i+1}.${fruits1[i]}`)
// i++
// }

// for (let i = 0; i < fruits1.length; i++) {
//   console.log(fruits1[i]);
//   fruits1[i] += " tasty";
// }
// for (let i = 0; i <= 100; i++) {
//   !(i % 2) ? console.log(i) : null;
// }

// function demo(usename, age) {
//   console.log(`my name is ${usename}`);
//   console.log(`i am ${age} years old`);
// }
// demo("arya", 25);

// debugger
// function add(a,b){
//     console.log('hii')
// return a+b
// }
// function sum(a,b){
//     console.log('hii')
// return a+b
// }

// console.log(sum(1,2))

// debugger
// let a;
// console.log(a)

// setTimeout(()=>a('sd'),5000)
// function a(str){
//     console.log(`say hi ${str}`)
// }

// debugger
// function outer() {
//   const a = 10;
//   function parent() {
//     const b = 10;
//     function add() {
//       return a + b;
//     }
//     return add();
//   }
//   return parent();
// }

// const add1 = outer();

// const maths = {
//   pi: 3.142,
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   square: function (a) {
//     return a ** 2;
//   },
//   cube(n) {
//     return n ** 3;
//   },
// };

// const add = (a, b) => a + b;
// const random =()=>Math.random()

// let obj={
//     name:'arya',
//     age:25
// }

// for(const i of obj){
// console.log(obj[i])
// }

// const fruits = ["apple", "banana", "chikku", "mango"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// const months = ["january", "febrauary", "march", "april", "may"];
// const filterMonths = months.filter((month) => {
//   return month.length >= 5;
// });
// console.log(filterMonths)

// const months = ["january", "febrauary", "March", "april", "may"];
// const filterMonths = months.filter((month) => {
//   return month.includes("m") || month.includes("M");
// });
// console.log(filterMonths);

// const students = [
//   { name: "arya", age: 25 },
//   { name: "ayan", age: 15 },
//   { name: "abi", age: 16 },
//   { name: "akash", age: 18 },
//   { name: "arjun", age: 22 },
// ];

// const adultStudents = students
//   .filter((student) => {
//     return student.age >= 18;
//   })
//   .map((student) => {
//     return student.age;
//   });
// console.log(adultStudents);

// const arr = [0, 2, 4, 6, 8];
// const res = arr.some((num) => {
//   debugger;
//   return num > 4;
// });
// console.log(res);

// const arr = [0, 2, 3, 4, 6, 8];
// const res = arr.some((num, i) => {
//   // debugger;
//   return num % 2 === 1 ;
// });
// console.log(res);

// const a = [2, 3, 5, 7, 9];

// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// function add() {
//  const arr=Object.entries(arguments)
//  return arr.map((a)=>{
//   return a[1]
//  }).reduce((a,c)=>{
//   return a+c
//  })
// }

// function rollADie(sides) {
//   // if (!!sides === false) {
//   //   sides = 6;
//   // }
//   return Math.floor(Math.random() * sides) + 1;
// }
// function rollADie(sides) {
//   if (sides === undefined) {
//     sides = 6;
//   }
//   return Math.floor(Math.random() * sides) + 1;
// }

// function add(a=[1,1]) {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// }
// console.log(add(a))

// const a = [2, 3, 5, 7, 9];

// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// function add(a=[1,1]) {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// }
// console.log(add(a))

// function add(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }
// console.log(add(1, 2, 4, 5, 6));

// function add(...nums) {
//   return nums.reduce((a, c) => {
//     return a + c;
//   });
// }


const user={
  name:'arya',
  age:25,
  address:{
    city:'bangalore',
    state:'karnataka'
  }
}
const {address:{city}}=user