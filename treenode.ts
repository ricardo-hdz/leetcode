export class TreeNode {
    public val: number;
    public leftChild: TreeNode;
    public rightChild: TreeNode;
    public root: TreeNode;

    constructor(val: number, leftChild: TreeNode = null, righChild: TreeNode = null) {
        this.val = val;
        this.leftChild = leftChild;
        this.rightChild = righChild;
        this.root = this;
    }

    insert(n: TreeNode, root: TreeNode = this.root) {
        if (!root || root.val === null) {
            return;
        }

        if (root.val === n.val) {
            return;
        }

        if (n.val < root.val) {
            if (root.leftChild === null) {
                root.leftChild = n;
            } else {
                this.insert(n, root.leftChild);
            }
        } else {
            if (root.rightChild === null) {
                root.rightChild = n;
            } else {
                this.insert(n, root.rightChild);
            }
        }
    }

    search(val: number, root: TreeNode = this.root) {
        if (!root || !root.val) {
            return null;
        }

        if (root.val === val) {
            return root;
        }

        if (val < root.val) {
            return this.search(val, root.leftChild);
        } else if (val > root.val) {
            return this.search(val, root.rightChild);
        }

        return 'not found';
    }

    delete(val: number, root: TreeNode = this.root) {
        if (!root || !root.val) {
            return;
        }

        if (val < root.val) {
            root.leftChild = this.delete(val, root.leftChild);
            return root;
        } else if (val > root.val) {
            root.rightChild = this.delete(val, root.rightChild);
            return root;
        } else if (root.val === val) {
            if (root.leftChild === null) {
                return root.rightChild;
            } else if (root.rightChild === null) {
                return root.leftChild;
            } else {
                // find least succesor node and swap
                root.rightChild = this.lift(root.rightChild, root);
                return root;
            }
        }   
    }

    lift(n: TreeNode, del: TreeNode) {
        if (n.leftChild) {
            n.leftChild = this.lift(n.leftChild, del);
            return n;
        } else {
            del.val = n.val;
            return n.rightChild;
        }
    }

    inorder(tree: TreeNode = this.root) {
        // left, root, right
        let str = '';
        if (tree.leftChild) {
            str = str + this.inorder(tree.leftChild);
        }
        str = str + tree.val;
        if (tree.rightChild) {
            str = str + this.inorder(tree.rightChild);
        }
        return str;
    }

    postorder(tree: TreeNode = this.root) {
        // left, right, root
        let str = '';
        if (tree.leftChild) {
            str = str + this.postorder(tree.leftChild);
        }
        if (tree.rightChild) {
            str = str + this.postorder(tree.rightChild);
        }
        str = str + tree.val;
        return str;
    }

    preorder(tree: TreeNode = this.root) {
        // root, left, right
        let str = '';
        str = str + tree.val;
        if (tree.leftChild) {
            str = str + this.preorder(tree.leftChild);
        }
        if (tree.rightChild) {
            str = str + this.preorder(tree.rightChild);
        }
        return str;
    }

    toLinkedList() {}

}