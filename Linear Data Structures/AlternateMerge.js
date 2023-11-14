class ListNode{
    constructor(data){
      this.data=data;
      this.next = null;

    }

}
function merge(list1,list2){
   
    let current1 = list1;
    let current2= list2;
     while(current1 && current2){
        const temp1= current1.next;
        const temp2= current2.next;
        
        current1.next = current2;
        current2.next= temp1;

        current1=temp1;
        current2=temp2;

     }
    }
     function printLinkedList(ResList){
        let curr = ResList;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }

     }
     
const list1 = new ListNode(5);
list1.next = new ListNode(7);
list1.next.next = new ListNode(17);
list1.next.next.next = new ListNode(13);

const list2 = new ListNode(12);
list2.next = new ListNode(10);
list2.next.next = new ListNode(2);
list2.next.next.next = new ListNode(4);
console.log(list1);
console.log(list2);

console.log("Linked List A:");
printLinkedList(list1);

console.log("Linked List B:");
printLinkedList(list2);
 
merge(list1,list2);
console.log("alternatley Merged List");
printLinkedList(list1);
