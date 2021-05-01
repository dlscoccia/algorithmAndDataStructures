#!/usr/bin/node
function insertionSort (nums) {
    for(let i = 0; i < nums.length;i++){
      for(let j = i; j < nums.length; j++){
        if (nums[j] < nums[i]){
          [[nums[i], nums[j]]] = [[nums[j], nums[i]]]
        }
      }
    }
    return(nums)
    }


    // Example array
    var nums = [10,5,3,8,2,6,4,7,9,1];
    console.log(insertionSort(nums));

    // Big(O) => O(n2)