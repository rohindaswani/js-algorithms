
function topK(arr) {
  let frequency = {};

  arr.forEach((a) => {
    if (Object.keys(frequency).indexOf(String(a)) < 0) {
      frequency[a] = 1;
    } else {
      frequency[a] = frequency[a] + 1;
    }
  })

  let keys = Object.keys(frequency);
  keys.sort((a,b) => {
    return frequency[b] - frequency[a];
  })
  console.log('keys', keys);
}

topK([1,2,4,5,3,2,3,4,5,64,3,2,1,2,3,4,5,5]);