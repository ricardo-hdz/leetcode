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
        let t = [];
        if (tree.leftChild) {
            t = t.concat(this.inorder(tree.leftChild));
        }
        t.push(tree.val);
        if (tree.rightChild) {
            t = t.concat(this.inorder(tree.rightChild));
        }
        return t;
    }

    postorder(tree: TreeNode = this.root) {
        // left, right, root
        let t = [];
        if (tree.leftChild) {
            t = t.concat(this.postorder(tree.leftChild));
        }
        if (tree.rightChild) {
            t = t.concat(this.postorder(tree.rightChild));
        }
        t.push(tree.val);
        return t;
    }

    preorder(tree: TreeNode = this.root) {
        // root, left, right
        let t = [];
        t.push(tree.val);
        if (tree.leftChild) {
            t = t.concat(this.preorder(tree.leftChild));
        }
        if (tree.rightChild) {
            t = t.concat(this.preorder(tree.rightChild));
        }
        return t;
    }

    toLinkedList() {}
    toDoubleLinkedList() {}

}