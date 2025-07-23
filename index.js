



class Node{

    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{

  

    constructor(arr){
        this.root = this.buildTree([...new Set(arr)].sort((a, b) => a - b))
    }


    buildTree(arr){
  
    if (arr.length === 0) return null;

    const midIndex = Math.floor(arr.length / 2);
    const root = new Node(arr[midIndex]);

    
    root.left = this.buildTree(arr.slice(0, midIndex));
    root.right = this.buildTree(arr.slice(midIndex + 1));

    return root
    }

    insert(value, node = this.root){
       
        if(value < node.data){
            if(node.left){
                this.insert(value, node.left);
            }
            else{
               const newNode = new Node(value);
               node.left = newNode;
               prettyPrint(this.root);

            } 
        }

         if(value > node.data){
            if(node.right){
                this.insert(value, node.right);
            }
            else{
               const newNode = new Node(value);
               node.right = newNode;
               prettyPrint(this.root);
            } 
        
        }
    
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};


const blahArray = [2, 3, 1, 24, 54, 6564, 737];

const BST = new Tree(blahArray);

prettyPrint(BST.root);

BST.insert(2424);
BST.insert(6969);