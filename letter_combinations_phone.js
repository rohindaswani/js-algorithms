const NUMBER_TO_STRING = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
}

const combinations = (number, currDigit, output, n) => {

  if (currDigit == n) {
    console.log('output', output.join());
    return;
  }

  for (let i =0; i<NUMBER_TO_STRING[number[currDigit]].length; i++) {
    output[currDigit] = NUMBER_TO_STRING[number[currDigit]][i];
    combinations(number, currDigit + 1, output, n);
    if (number[currDigit] === 0 || number[currDigit] === 1)
      return;
  }
}

console.log("combinations", combinations([2,3,4,], 0, [], 3));