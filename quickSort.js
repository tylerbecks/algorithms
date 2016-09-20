const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const shuffle = array => {
  for (let i = 1; i < array.length; i++) {
    let randIndex = Math.floor(Math.random() * i);
    if (i !== randIndex) {
      swap(array, i, randIndex);
    }
  }

  return array;
};

const partition = array => {
  let item = array[0];
  let i = 1;
  let j = array.length - 1;
  while (true) {
    while (array[i] < item) i++;
    while (array[j] > item) j--;
    if (i >= j) {
      break;
    }
    swap(array, i, j);
  }
  swap(array, 0, j);
  return j;
};

const sort = array => {
  if (array.length < 2) return array;
  let j = partition(array);
  let firstHalf = sort(array.slice(0, j));
  let secondHalf = sort(array.slice(j + 1));
  firstHalf.push(array[j]);
  return firstHalf.concat(secondHalf);
};

const quickSort = array => {
  shuffle(array);
  return sort(array);
};

// needs refactoring
const select = (array, n, low, hi) => {
  if (array.length < 2) return 0;
  let j = partition(array);
  if (j === n) {
    return array[j];
  } else if (n < j) {
    return select(array, n, 0, hi - 1);
  } else {
    return select(array.slice(j + 1));
  }
};

const quickSelect = (array, n) => {
  shuffle(array);
  return select(array, n);
};


const partitionDuplicates = (array, lo, hi) => {
  let partition = lo;
  lo++;
  while (true) {
    if (array[lo] < array[partition]) {
      swap(array, lo, partition);
      partition = lo;
      lo++;
    } else if (array[lo] > array[partition]) {
      swap(array, lo, hi);
      hi--;
    } else {
      lo++;
    }

    if (lo >= hi) {
      break;
    }
  }
  return partition;
};

const sortDuplicates = (array, lo, hi) => {
  if (hi <= lo) return array;
  let partition = partitionDuplicates(array, lo, hi);
  sortDuplicates(array, lo, partition - 1);
  sortDuplicates(array, partition + 1, hi);
  return array;
};

const quickSortDuplicates = array => {
  shuffle(array);
  return sortDuplicates(array, 0, array.length - 1);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(quickSortDuplicates(arr));
