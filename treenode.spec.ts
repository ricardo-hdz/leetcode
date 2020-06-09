import { TreeNode } from './treenode';

describe('TreeNode', () => {
    let tree;
    beforeEach(() => {
        let node3 = new TreeNode(10);
        let node4 = new TreeNode(33);
        let node = new TreeNode(25, node3, node4);

        let node8 = new TreeNode(55);
        let node7 = new TreeNode(52, null, node8);
        let node5 = new TreeNode(56, node7, null);
        let node6 = new TreeNode(89);
        let node2 = new TreeNode(75, node5, node6);

        tree = new TreeNode(50, node, node2);
    });

    it('should insert/search successfully', () => {
        let n = new TreeNode(40);
        tree.insert(n);
        expect(tree.search(40)).toEqual(n);
    });

    it('should delete successfully', () => {
        let n = new TreeNode(69);
        tree.insert(n);
        expect(tree.search(69)).toEqual(n);
        tree.delete(69);
        expect(tree.search(69)).toEqual(null);
    });

    it('should traverse inorder successfully', () => {
        let node4 = new TreeNode(4);
        let node5 = new TreeNode(5);

        let node3 = new TreeNode(3);
        let node2 = new TreeNode(2, node4, node5);

        tree = new TreeNode(1, node2, node3);
        expect(tree.inorder()).toEqual([4,2,5,1,3]);
    });

    it('should traverse postorder successfully', () => {
        let node4 = new TreeNode(4);
        let node5 = new TreeNode(5);

        let node3 = new TreeNode(3);
        let node2 = new TreeNode(2, node4, node5);

        tree = new TreeNode(1, node2, node3);
        expect(tree.postorder()).toEqual([4,5,2,3,1]);
    });

    it('should traverse preorder successfully', () => {
        let node4 = new TreeNode(4);
        let node5 = new TreeNode(5);

        let node3 = new TreeNode(3);
        let node2 = new TreeNode(2, node4, node5);

        tree = new TreeNode(1, node2, node3);
        expect(tree.preorder()).toEqual([1,2,4,5,3]);
    });
});