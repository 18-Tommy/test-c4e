// Bài 1
// let array1 = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
// let eleLength = 0;
// let longest = "";
// let result1 = [];
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i].length > eleLength) {
//         eleLength = array1[i].length;
//         longest = array1[i];
//     }
// }
// for (let a = 0; a < array1.length; a++) {
//     if (array1[a].length == longest.length) {
//         result1.push(array1[a]);
//     }
// }
// console.log(result1);

// Bài 2
// let arrayInput = [60, 40, 55, 75, 64]
// let result2 = [];
// let sum1 = 0;
// let sum2 = 0;
// for (let n = 0; n < arrayInput.length; n+=2) {
//         sum1 += arrayInput[n];
// }
// console.log(sum1);
// for (let m = 1; m < arrayInput.length; m+=2) {
//     sum2 += arrayInput[m];
// }
// console.log(sum2);
// result2.push(sum1);
// result2.push(sum2);
// console.log(result2);


// Bài 3
const randomBtn = document.querySelector("#random")
const background = document.querySelector("body")
const p = document.querySelector("p")
randomBtn.addEventListener("click", function() {
    let text = "#";
    let character = "ABCDEF0123456789";
    for (let i = 0; i < 6; i++) 
        text += character.charAt(Math.floor(Math.random() * character.length));
    console.log(text);
    background.style.background = `${text}`;
    p.innerHTML = `${text}`;
    const copyBtn = document.createElement("button");
    p.appendChild(copyBtn);
    copyBtn.innerHTML = "Copy"
    copyBtn.addEventListener("click", function() {
        p.select();
        navigator.clipboard.writeText(p);
    })
});