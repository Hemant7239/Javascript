// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     if(i === 5)
//     {
//         break;
//     }
    
// }

// let tal = 0;
// while(tal<4)
// {
//     console.log(tal);
//     tal++;
// }
// let t =0;
// do {
//     console.log(t);
//     t++;
// } while (t<5);

// let arr = [1, 2, 5, 6, 8]
// for (const num of arr) {
//     console.log(`Each ${num}`);
// }
// for (const iterator of object) {
    
// }

// +++++++++++++++++++++++++map+       ++++++++++++++

const map = new Map()
map.set('IN', "India")
map.set('USA' , "America")
map.set('AUS', "Australia")
console.log(map);
for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key ," :- ", value);
}