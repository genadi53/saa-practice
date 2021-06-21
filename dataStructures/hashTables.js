class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i]; // [i][1]
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0]))
            keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}

const myTable = new HashTable();
myTable.set("red", "255,0,0");
myTable.set("green", "0,255,0");
myTable.set("blue", "0,0,255");
myTable.set("black", "0,0,0");
myTable.set("white", "255,255,255");
console.log(myTable.keys());
console.log(myTable.values());
