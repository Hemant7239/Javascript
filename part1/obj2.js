// const tinderUser = {}   // non singleton object 

// tinderUser.id="123abc";
// tinderUser.name="Hemant";
// tinderUser.islog= false;

// console.log(tinderUser);

// const regularUser ={
//     email: "someone@gmail",
//     fullname: {
//         username: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 ={obj1,obj2};
// console.log(obj3);

// const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);

// const obj5 = {...obj1, ...obj2};
// console.log(obj5);

// const user = [
//     {
//         id:2,
//         name: "hky"
//     },
//     {
//         id:6,
//         name: "ram"
//     }
// ]


// console.log(user[1].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//  Object destructuring

const course ={
    coursename: "Javascript",
    mentor: "Hemant",
    courseprice : "free"
}

console.log(course.mentor);

const {mentor} = course;
console.log(mentor); 