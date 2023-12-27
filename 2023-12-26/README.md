# Linear Search

Linear search is to search array from the beginning to the end one by one. It searches based on the amount of array elements. It has time complexity of O(n)


Example: 
```
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); 
```
