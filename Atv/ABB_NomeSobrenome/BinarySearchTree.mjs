// Árvore Binária de Busca (ABB)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return true;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return false;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return true;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return true;
                }
                current = current.right;
            }
        }
    }

    inOrder(callback) {
        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            callback(node.value);
            traverse(node.right);
        };
        traverse(this.root);
    }

    preOrder(callback) {
        const traverse = (node) => {
            if (node === null) return;
            callback(node.value);
            traverse(node.left);
            traverse(node.right);
        };
        traverse(this.root);
    }

    postOrder(callback) {
        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            traverse(node.right);
            callback(node.value);
        };
        traverse(this.root);
    }

    // Altura em arestas: árvore vazia = -1; somente raiz = 0.
    height() {
        const calculate = (node) => {
            if (node === null) return -1;
            return 1 + Math.max(calculate(node.left), calculate(node.right));
        };
        return calculate(this.root);
    }

    // Conta os nós que não possuem filhos.
    countLeaves() {
        const count = (node) => {
            if (node === null) return 0;
            if (node.left === null && node.right === null) return 1;
            return count(node.left) + count(node.right);
        };
        return count(this.root);
    }
}

export default BinarySearchTree;
