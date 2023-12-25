function fibonacci(n) {

    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0]; 
    }

    let arr = [0, 1]; 

    for (let i = 2; i < n; i++) {
        arr.push(arr[i] + arr[i+1]); 
    }

    return arr; 
}

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]