class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    insert = (data) =>{
        var newnode = new Node(data);
        var current = this.head;
        if(this.head == null){
            this.head = newnode;
            return;
        }
        while(current.next != null){
            current = current.next;
        }
        current.next = newnode;
    }

    printlist = () =>{
        var current = this.head;
        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }
}


const sll = new SLL();

sll.insert(1)
sll.insert(2)
sll.insert(4)
sll.insert("Hello")
sll.printlist()