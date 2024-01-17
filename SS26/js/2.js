let randomList = [1, 4, "hello", 3, "hi", 3.14, 10];

let answer = prompt("nhập vào giá trị bất kỳ");
let a = 0;
for (let i = 0; i < randomList.length; i++) {
    if (answer == randomList[i]) {
        console.log("vị trí của phần tử là " + i);
        a++;
    }
    
}
if (a == 0) {
    console.log("phần tử không tồn tại");
}
