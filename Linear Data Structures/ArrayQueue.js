class queue{
    constructor(){
        this.items=[];

    }

    enqueue(ele){
        this.items.push(ele);
    }
    dequeue(){
     
       return this.items.shift();
    }
    printQueue()
{
   
    for(var i = 0; i < this.items.length; i++){
        console.log(this.items[i]);
    }
        

}

}

const aq = new queue();
aq.enqueue(1);
aq.enqueue(2);
aq.enqueue(3);
aq.enqueue(4);
aq.enqueue(5);
aq.dequeue();
aq.printQueue();
