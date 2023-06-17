# Linked List

### Problem Domain :
A linked list is a data structure consisting of a sequence of nodes. Each node contains data and a reference (or link) to the next node in the sequence. The linked list starts with a head node, which is the entry point to the list. The last node in the list has a reference to null, indicating the end of the list.

### Algorithm:

- Create a Node class with a constructor that takes data and next as parameters. Set the data parameter to the data property of the node and the next parameter to the next property of the node. If next is not provided, set it to null.

- Create a LinkedList class with a constructor that initializes the head property to null.

- Implement the insert method in the LinkedList class. It takes a value parameter. Create a new Node instance with the value and assign it to the newNode variable. If the head property is null, set it to newNode. Otherwise, set the next property of newNode to the current head and update the head to newNode.

- Implement the includes method in the LinkedList class. It takes a value parameter. Start with the currentNode set to the head. Iterate through the linked list by moving to the next node until the end of the list (currentNode is null). If the data property of the currentNode is equal to the value, return true. Otherwise, update currentNode to the next node. If the loop completes without finding a matching value, return false.

- Implement the toString method in the LinkedList class. Start with the currentNode set to the head. Initialize an empty string result. Iterate through the linked list by appending the string representation of the current node's data to result, followed by the arrow symbol (->). Update currentNode to the next node. Repeat until the end of the list (currentNode is null). Finally, append "NULL" to result and return it.

## Code : 
### [linkedList.js](https://github.com/BasharIrani23/data-structures-and-algorithms/blob/main/javascript/linked-list/index.js)
