
function search(matrix, n, x) {

  let j = n-1;
  let i = 0;

  while (i<n && j>=0) {
    if (matrix[i][j] === x) {
      console.log('found');
      return true;
    }
    if (x < matrix[i][j]) {
      j--;
    } else {
      i++;
    }
  }

  console.log('element not found');
  return false;
}

let mat = [ [10, 20, 30, 40],
[15, 25, 35, 45],
[27, 29, 37, 48],
[32, 33, 39, 50],
  ]

search(mat, 4, 1111);

