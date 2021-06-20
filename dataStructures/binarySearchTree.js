class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) this.root = newNode;
    let current = this.root;
    while (true) {
      if ((value = current.value)) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
        return found;
      }
    }
    return false;
  }

  //   insert(value) {
  //     const newNode = new Node(value);

  //     if (!this.root) this.root = newNode;
  //     else {
  //       let current = this.root;
  //       while (true) {
  //         if ((value = current.value)) return undefined;
  //         if (value < current.value) {
  //           if (current.left === null) {
  //             current.left = newNode;
  //             return this;
  //           } else {
  //             current = current.left;
  //           }
  //         } else if (value > current.value) {
  //           if (current.right === null) {
  //             current.right = newNode;
  //             return this;
  //           } else {
  //             current = current.right;
  //           }
  //         }
  //       }
  //     }
  //   }
}

const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(11);
console.log(tree.contains(2), tree.contains(11), tree.contains(12));
