import BinarySearchTree from "../lib/BinarySearchTree.mjs"

const arvore = new BinarySearchTree

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(14)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

let percursoIN = []
let percursoPRE= []
let percursoPOS= []

// percurso em-ordem
arvore.inOrderTraversal(val => percursoIN.push(val))
console.log('Percurso em-ordem',percursoIN)

// percurso pre-ordem
arvore.preOrderTraversal(val => percursoPRE.push(val))
console.log('Percurso pré-ordem: ', percursoPRE)

//percurso pos-ordem
arvore.postOrderTraversal(val => percursoPOS.push(val))
console.log('Percurso pos-ordem: ', percursoPOS)

// testes de remoção
let percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('ANTES DAS REMÇÕES: ', percursoREM)

//remoção de um nodo de grau 0
arvore.remove(64)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Depois da remoção do 64: ', percursoREM)

//remoção de um nodo de grau 1
arvore.remove(1)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Depois da remoção do 1: ', percursoREM)


//remoção de um nodo de grau 2
arvore.remove(15)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Depois da remoção do 15: ', percursoREM)


//remoção da raiz
arvore.remove(48)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Depois da remoção do 48: ', percursoREM)

percursoREM = []
arvore.preOrderTraversal(val => percursoREM.push(val))
console.log(`Novo valor na raiz é: ${percursoREM[0]}`)

