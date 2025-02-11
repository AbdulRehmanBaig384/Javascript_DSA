// the Node class is used to create individuals nodes
class Node {
    constructor(x) {
        this.x = x; //here we store data value of nodes
        this.next = null; // in this we tell about the pointer to the next node,which is null when the node is first created

    }
}
// in this class we have to manage nodes
class LinkedList {
    constructor() {
        this.head = null; // in this proccess the head is the first node in the list is lln
    }

    // Insert a new node at the end
    insert(x) {
        let newNode = new Node(x);
        if (!this.head) { // in this procee if this.head is null so set as first node
            this.head = newNode;
        } else {
            let variable = this.head;
            while (variable.next !== null) {
                variable = variable.next;
            }
            variable.next = newNode;
        }
    }

    // Display the linked list
    display() {
        let variable = this.head;
        let result = "";
        while (variable !== null) {
            result += variable.x + " -> ";
            variable = variable.next;
        }
        console.log(result + "None");
    }
}

// Example Usage
let ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.display(); 


// here we discuss the output 
// PS C:\Users\PMLS\Desktop\New folder> node linked.js
// 10 -> 20 -> 30 -> None