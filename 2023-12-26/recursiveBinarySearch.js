// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array
// Return -1 if the target element is not found 

function search(arr, target, leftIndex, rightIndex) {
   if (leftIndex > rightIndex) { 
        return -1; 
   }

   let middleIndex = Math.floor((leftIndex + rightIndex) / 2); 

   if (arr[middleIndex] === target) {
        return middleIndex; 
   }

   if (arr[middleIndex] > target) {
        return search(arr, target, leftIndex, middleIndex - 1); 
   } else {
        return search(arr, target, middleIndex + 1, rightIndex); 
   }
}

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 10)); // 4
console.log(recursiveBinarySearch([-5,2,4,6,10], -7)); // 3
console.log(recursiveBinarySearch([-5,2,4,6,10], 20)); // -1 