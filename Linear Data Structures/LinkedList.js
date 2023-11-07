class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class LinkedList {
        constructor(){
            this.head=null;
            this.size=0;
        }
        insertFirst(data){
            this.head= new Node(data,this.head);

        }
        insertAtLast(data){
            let node = new Node(data);
            let current;
            if(!this.head!=0){
                this.head=node;

            }else{
                current = this.head;
                while(current.next){
                    current= current.next;

                }
                current.next=node;
            }
            this.size++;
        }
        insertAt(data,index){
             let curr, prev;
             let node = new Node(data);
            // if index is out of range
            if(index <0 && index> this.size){
                return;
            }
            // if have to insert at zero th position \.
            if(index=== 0){
                this.head=new Node(data,this.head);
                return;
            }
            curr= this.head;
            let count =0;
            while (index>count){
                prev= curr;
                curr=curr.next;
                count++;
            }
            node.next=curr;
            prev.next=node;


        }
        DelFirst(){
            let curr = this.head;
            this.head=curr.next;
        }
        DelAtLast(){
            if (!this.head) {
                // If the list is empty, there's nothing to delete
                return;
              }
            
          let  current = this.head;
          let prev=current;
          // Traverse the list to find the last node
            while(current.next){
                prev=current;
                current= current.next;

            }
            if (prev === null) {
                this.head = null;
              } else {
                
                prev.next = null;
              }
            
        }
        DelAt(index){
            let curr=this.head,prev=null,count=0;
            while(index>count){
                prev=curr;
                curr=curr.next;
                count++;
            }
            prev.next=curr.next;
            this.size--;

        }
        printListData(){
            let current = this.head;
            while(current){
                console.log(current.data);
                current=current.next;






            }
        }

        

}
 const ll  = new LinkedList();
 ll.insertFirst(500);
 ll.insertFirst(600);
 ll.insertFirst(700);
 ll.insertAtLast(100);
 ll.insertAtLast(200);
 ll.insertAtLast(300);
 ll.insertAtLast(400);
 ll.insertAt(900,2);
ll.DelAt(5);


ll.printListData();
