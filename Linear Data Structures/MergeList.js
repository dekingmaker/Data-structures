class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function mergeSortedLists(list1, list2) {
    const newHead = new ListNode();
    let newList = newHead;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        newList.next = list1;
        list1 = list1.next;
      } else {
        newList.next = list2;
        list2 = list2.next;
      }
      newList = newList.next;
    }
  
    newList.next = list1 !== null ? list1 : list2;
  
    return newHead.next;
  }
  
  // Example usage
  const list1 = new ListNode(1);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(5);
  
  const list2 = new ListNode(2);
  list2.next = new ListNode(4);
  list2.next.next = new ListNode(6);
  
  let mergedList = mergeSortedLists(list1, list2);
  
  // You can print the merged list to verify the result
  while (mergedList !== null) {
    console.log(mergedList.val);
    mergedList = mergedList.next;
  }
  