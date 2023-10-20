// function myname(){
//     console.log("H");
//     console.log("e");
//     console.log("m");
//     console.log("a");
//     console.log("n");
//     console.log("t");
// }
// myname();

// function findsum(num1,num2){
//     console.log(num1+num2);
// }
// findsum(5,8);

// function login(username){
//     if(!username)
//     {
//         console.log("Please enter username");
//         return
//     }
//     else{
//         return username;
//     }

// }

// let user=login();
// console.log(user);


// function calculateCartPrice(...num1)
// {
//     return num1;

// }
// console.log(calculateCartPrice(200, 400, 500, 700));

//  
function handle(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}

// handle(user);
// or
handle({
    username: "Hemant",
    price: 200
})
