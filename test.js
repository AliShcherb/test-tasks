const arr = [
    ["9",2,4],
    [5,6,7],
    [8,9,"10"]
]
let len = arr.length;
let sum=0;
while(len--)
    sum += typeof arr[len][len] === "number" ? arr[len][len] : 0;
console.log(sum);