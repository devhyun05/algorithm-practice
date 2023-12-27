# Linear Search

Linear search is to search an array from the beginning to the end one by one. It searches based on the amount of array elements. It has time complexity of O(n)
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

# Binary Search 

Binary search can work only with sorted array. It uses two pointer methods and start from the middle of the array. If the target number is greater than
the first search, it moves the left pointer + 1 from the middle. If the target number is less than the first search, it moves the right pointer - 1 
from the middle. 
```
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1; 

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2); 

        if (target === arr[middleIndex]) {
            return middleIndex; 
        } 

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1; 
        } else {
            leftIndex = middleIndex + 1; 
        }
    }

    return -1; 
}
```

# Recursive Binary Search

Recursive binary search defines another function and do the recursion, it also have time complexity of O(logn)
```
function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1; 
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2); 

    if (target === arr[middleIndex]) {
        return middleIndex 
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1); 
    } else {
        return search(arr, target, middleIndex + 1, rightIndex); 
    }
}

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 10)); // 4
console.log(recursiveBinarySearch([-5,2,4,6,10], 6)); // 3
console.log(recursiveBinarySearch([-5,2,4,6,10], 20)); // -1
```


