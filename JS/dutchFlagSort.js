
// O(n ^ 2) time O(1) space three pointer
// potentially one long pass to get the starter values placed
// example [2,2,2,1,1,1,0,0,0]
// 2 placed first, 1, placed next have to iterate to the
// 4th position and 0 placed last iterating to the 7th

var dutch_flag_sort = function(arr) {
    let nextOne = -1,
    nextZero = -1,
    nextTwo = -1;
    let i = 0;

    // find the first instances of each value
    while (nextOne === -1 || nextTwo === -1 || nextZero === -1 && i < arr.length) {
        if (arr[i] === 0 && nextZero === -1) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            nextZero = 1;
            i = 1;
            continue;
        } else if (arr[i] === 1 && nextOne === -1) {
            [arr[1], arr[i]] = [arr[i], arr[1]];5
            nextOne = 2;
            i = 2;
            continue;
        } else if (arr[i] === 2 && nextTwo === -1) {
            [arr[2], arr[i]] = [arr[i], arr[2]];
            nextTwo = 3;
            i = 3;
            continue;
        }
        i += 1;
    }


    // sort the array in order starting from the first non sorted value
    for (let i = 3; i < arr.length; i++) {
        let currentValue = arr[i];
        if (currentValue === 1) {
            [arr[i], arr[nextTwo], arr[nextOne]] = [arr[nextTwo], arr[nextOne], currentValue];
            nextOne++;
            nextTwo++;
        } else if (currentValue === 2) {
            [arr[nextTwo], arr[i]] = [arr[i], arr[nextTwo]];
            nextTwo++;
        } else {
           [arr[i], arr[nextTwo], arr[nextOne], arr[nextZero]] = [arr[nextTwo], arr[nextOne], arr[nextZero], currentValue];
            nextOne++;
            nextTwo++;
            nextZero++;
      }
    }
    return arr;
};

console.log(dutch_flag_sort([1, 0, 2, 1, 0]));
console.log(dutch_flag_sort([2, 2, 0, 1, 2, 0]));


// O(n) time O(1)

dutch_flag_sort = (arr) => {
    let low = 0,
        high = arr.length - 1;
        
    // use the high low pointers to traverse towards the center of the array
    // sort all 0s to the beginning and all twos to the end leaving the 
    // ones in the center
    for (let i = 0; i <= high; i++) {
        let currentValue = arr[i];
        if (currentValue === 1) {
            continue;
        }

        if (currentValue === 0 ) {
            [arr[low], arr[i]] = [arr[i], arr[low]];
            low += 1;
         } else if (currentValue === 2) {
             [arr[i], arr[high]] = [arr[high], arr[i]];
             high -= 1;
             i -= 1;
        }
    }
    return arr;
};
console.log(dutch_flag_sort([1, 0, 2, 1, 0]));
debugger;
console.log(dutch_flag_sort([2, 2, 0, 1, 2, 0]));
