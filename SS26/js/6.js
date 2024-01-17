let arr = [3, -1, 2, -7, 5, 0, -4, 8, -6];

arr.sort(function(a, b) {
    return a < 0 ? -1 : 1;
});

console.log("Mảng sau khi di chuyển các phần tử âm lên đầu và phần tử dương về cuối:");
console.log(arr);