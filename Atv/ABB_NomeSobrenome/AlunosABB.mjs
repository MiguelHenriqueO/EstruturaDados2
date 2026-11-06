// Nome: Miguel Henrique Isaac De Oliveira
// RA: [PREENCHER COM SEU RA]

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AlunosABB {
    #root = null;

    insert(aluno) {
        const novoNo = new Node(aluno);

        if (this.#root === null) {
            this.#root = novoNo;
            return true;
        }

        let atual = this.#root;

        while (true) {
            if (aluno.ra === atual.data.ra) {
                return false;
            }

            if (aluno.ra < atual.data.ra) {
                if (atual.left === null) {
                    atual.left = novoNo;
                    return true;
                }
                atual = atual.left;
            } else {
                if (atual.right === null) {
                    atual.right = novoNo;
                    return true;
                }
                atual = atual.right;
            }
        }
    }

    inOrderTraversal(callback, node = this.#root) {
        if (node === null) return;
        this.inOrderTraversal(callback, node.left);
        callback(node.data);
        this.inOrderTraversal(callback, node.right);
    }

    preOrderTraversal(callback, node = this.#root) {
        if (node === null) return;
        callback(node.data);
        this.preOrderTraversal(callback, node.left);
        this.preOrderTraversal(callback, node.right);
    }

    postOrderTraversal(callback, node = this.#root) {
        if (node === null) return;
        this.postOrderTraversal(callback, node.left);
        this.postOrderTraversal(callback, node.right);
        callback(node.data);
    }

    searchStudent(ra) {
        let atual = this.#root;

        while (atual !== null) {
            if (ra === atual.data.ra) return atual.data;
            atual = ra < atual.data.ra ? atual.left : atual.right;
        }

        return null;
    }

    remove(ra) {
        const removeNode = (node, ra) => {
            if (node === null) return null;

            if (ra < node.data.ra) {
                node.left = removeNode(node.left, ra);
            } else if (ra > node.data.ra) {
                node.right = removeNode(node.right, ra);
            } else {
                // Caso 1: nó folha.
                if (node.left === null && node.right === null) {
                    return null;
                }

                // Caso 2: nó com apenas um filho.
                if (node.left === null) return node.right;
                if (node.right === null) return node.left;

                // Caso 3: dois filhos. Substitui pelo menor da subárvore direita.
                let sucessor = node.right;
                while (sucessor.left !== null) {
                    sucessor = sucessor.left;
                }

                node.data = sucessor.data;
                node.right = removeNode(node.right, sucessor.data.ra);
            }

            return node;
        };

        const encontrado = this.searchStudent(ra) !== null;
        if (!encontrado) return false;

        this.#root = removeNode(this.#root, ra);
        return true;
    }

    count() {
        const contar = (node) => {
            if (node === null) return 0;
            return 1 + contar(node.left) + contar(node.right);
        };
        return contar(this.#root);
    }

    // Altura medida em arestas: árvore vazia = -1 e raiz isolada = 0.
    height() {
        const calcular = (node) => {
            if (node === null) return -1;
            return 1 + Math.max(calcular(node.left), calcular(node.right));
        };
        return calcular(this.#root);
    }

    countLeaves() {
        const contar = (node) => {
            if (node === null) return 0;
            if (node.left === null && node.right === null) return 1;
            return contar(node.left) + contar(node.right);
        };
        return contar(this.#root);
    }

    averageGrade() {
        let soma = 0;
        let quantidade = 0;

        this.inOrderTraversal((aluno) => {
            soma += aluno.media;
            quantidade++;
        });

        return quantidade === 0 ? 0 : soma / quantidade;
    }
}

export default AlunosABB;
