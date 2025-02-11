// in this program we can using object(this.items) and an index{this.top_value_index}.this is basically using for push and pop process

class Stack {
    constructor() {
        this.items = {}; 
        // in this process we create an empty array to store stack valuesb per
        this.top_value_index = 0; 
        // in this procee we can declare the top_value_index position index of element is
    }

  
    manual_Push(value) {
        // to store the value at top_value_index index 
        this.items[this.top_value_index] = value; // it is used to store the value in the object items at index top_value_index
        // Increase the top_value_index pointer in below code
        this.top_value_index++; 
    }

    // Manually remove an element (Pop)
    manual_Pop() {
        if (this.top_value_index === 0) {    
            return "Stack is empty";
        }
        this.top_value_index--; //  move this.top down
        let removedValue = this.items[this.top_value_index]; // Get the top_value_index value
        delete this.items[this.top_value_index]; // Remove it from the stack
        return removedValue; // Return removed value
    }

    // Display stack elements
    display() {
        let result = "";
        for (let i = this.top_value_index - 1; i >= 0; i--) {
            result += this.items[i] + " -> ";
        }
        console.log(result + "None");
    }
}

// Example Usage
let s = new Stack();
s.manual_Push(10);
s.manual_Push(20);
s.manual_Push(30);

s.display();  
console.log("Delete last element:", s.manual_Pop()); 
s.display();  


// output
// PS C:\Users\PMLS\Desktop\New folder> node stack.js
// 30 -> 20 -> 10 -> None
// Delete last element: 30
// 20 -> 10 -> None