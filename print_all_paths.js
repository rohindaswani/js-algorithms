
const print = (arr, row, col, result) => {
  if (row>=arr.length || col>=arr[0].length) {
    console.log('reached the end');
    return;
  }

  if (row === arr.length-1 && col === arr[0].length-1) {
    result.push(arr[row][col]);
    console.log("path is ", result);
    return;
  }

  result.push(arr[row][col]);
  print(arr, row+1, col, result);
  print(arr, row, col+1, result);
}

let mat = [ [1, 2, 3], [4, 5, 6] ];
// print(mat, 0,0 ,[]);

const numberOfPaths = (m,n) => {
  if (m===1 || n === 1) {
    return 1;
  }
  return numberOfPaths(m,n-1) + numberOfPaths(m-1, n);
}

console.log('numberOfPaths', numberOfPaths(3,3));

const numberOfPathsRecur = (m,n) => {

  let count = [];
  for (let i=0;i<m;i++) {
    let zeros = [];
    for (let j=0;j<n;j++) {
      zeros.push(0);
    }
    count.push(zeros);
  }

  for (i=0;i<m;i++) {
    count[i][0] = 1;
  }
  for(j=0;j<n;j++) {
    count[0][j] = 1;
  }

  for(i=1;i<m;i++){
    for (j=1;j<n;j++) {
      count[i][j] = count[i-1][j] + count[i][j-1];
    }
  }
  return count[m-1][n-1];
}

console.log('numberOfPathsRecur', numberOfPathsRecur(3,7));