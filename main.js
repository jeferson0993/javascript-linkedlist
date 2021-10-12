import './style.css'
import ListNode from './models/node'
import LinkedList from './models/linkedlist'

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