
class Node
{
  constructor(elem)
  {
    this.elem = elem;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  insert(elem) {
    let node = new Node(elem);

    if (this.head === null) {
      node.next = this.head;
      this.head = node;
    } else if (this.head.elem >= node.elem) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null && current.next.elem < node.elem) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
    return node;
  }

  find(elem) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    while (current.next !== null && current.next.elem < elem) {
      current = current.next;
    }

    if (current.next !== null && current.next.elem === elem) {
      return current.next;
    } else {
      return null;
    }
  }

  remove(elem) {
    if (this.head === null) {
      return null;
    } else if (this.head.elem === elem) {
      this.head = this.head.next;
      return this.head;
    } else {
      let current = this.head;
      while (current.next !== null && current.next.elem < elem) {
        current = current.next;
      }
      if (current.next !== null && current.next.elem === elem) {
        let node = current.next;
        current.next = current.next.next;
        return node;
      } else {
        return undefined;
      }
    }
  }

  insert_p(elem) {
    if (this.head === null) {
      return null;
    } else if (this.head.elem > elem) {
      return this.head;
    } else {
      let current = this.head;
      console.log("current.next.elem", current.next.elem);
      while (current.next !== null && current.next.elem < elem) {
        current = current.next;
      }

      console.log("current", current);
      if (current.next !== null) {
        return current;
      } else {
        return current;
      }
    }
  }

  print() {
    let h = this.head;
    let a = []
    while (h!== null) {
      a.push(h.elem);
      h = h.next;
    }
    console.log(a.join(' '));
  }
}

let l = new LL();
l.insert(1);
l.insert(6);
l.insert(0);
l.insert(5);
l.insert(8);
l.insert(3);
l.insert(10);
l.insert(3);
l.print();
// console.log('find 5', l.find(5).elem);
// console.log('find 1', l.find(1).elem);
// console.log('find 8', l.find(8).elem);
// console.log('find 10', l.find(10).elem);
// console.log('find 14', l.find(14));
// console.log('find 7', l.find(7));
console.log('insert_p 9', l.insert_p(9));
l.print();
console.log('insert_p 4', l.insert_p(4));
console.log('insert_p 11', l.insert_p(11));
console.log('insert_p 2', l.insert_p(2));
console.log('insert_p -1', l.insert_p(-1));
