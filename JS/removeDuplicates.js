const remove_duplicates = function(arr) {
    let left = 0;
    
    for (let right = 1; right < arr.length; right++) {
        while (arr[left] === arr[right]) {
            if (arr[left] !== arr[right + 1]) {
                arr.splice(left, right - left);
                right = left + 1;
                break;
            }
            right += 1;
        }
        left += 1;
    }
    return arr.length;
};
    
debugger;
let result = remove_duplicates([2,3,3,3,6,9,9]);
console.log(result);
