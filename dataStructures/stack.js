class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek() {
    console.log(`Top element is ${JSON.stringify(this.first)}`);
    return this.first;
  }

  isEmpty() {
    console.log(this.size === 0 ? "stack is empty" : "stack is NOT empty");
    return this.size === 0; // !this.first
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.peek();
stack.pop();
stack.peek();
