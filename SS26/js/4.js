let a = parseInt(prompt("Nhập vào số nguyên dương a:"));
let b = parseInt(prompt("Nhập vào số nguyên dương b:"));

for (var i = 1; i <= a; i++) {
    if (i % b === 0) {
        resultArray.push(i);
    }
}

for (var j = 1; j <= b; j++) {
    if (j % a === 0 && resultArray.indexOf(j) === -1) {
        resultArray.push(j);
    }
}

console.log("Mảng các số chia hết cho " + b + " trong khoảng từ 1 đến " + a + " và các số chia hết cho " + a + " trong khoảng từ 1 đến " + b + ":");
console.log(resultArray);