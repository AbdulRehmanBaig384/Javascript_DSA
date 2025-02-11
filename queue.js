// a queue is a linear datastructure that follows fifo
class Queue {// we define a quene class to define a queue structure
    constructor() {
        this.items = {}; //this is used to store value in key pair values
        this.front = 0;  // this is used to track the first elemnt in the queue
        this.rear = 0;  // this is used to track the new available position for new elemnts
    }

    // Enqueue is used to add element to the back of the queue
    enqueue(value) {
        this.items[this.rear] = value;
        this.rear++; // this is used to move pointer forward
    }

    // Dequeue is used to remove an element from the front of the queue
    dequeue() {
        if (this.front === this.rear) {
            return "Queue is empty";
        }
        let removedValue = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return removedValue;
    }

    // Display the queue
    display() {
        let result = "";
        for (let i = this.front; i < this.rear; i++) {
            result += this.items[i] + " -> ";
        }
        console.log(result + "None");
    }
}


let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.display();  
console.log("Dequeued:", q.dequeue()); 
q.display(); 

//output
// PS C:\Users\PMLS\Desktop\New folder> node stack.js
// 30 -> 20 -> 10 -> None
// Delete last element: 30
// 20 -> 10 -> None