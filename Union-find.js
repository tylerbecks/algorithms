class quickFind {
  constructor(size) {
    this.storage = [];
    for (let i = 0; i < size; i++) {
      this.storage.push(i);
    }
  }
  
  union(p, q) {
    const pval = this.storage[p];
    const qval = this.storage[q];
    if (pval !== qval) {
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i] === qval) {
          this.storage[i] = pval;
        }
      }
    }
    return pval;
  }

  connected(p, q) {
    return this.storage[p] === this.storage[q] ? true : false;
  }
}

class quickUnion {
  constructor(size) {
    this.storage = [];
    this.sizes = [];   // to balance trees
    // this.largest = []; // to find the largest element in component
    for (let i = 0; i < size; i++) {
      this.storage.push(i);
      this.sizes.push(1);
      // this.largest.push(i);
    }
  }

  root(p) {
    while (p !== this.storage[p]) {
      this.storage[p] = this.storage[this.storage[p]]; // path compression
      p = this.storage[p];
    }
    return p;
  }

  // getLargest(component) {
  //   return this.largest[this.root(component)];
  // }

  union(p, q) {
    const rootp = this.root(p);
    const rootq = this.root(q);
    if (rootp !== rootq) {
      if (this.sizes[rootp] < this.sizes[rootq]) {
        this.storage[rootq] = rootp;
        this.sizes[rootp] += this.sizes[rootq];
        // if (this.largest[rootq] > this.largest[rootp]) {
        //   this.largest[rootp] = this.largest[rootq];
        // }
      } else {
        this.storage[rootp] = rootq;
        this.sizes[rootq] += this.sizes[rootp];
        // if (this.largest[rootp] > this.largest[rootq]) {
        //   this.largest[rootq] = this.largest[rootp];
        // }
      }
    }
  }

  connected(p, q) {
    return this.root(p) === this.root(q) ? true : false;
  }
}

const fastUnion = new quickUnion(10);
console.log('storage: ', fastUnion.storage);
console.log('sizes: ', fastUnion.sizes);
fastUnion.union(0, 4);
fastUnion.union(5, 4);
console.log('largest: ', fastUnion.largest);
console.log('largest: ', fastUnion.getLargest(0));
console.log('largest: ', fastUnion.getLargest(4));
