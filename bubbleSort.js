#!/usr/bin/node
function bubbleSort (nums) {
    let swap = true;
    while (swap){
      let counter = 0;
      for (let i=0; i< nums.length-1;i++){
        if (nums[i] > nums[i+1]){
          [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
          counter++
        }
      }
      if (counter === 0){
        swap = false;
      }
    }
    return nums
  }

var nums = [10,5,3,8,2,6,4,7,9,1];
console.log(bubbleSort(nums));