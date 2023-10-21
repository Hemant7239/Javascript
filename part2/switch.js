const month = 3;
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;

    default:
        break;
}

// Nullish Coalescing operator (??): null undefined
let val;
// val = 5 ?? 10;

val= 5 ?? 50 ?? 98
console.log(val);


// ternary operator

const price =100;
price >=80 ? console.log("greater than 80"): console.log("less than 80");
