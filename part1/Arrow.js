const user = {
    username :"Hemant",
    age: 21,
    welcomemsg: function() {
        console.log(`${this.username} , welocome to website `);
        console.log(this);
    }

}
// user.welcomemsg();
// user.username = "Yashraj";
// user.welcomemsg();
// console.log(this);

// function chai(){
//     let username = "Hemant"
//     console.log(this.username);
// }
// chai();

// ++++++++++++++++++++++++++++++++ Arrow function ++++++++++++++

const addtwo = (num1,num2) => {
    return num1+num2;
}
// ++++++++++++++++++++++ implicit return +++++++++++++
// const addtwo = (num1, num2) => (num1 + num2)
//  const addtwo = (num1,num2) =>({username:"hitesh"})        object is returned 
//console.log(addtwo(3,4));

//++++++++++++++++++++++ IIFE +++++++++++

(function chai(name){
    console.log(`Db is called  ${name}`)
})("hemant")


