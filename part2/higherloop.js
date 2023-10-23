const mycode = [1, 4, 6, 7, 3, 4]

// const newarr = mycode.filter((num) =>{
//     return num>4
// })
// console.log(newarr);

const newarr = []

mycode.forEach((num) => {
    if(num > 4){
        newarr.push(num)
    }
})

console.log(newarr);