// Problem - Give an integer 'n', find the factorial of that integer

function factorial(n) {
    let result = 1; 

    for (let i = n; i > 0; --i) {
        result *= i;      
    }

    return result; 
}

console.log(factorial(4));
console.log(factorial(5)); 
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120 

