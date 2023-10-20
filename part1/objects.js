// object literals
const mysum = Symbol("key1")
const Jsuser ={
    name : "Hemant",
    "full name": "kumar yadav",
    id: "20BCE11002",
    age: 21,
    add: "khalilabad",
    student: true,
    [mysum]: "Key1"

}
console.log(Jsuser.name);
//or
console.log(Jsuser["name"]);

// but

  //console.log(Jsuser.full name);
  // if in object there is space between the value than we 
  //cannot access it using "." we have to use []  bracket
 
console.log(Jsuser["full name"]);
console.log(Jsuser[mysum]);

console.log(Jsuser);