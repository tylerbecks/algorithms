const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

class binaryHeap {
  constructor(array) {
    this.arr = array;
    let first = this.parent(this.arr.length - 1);
    for (let i = first; i >= 0; i--) {
      this.sink(i);
    }
  }

  insert(val) {
    this.arr.push(val);
    this.swim(this.arr.length - 1);
  }

  removeHead() {
    swap(this.arr, 0, this.arr.length - 1);
    let oldHead = this.arr.pop();
    this.sink(0);
    return oldHead;
  }

  sink(i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    while (this.arr[i] < this.arr[left] || this.arr[i] < this.arr[right]) {
      if (left < this.arr.length && this.arr[left] > this.arr[right]) {
        swap(this.arr, i, left);
        i = left;
        left = 2 * i + 1;
        right = 2 * i + 2;
      } else if (right < this.arr.length && this.arr[left] < this.arr[right]) {
        swap(this.arr, i, right);
        i = right;
        left = 2 * i + 1;
        right = 2 * i + 2;
      } else {
        swap(this.arr, i, left);
        i = left;
        left = 2 * i + 1;
        right = 2 * i + 2;
      }
    }
  }

  swim(i) {
    let parenti = this.parent(i);
    while (this.arr[i] > this.arr[parenti]) {
      swap(this.arr, i, parenti);
      i = parenti;
      parenti = this.parent(i);
    }
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

}

const heapSort = array => {
  const heap = new binaryHeap(array);
  const results = [];
  while (heap.arr.length > 0) {
    results.push(heap.removeHead());
  }

  return results;
};

const arr = [3, 60, 50, 90, 9, 10, 11];
console.log(heapSort(arr));