class Stacknode {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedStack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(val) {
      const newNode = new Stacknode(val, this.top);
      this.top = newNode;
      this.size++;
    }
  
    Pop() {
      if (this.top) {
        this.top = this.top.next;
        this.size--;
      }
    }
    peak(){
        console.log();
    }
  
    PrintStack() {
      let temp = this.top;
      while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
  
  const ls = new LinkedStack();
  ls.push(11);
  ls.push(12);
  ls.push(13);
  ls.push(14);
  ls.push(15);
  ls.push(16);
  ls.PrintStack();
  