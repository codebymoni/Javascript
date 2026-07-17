const prompt=require("prompt-sync")();
let name=prompt("enter your name:");
console.log("hello,"+name);

let a=Number(prompt("enter first number:"));
let b=Number(prompt("enter second number:"));
console.log("sum=",a+b);

let birthYear=Number(prompt("enter your birth year:"));
let age=2026-birthYear;
console.log("your age is:",age);
