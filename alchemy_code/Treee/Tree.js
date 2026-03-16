class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;
        while (true) {
            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }

    hasNode(number) {
        let current = this.root;
        while (current !== null) {
            if (number === current.data) {
                return true;
            }
            if (number < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

module.exports = Tree;