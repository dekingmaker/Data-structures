class stack{
    constructor(){
        this.box=[];
    }
    push(data){
        this.box.unshift(data);
    }
    pop(){
        if(this.box.length == 0){
            return "underflow";
        }
        return this.box.shift();
    }
    peek(){
   
    return this.box[this.box.length - 1];
}
printStack(){
  
    for (var i = 0; i < this.box.length; i++){
        console.log(this.box[i]); 
    
}

}
}
const as = new stack();
as.push(21);
as.push(22);
as.push(23);
as.push(24);
as.pop();
as.printStack(); 