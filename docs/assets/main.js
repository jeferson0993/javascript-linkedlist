class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }
  size() {
      let count = 0; 
      let node = this.head;
      while (node) {
          count++;
          node = node.next
      }
      return count;
  }
  clear() {
      this.head = null;
  }
  getLast() {
      let lastNode = this.head;
      if (lastNode) {
          while (lastNode.next) {
              lastNode = lastNode.next
          }
      }
      return lastNode
  }
  getFirst() {
      return this.head;
  }
  getLastMinusOne() {
      let lastNode = this.head;
      let antLastNode = this.head;
      if (lastNode) {
          while (lastNode.next) {
              antLastNode = lastNode
              lastNode = lastNode.next
          }
      }
      return antLastNode
  }
}

let list = new LinkedList()

/**
 * add current year on the footer section
 */
document.querySelector('#year').innerHTML = 
new Date().getFullYear()

/**
 * Update the view with nodes and size of list
 */
function displayLinkedList() {
  document.querySelector('#app').innerHTML = 
  `
  <section>
    <h3>LinkedList size: <mark>${list.size()}</mark></h3>
  </section>
  `
  document.querySelector('#display').innerHTML = ``;
  let displayedNode = list.getFirst();
  for (let index = 0; index < list.size(); index++) {
    document.querySelector('#display').innerHTML += 
    `<kbd>
      data: <code>${displayedNode.data}</code>, next: <code>${displayedNode.next ? displayedNode.next.data : null}</code>
    </kbd>`
    displayedNode = displayedNode.next
  }
}

/**
 * Add a node to linkedlist
 */
document.querySelector('#newNode')
.addEventListener('click', function () {  
  if (list.size() === 0 || list === null) {
    let node = new ListNode(list.size())
    list = new LinkedList(node)
  } else {
    let node = new ListNode(list.size())
    list.getLast().next = node
  }
  displayLinkedList()
}, false)

/**
 * Remove last node from linkedlist
 */
document.querySelector('#removeNode')
.addEventListener('click', function () {
  let lastMinusOneNode = list.getLastMinusOne()
  lastMinusOneNode.next = null
  displayLinkedList()
}, false)

/**
 * Remove all nodes from linkedlist
 */
document.querySelector('#clearList')
.addEventListener('click', function () {
  list.clear();
  displayLinkedList()
}, false)