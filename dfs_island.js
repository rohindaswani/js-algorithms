class Graph {
  constructor(row, col, g) {
    this.row = row;
    this.col = col;
    this.graph = g;
  }

  countIslands() {
    let visited = [];

    for (let i = 0; i < this.row; i++) {
      let v = []
      for (let j = 0; j < this.col; j++) {
        v.push(false);
      }
      visited.push(v);
    }

    let count = 0;
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {

        if (this.graph[i][j] === 1 && visited[i][j] === false) {
          this.dfs(i, j, visited);
          console.log('visited', visited)
          console.log("dfs called");
          count++;
        }
      }
    }
    return count;
  }

  dfs(i, j, visited) {
    let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

    visited[i][j] = true;
    for (let k = 0; k < 8; k++) {
      if (this.isSafe(i + rowNbr[k], j + colNbr[k], visited)) {
        this.dfs(i + rowNbr[k], j + colNbr[k], visited);
      }
    }
  }

  isSafe(i, j, visited) {
    return (i >= 0 && i < this.row && j >= 0 && j < this.col && !visited[i][j] && this.graph[i][j] === 1);
  }
}

graph = [[1, 1, 0, 0, 0],
         [0, 1, 0, 0, 1],
         [1, 0, 0, 1, 1],
         [0, 0, 0, 0, 0],
         [1, 0, 1, 0, 1]];

let row = graph.length;
let col = graph[0].length;
let g = new Graph(row, col, graph);

console.log('count islands', g.countIslands());