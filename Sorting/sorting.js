const selectionSort = array => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

const insertionSort = array => {
  const len = array.length;
  for (let i = 1; i < len; i++) {
    for (let j = i; j >= 0 && array[j] < array[j - 1]; j--) {
      swap(array, j, j - 1);
    }
  }
  return array;
};

const shellSort = array => {
  const len = array.length;
  let h = 1;
  while (3 * h + 1 < len) {
    h = (3 * h) + 1;
  }
  while (h >= 1) {
    for (let i = h; i < len; i ++) {
      for (let j = i; array[j] < array[j - h] && j >= 0; j -= h) {
        swap(array, j, j - h);
      }
    }
    h = (h - 1) / 3;
  }
  return array;
};


function swap(array, first, second) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

let arr = [1, 4, 6, 3, 2];

console.log(shellSort(arr));
