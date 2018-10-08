const count = (s, m, n) => {
  let table = [];

  for(let i = 0; i<n+1;i++) {
    table.push(0);
  }

  table[0] = 1;

  for(i=0;i<m;i++) {
    for(j=s[i];j<n+1;j++) {
      table[j] += table[j-s[i]];
    }
  }

  return table;
}

console.log('count', count([1, 2, 3], 3, 4));