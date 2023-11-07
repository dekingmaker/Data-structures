class queuenode{
    constructor(data,next){
        this.data=data;
        this.next= next;
    }

}

class LinkedQueue{
   
    constructor(){
        this.front = null; 
        this.rear = null;
    }
    
    enqueue(key)
    {
        // Create a new LL node
            let temp = new LinkedQueue(key);
       
            // If queue is empty, then new node is front and rear both
            if (this.rear == null) {
                this.front = this.rear = temp;
                
            }
       
            // Add the new node at the end of queue and change rear
           this.rear.next = temp;
           this.rear = temp;
    }
     
    dequeue() {
        if (!this.isEmpty()) {
        
            this.front = this.front.next;

        }
    }
    printQueue(){
        let currentNode = this.front;
     while(currentNode){
        console.log(currentNode.data);
        currentNode= currentNode.next;
       }
    }


}
 const lq= new LinkedQueue();
 lq.enqueue(1);
 lq.enqueue(2);
 lq.enqueue(3);
 lq.enqueue(4);
 lq.printQueue();
