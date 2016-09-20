class redBlackTree {
  constructor() {
    this.root = null;
  }

  insert(val) {

  }

  search(val) {
    let current = this.root;
    while (true) {
      if (current.val === val || current === null) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else {
        curent = current.right;
      }
    }
  }

  rotateLeft(node) {

  }

  rotateRight(node) {

  }

  swapColors(node) {

  }
}
