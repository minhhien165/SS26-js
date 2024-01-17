let arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

let targetNumber = parseInt(prompt("Nhập vào một số nguyên để đếm số lần xuất hiện trong mảng:"));

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetNumber) {
        count++;
    }
}

if (count > 0) {
    console.log("Số " + targetNumber + " xuất hiện " + count + " lần trong mảng.");
} else {
    console.log("Số " + targetNumber + " không xuất hiện trong mảng.");
}