class Percolation {
  constructor(n) {
    this.dimension = n;
    this.board = [];
    let row = new Array(n);
    row.fill(0);
    for (var i = 0; i < n; i++) {
      this.board.push(row);
    }

    this.unionJoin = [];
    this.sizes = [];
    for (var y = 0; y < (n * n + 2); y++) {
      // pushes every element in board, plus two virtual nodes on top and bottom
      this.unionJoin.push(y);
      this.sizes.push(1);
    }
  }

  root(index) {
    while (index !== this.unionJoin[index]) {
      if (this.unionJoin[index] === 0) {
        return 0;
      } else {
        index = this.unionJoin[index];      
      }
    }
    return this.unionJoin[index];
  }

  union(x1, y1, x2, y2) {
    const index1 = y1 * this.dimension + x1 + 1;
    const index2 = y2 * this.dimension + x2 + 1;
    const root1 = this.root(this.unionJoin[index1]);
    const root2 = this.root(this.unionJoin[index2]);
    if (root1 !== root2) {
      if (this.sizes[root1] > this.sizes[root2]) {
        this.unionJoin[root2] = this.unionJoin[root1];
        this.sizes[root1] += this.sizes[root2];
      } else {
        this.unionJoin[root1] = this.unionJoin[root2];
        this.sizes[root2] += this.sizes[root1];
      }
    }
  }

  open(x, y) {
    if (!this.isOpen(x, y)) {
      this.board[y][x] = 1;
      if (y === 0) {
        this.union(x, y, -1, -1);
        this.union(x, y, x, y + 1);
        this.union(x, y, x + 1, y);
        this.union(x, y, x - 1, y);
      } else if (y === this.dimension - 1) {
        this.union(x, y, -1, -1);
        this.union(x, y, x, y + 1);
        this.union(x, y, x + 1, y);
        this.union(x, y, x - 1, y);
      }
    }
  }

  isOpen(x, y) {
    this.board[y][x] === 1 ? true : false;
  }

  isFull(x, y) {

  }

}


const perc = new Percolation(4);
console.log('board: ', perc.board);
console.log('unionJoin: ', perc.unionJoin);
console.log('sizes: ', perc.sizes);
perc.union(0, 0, 1, 0);
console.log('(0, 1): ', perc.root(1, 0));
console.log('(0, 0): ', perc.root(0, 0));
console.log('board: ', perc.board);
console.log('unionJoin: ', perc.unionJoin);
console.log('sizes: ', perc.sizes);
