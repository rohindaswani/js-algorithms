function sortColors(nums) {
  if (nums === null || nums.length < 2){
    return;
  }

  let countArray = [0, 0, 0];
  for(let i=0; i<nums.length; i++) {
    countArray[nums[i]]++;
  }

  let j = 0;
  let k = 0;

  while(j<=2) {
    if(countArray[j] != 0) {
      nums[k++] = j;
      countArray[j] = countArray[j] - 1;
    } else {
      j++;
    }
  }

  console.log('nums', nums);
}

sortColors([0,2,1,2,2,2,1,1,1,0]);