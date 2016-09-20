class Node {
  constructor(val) {
    this.val = val;
    this.isRed = true;
    this.left = null;
    this.right = null;
  }
}

class leftLeaningRedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      
    }
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

  rotateLeft(node, parent) {
    let newTop = node.right;
    let nodeIsRed = node.isRed;
    node.right = newTop.left;
    node.isRed = newTop.isRed;
    newTop.left = node;
    newTop.isRed = node.isRed;
    node === parent.left ? parent.left = newtop : parent.right = newTop;
  }

  rotateRight(node, parent) {
    let newTop = node.left;
    let nodeIsRed = node.isRed;
    node.left = newTop.right;
    newTop.right = null;
    node.isRed = newTop.isred;
    newTop.isRed = nodeIsRed;
    node === parent.left ? parent.left = newtop : parent.right = newTop;
  }

  swapColors(node) {
    node.isRed = !node.isRed;
    node.left.isRed = !node.left.isRed;
    node.right.isRed = !node.right.isRed;
  }
}
