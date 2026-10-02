//classe que representa a unidade de informação da arvore binaria de busca
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.rigth = null;
  }
}

export default class BinarySearchTree {
  #root;
  constructor() {
    this.#root = null;
  }

  insert(val) {
    const inserted = new Node(val);

    
  }
}
