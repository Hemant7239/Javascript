// const myname = "hemant";
// const value = 50;
// console.log(`Hello my name is ${myname} and my repo count is ${value}`);

const myname=new String("Hemant");
// console.log(myname);
console.log(myname[0]);
console.log(myname.length);
console.log(myname.__proto__);      
console.log(myname.toUpperCase());  // to convert the string into uppercase
console.log(myname.toLowerCase());      // to convert the string into lowercase
console.log(myname.charAt(3));
console.log(myname.indexOf('m'));
const myna= myname.slice(-5,2);
console.log(myna);
const subject = "   maths"
console.log(subject);  
console.log(subject.trimStart());       // to remove the space between in front 
const people= "mathphysicsbiology";
console.log(people.replace("math", "hindi"));   //to replace the first value with second value
console.log(people.includes("bio"));   //to find whether the given string is present in the string
// console.log(subject.fontcolor());



