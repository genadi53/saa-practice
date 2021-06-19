class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return this.head;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(data);
      return this.head;
    }
  }

  prepend(data) {
    let newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
    return this.head;
  }

  delete(dataToDelete) {
    if (this.head === null) return;
    if (this.head.data === dataToDelete) {
      this.head = this.head.next;
      return this.head;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === dataToDelete) {
        current.next = current.next.next;
        return;
      }
    }
  }
}

let list = new LinkedList();
for (let i = 0; i < 5; i++) {
  let node = new Node(i * 5);
  console.log(node);
  console.log(list);
  console.log("**********");
  list.append(node);
}

console.log(list);
