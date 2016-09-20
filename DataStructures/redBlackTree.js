class Node {
  constructor(val) {
    this.val = val;
    this.isRed = true;
    this.left = null;
    this.right = null;
  }
}

class LeftLeaningRedBlackTree {
  constructor() {
    this.root = null;
  }

  put(val, node = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      this.root.isRed = false;
      node = this.root;
    } else if (node === null) {
      return new Node(val);
    } else if (val < node.val) {
      node.left = this.put(val, node.left);
    } else {
      node.right = this.put(val, node.right);
    }

    node = this.balanceCheck(node);
    return node;
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

  balanceCheck(node) {
    if (node.left && node.left.left && node.left.isRed && node.left.left.isRed) { node = this.rotateRight(node); }
    if (node.left && node.right && node.left.isRed && node.right.isRed) { this.swapColors(node); }
    if (node.right && node.right.isRed) { node = this.rotateLeft(node); }
    return node;
  }

  rotateLeft(node) {
    console.log(`left rotating ${node.val}, isRed: ${node.isRed}`);
    let newTop = node.right;
    let nodeIsRed = node.isRed;
    node.right = newTop.left;
    node.isRed = newTop.isRed;
    newTop.left = node;
    newTop.isRed = nodeIsRed;
    if (node === this.root) { this.root = newTop; }
    return newTop;
  }

  rotateRight(node) {
    console.log(`right rotating ${node.val}, isRed: ${node.isRed}`);
    let newTop = node.left;
    let nodeIsRed = node.isRed;
    node.left = newTop.right;
    node.isRed = newTop.isred;
    newTop.right = node;
    newTop.isRed = nodeIsRed;
    if (node === this.root) { this.root = newTop; }
    return newTop;
  }

  swapColors(node) {
    console.log(`swapping colors on ${node.val}`);
    if (node !== this.root) { node.isRed = !node.isRed; }
    node.left.isRed = !node.left.isRed;
    node.right.isRed = !node.right.isRed;
  }

  breadthFirst(callback) {
    let queue = [this.root];
    while (queue.length > 0) {
      if (queue[0].left) { queue.push(queue[0].left); }
      if (queue[0].right) { queue.push(queue[0].right); }
      callback(queue.shift());
    }
  }
}

// error with the isRed property on 6 disapearing
const tree = new LeftLeaningRedBlackTree();
tree.put(5);
tree.put(7);
tree.put(10);
tree.put(6);
tree.put(4);
tree.breadthFirst(item => console.log(item.val, item.isRed));
console.log(JSON.stringify(tree));
