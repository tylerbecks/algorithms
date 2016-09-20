class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
  }

  insert(val) {
    let node = new Node(val);
    let x = this.root;
    if (x === null) {
      this.root = node;
    } else {
      while (x.val !== null) {
        if (val > x.val) {
          if (x.right === null) {
            x.right = node;
            return node;
          } else {
            x = x.right;
          }
        } else if (val < x.val) {
          if (x.left === null) {
            x.left = node;
            return node;
          } else {
            x = x.left;
          }
        } else {
          // return null if the value already exists
          return null;
        }
      }
    }
  }

  find(val) {
    let x = this.root;
    while (true) {
      if (x.val === val || x === null) {
        return x;
      } else if (val < x.val) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
  }

  // needs fixing
  delete(val) {
    let x = this.root;
    let parent;
    if (x.val === null) {
      return null;
    } else if (x.val === val) {
      let temp = this.root;
      this.root = null;
      return temp;
    } else {
      while (x.val !== null) {
        if (val === x.val) {
          if (x === parent.right) {
            if (x.right === null) {
              parent.right = x.left;
              return x;
            } else {
              let replacement = x.right;
              replacement = this.getParentOfMin(replacement);
              if (replacement === x.right) {
                parent.right = replacement;
                return x;
              } else {
                let temp = replacement.left;
                replacement.left = null;
                parent.right = replacement;
                return x;
              }
            }
          } else {
            if (x.right === null) {
              parent.left = x.left;
              return x;
            } else {
              let replacement = x.right;
              replacement = this.getParentOfMin(replacement);
              if (replacement === x.right) {
                parent.left = replacement;
                return x;
              } else {
                let temp = replacement.left;
                replacement.left = null;
                parent.left = replacement;
                return x;
              }
            }
          }
        } else if (val < x.val) {
          parent = x;
          x = x.left;
        } else {
          parent = x;
          x = x.right;
        }
      }

      return null;
    }
  }

  max(node) {
    let x = node;
    while (x.right !== null) {
      x = x.right;
    }
    return x;
  }

  getParentOfMin(node) {
    let x = node;
    let parent = node;
    while (x.left !== null) {
      parent = x;
      x = x.left;
    }
    return parent;
  }

  inOrder(callback, node = this.root) {
    if (node.left !== null) {
      this.inOrder(callback, node.left);
    }
    callback(node);
    if (node.right !== null) {
      this.inOrder(callback, node.right);
    }
  }
}

const bst = new BinarySearchTree(5);
bst.insert(8);
bst.insert(3);
bst.insert(4);
bst.insert(6);
bst.insert(1);
bst.insert(2);
bst.insert(7);
bst.insert(9);

bst.inOrder(function(node) {
  console.log(node.val);
});

const isBST = tree => {
  let result = true;
  if (tree.left !== null) {
    if (tree.left.val > tree.val) {
      return false;
    } else {
      result = isBST(tree.left);
    }
  }

  if (tree.right !== null) {
    if (tree.right.val < tree.val) {
      return false;
    } else {
      result = isBST(tree.right);
    }
  }

  return result;
};

console.log(isBST(bst.root));

const tree = new Node(6);
tree.left = new Node(8);
console.log(isBST(tree));

