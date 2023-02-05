interface IBinaryTreeNode<T> {
  data: T;
  leftNode?: IBinaryTreeNode<T> | null;
  rightNode?: IBinaryTreeNode<T> | null;
}

export class TreeNode<T = number> implements IBinaryTreeNode<T> {
  public data: T;
  public leftNode?: IBinaryTreeNode<T> | null;
  public rightNode?: IBinaryTreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

export class BinarySearchTree<T = number> {
  public root: IBinaryTreeNode<T> | null;

  constructor(root?: IBinaryTreeNode<T>) {
    this.root = root ?? null;
  }

  public insert(node: TreeNode<T> | null = this.root, value: T): TreeNode<T> {
    if (node === null) {
      const head = new TreeNode(value);
      return head;
    } else {
      if (value < node.data) {
        node.leftNode = this.insert(node.leftNode, value);
      } else {
        node.rightNode = this.insert(node.rightNode, value);
      }
      return node;
    }
  }
}

const rootNode = new TreeNode(50);
rootNode.leftNode = new TreeNode(35);
rootNode.rightNode = new TreeNode(60);
// rootNode.rightNode.leftNode = new TreeNode(55);
// rootNode.rightNode.rightNode = new TreeNode(70);

const bst = new BinarySearchTree(rootNode);
bst.insert(bst.root, 25);
console.log(JSON.stringify(bst, null, 4));
console.log(bst);
