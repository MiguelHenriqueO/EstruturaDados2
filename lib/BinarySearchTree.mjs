// BINARY SEARCH TREE (BST)

//              nodes (n)
//  leftNode(< n)      rightNode(> n)

// --- TERMINOLOGY & GLOSSARY ---
// * Binary Tree: A hierarchical data structure where each node has at most two children.
// * Nodes (n): The individual elements containing a value and pointers to their children.
// * Parent Node: A node that has one or more child nodes connected below it.
// * Leaf Nodes: Nodes at the very bottom of the tree that have no children
// * Left Child: The child node positioned to the left (value < n in a BST).
// * Right Child: The child node positioned to the right (value > n in a BST).
// * Cardinality: The total node quantity or size of the tree.
// * Height: The length of the longest path from the root to a leaf node.

// --- TRAVERSAL METHODS ---
// * Pre-Order (VLR)  -> Visit (Root), Left, Right
// * In-Order (LVR)   -> Left, Visit (Root), Right (Yields sorted order in a BST)
// * Post-Order (LRV) -> Left, Right, Visit (Root)

// EXTENDED VISUAL EXAMPLE
//
//            8
//          /   \
//         4     10
//        / \      \
//       2   6      12
//      / \
//     1   3
//
// --- METRICS & ROLES FOR THIS SPECIFIC TREE ---
// * Cardinality = 8
// * Height = 4
// * Leaf Nodes = [1, 3, 6, 12]
//
// --- TRAVERSAL OUTPUTS ---
// * Pre-Order (VLR)  -> 8, 4, 2, 1, 3, 6, 10, 12
// * In-Order (LVR)   -> 1, 2, 3, 4, 6, 8, 10, 12
// * Post-Order (LRV) -> 1, 3, 2, 6, 4, 12, 10, 8
// ============================================================================

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

  insert(value) {
    const inserted = new Node(value);

    // first case, empty tree
    if (this.#root === null) this.#root = inserted;
    // second case, traveling tree recursively
    else this.#insertNode(inserted, this.#root);
  }

  #insertNode(inserted, root) {
    //1° caso valor a ser inserido é menor que o valor da raiz
    //inserção ororre a esquerda da raiz
    if (inserted.data < root.data) {
      //se a posição a esqierda da raoz está desocupada faz a inserção
      if (root.left === null) {
        root.left = inserted;
      }
      // se não reinicia o processo de inserção recursivamente com a subarvore esquerda com raiz
      else {
        this.#insertNode(inserted, root.left);
      }
    }

    //2° caso o valor a ser inserido seja maior que o valor da raiz
    //inserção ocorre a direita da raiz
    else if (inserted.data > root.data) {
      //se a posição a direita da raiz está desocupada faz a inserção
      if (root.right === null) {
        root.rigth = inserted;
      }
      // se não reinicia o processo de inserção recursivamente com a subarvore direita com raiz
      else {
        this.#insertNode(inserted, root.right);
      }
      // 3 ° caso o valor a ser inserido é igual ao valor da raiz
      // se não reinicia o processo de inserção recursivamente com a subarvore esquerda com raiz
    } else {
      this.#insertNode(inserted, root.left);
    }
  }

  /*
  Percursos
  Métodos que executam o percurso em-ordem (in-order traversal) na arvore
  ordem do percurso:
    1° percorre recursivamente em-ordem a subarvore esquerda
    2° visita a raiz
    3° percorre recursivamente em-ordem a subarvore direita

*/

  inOrderTraversal(fnCallback, root = this.#root) {
    if (root != null) {
      this.inOrderTraversal(fnCallback, root.left);  //1°
      fnCallback(root.data);                         //2°
      this.inOrderTraversal(fnCallback, root.right); //3°
    }
  }

  /* 
  
  método que executa o percurso pré-ordem (pre-order traversal) na arvore
  ordem do percurso:
    1° visita a raiz
    2° percorre recursivamente em-ordem a subarvore esquerda
    3° percorre recursivamente em-ordem a subarvore direita
    
  
  
  */

  preOrderTraversal(fnCallback, root = this.#root) {
    if (root != null) {
      fnCallback(root.data);                         //1°
      this.preOrderTraversal(fnCallback, root.left);  //2°
      this.preOrderTraversal(fnCallback, root.right); //3°
    }
  }


}
