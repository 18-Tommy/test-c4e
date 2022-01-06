let array1 = ["BINH", "HUNG", "PHUOC",];
let result1 = [];
for (let index = 0; index < array1.length; index++) {
    if (array1[i].length > array1[i+1].length) {
        let temp = array1[i+1];
        array1[i] = array1[i+1];
        array1[i+1] = temp;
    }
}
console.log(array1);