let randomList = [1, 4, "hello", 3, "hi", 3.14, 10];
let a = 0;
for (let i = 0; i < randomList.length; i++) {
    if (Number.isInteger(randomList[i])) {
        console.log(randomList[i]);
        a++;
    }
}
if (a == 0) {
    console.log("Trong mảng không tồn tại số nguyên");
}