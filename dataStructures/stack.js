class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return undefined;
    let deletedItem = this.items[this.count - 1];
    console.log(`${deletedItem} was removed`);
    this.count -= 1;
    return deletedItem;
  }

  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  isEmpty() {
    console.log(this.count === 0 ? "stack is empty" : "stack is NOT empty");
    return this.count === 0;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
