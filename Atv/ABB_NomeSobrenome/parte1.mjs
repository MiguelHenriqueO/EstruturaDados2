// Nome: Miguel Henrique Isaac De Oliveira
// RA: [preencha com seu RA]

import { BinarySearchTree } from './BinarySearchTree.mjs';

function mostrarPercursos(arvore) {
    const emOrdem = [];
    const preOrdem = [];
    const posOrdem = [];

    arvore.inOrder((valor) => emOrdem.push(valor));
    arvore.preOrder((valor) => preOrdem.push(valor));
    arvore.postOrder((valor) => posOrdem.push(valor));

    console.log(`Em-ordem: ${emOrdem.join(', ')}`);
    console.log(`Pré-ordem: ${preOrdem.join(', ')}`);
    console.log(`Pós-ordem: ${posOrdem.join(', ')}`);
}

// EXERCÍCIO 1
console.log('========== EXERCÍCIO 1 =========');
const arvore1 = new BinarySearchTree();
[50, 30, 70, 20, 40, 60, 80].forEach((valor) => arvore1.insert(valor));
mostrarPercursos(arvore1);
// O percurso em-ordem visita primeiro a subárvore esquerda, depois o nodo e
// por fim a subárvore direita. Como a ABB mantém menores à esquerda e maiores
// à direita, os valores são exibidos em ordem crescente.

// EXERCÍCIO 2
console.log('\n========== EXERCÍCIO 2 =========');
const arvore2 = new BinarySearchTree();
[8, 3, 10, 1, 6, 14, 4, 7, 13].forEach((valor) => arvore2.insert(valor));
mostrarPercursos(arvore2);
console.log(`Altura: ${arvore2.height()}`);
console.log(`Número de folhas: ${arvore2.countLeaves()}`);

// EXERCÍCIO 3
console.log('\n========== EXERCÍCIO 3 =========');

// (a) Inserção crescente produz uma árvore inclinada para a direita.
const arvore3a = new BinarySearchTree();
[1, 2, 3, 4, 5].forEach((valor) => arvore3a.insert(valor));
console.log('(a) Inserção 1, 2, 3, 4, 5');
console.log(`Altura: ${arvore3a.height()}`);
// Essa forma é ruim para busca porque fica parecida com uma lista encadeada:
// em vez de reduzir o espaço de busca a cada nível, pode ser necessário
// percorrer vários nodos, tornando a busca O(n) no pior caso.

// (b) Mesmos valores do Exercício 1 em outra ordem.
const arvore3b = new BinarySearchTree();
[50, 70, 30, 60, 80, 20, 40].forEach((valor) => arvore3b.insert(valor));
const preOrdem1 = [];
const preOrdem3b = [];
arvore1.preOrder((valor) => preOrdem1.push(valor));
arvore3b.preOrder((valor) => preOrdem3b.push(valor));
console.log('\n(b) Inserção 50, 70, 30, 60, 80, 20, 40');
console.log(`Pré-ordem do Exercício 1: ${preOrdem1.join(', ')}`);
console.log(`Pré-ordem desta árvore: ${preOrdem3b.join(', ')}`);
console.log(`A árvore ficou igual? ${preOrdem1.join(',') === preOrdem3b.join(',') ? 'Sim' : 'Não'}`);

// (c) Outra ordem que cria uma forma diferente.
const arvore3c = new BinarySearchTree();
[40, 20, 60, 30, 50, 70, 80].forEach((valor) => arvore3c.insert(valor));
const preOrdem3c = [];
arvore3c.preOrder((valor) => preOrdem3c.push(valor));
console.log('\n(c) Outra ordem: 40, 20, 60, 30, 50, 70, 80');
console.log(`Pré-ordem: ${preOrdem3c.join(', ')}`);
console.log(`Diferente da árvore do Exercício 1? ${preOrdem1.join(',') !== preOrdem3c.join(',') ? 'Sim' : 'Não'}`);
