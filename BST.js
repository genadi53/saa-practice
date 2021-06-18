class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value < this.data) {
      if (this.left === null) this.left = new Node(value);
      else this.left.insert(value);
    } else if (value > this.data) {
      if (this.right === null) this.right = new Node(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.data) {
      return true;
    }

    if (value < this.data) {
      if (this.left === null) return false;
      else return this.left.contains(value);
    } else {
      if (this.right === null) return false;
      else return this.right.contains(value);
    }
  }

  printInOrder() {
    if (this.left !== null) {
      this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right !== null) {
      this.right.printInOrder();
    }
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addData(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.insert(value);
    }
  }

  search(val) {
    const foundVal = this.root.contains(val);
    console.log(val + " -> " + foundVal);
    return foundVal;
  }

  traverse() {
    this.root.printInOrder();
  }
}

const tree = new BST();
for (let i = 0; i < 10; i++) {
  tree.addData(Math.floor(Math.random() * 10));
}

tree.traverse();
console.log(tree);
tree.search(2);
tree.search(4);
