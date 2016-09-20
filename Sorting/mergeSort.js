const merge = (left, right) => {
  let sorted = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else if (right[j] < left[i]) {
      sorted.push(right[j]);
      j++;
    } else {
      // if they are equal, arbitrarily push left
      sorted.push(left[i]);
      i++;
    }
  }
  while (i < left.length) {
    sorted.push(left[i]);
    i++;
  }
  while (j < right.length) {
    sorted.push(right[j]);
    j++;
  }
  return sorted;
};

const recursiveMergeSort = array => {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  left = recursiveMergeSort(left);
  right = recursiveMergeSort(right);

  return merge(left, right);
};

const iterativeMergeSort = array => {
  let pseudoSorted = [];
  for (let size = 1; size < array.length; size += size) {
    for (let i = 0; i < array.length; i += size + size) {
      let left = array.slice(i, i + size);
      let right = array.slice(i + size, i + size + size);
      pseudoSorted = pseudoSorted.concat(merge(left, right));
    }
    array = pseudoSorted;
    pseudoSorted = [];
  }

  return array;
};

let array = [4, 1, 7, 6, 2, 1, 432];
console.log(iterativeMergeSort(array));
