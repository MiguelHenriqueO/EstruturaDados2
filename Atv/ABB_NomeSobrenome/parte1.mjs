import BinarySearchTree from "./BinarySearchTree.mjs"

const Ex1 = new BinarySearchTree

Ex1.insert(50)
Ex1.insert(30)
Ex1.insert(70)
Ex1.insert(20)
Ex1.insert(40)
Ex1.insert(60)
Ex1.insert(80)

let Ex1InOrder = []
let Ex1PreOrder = []
let Ex1PosOrder = []

console.log("////////////////////")
console.log("       EX 1       ")
console.log("////////////////////")

// percurso em-ordem
Ex1.inOrderTraversal(val => Ex1InOrder.push(val))
console.log('Percurso em-ordem', Ex1InOrder)

// o em ordem sempre sai do menor para maior sempre sai em ordem crescente por sempre começar a esquerda da raiz que é a parte menor e ir para a direita

// percurso pre-ordem
Ex1.preOrderTraversal(val => Ex1PreOrder.push(val))
console.log('Percurso pré-ordem: ', Ex1PreOrder)

//percurso pos-ordem
Ex1.postOrderTraversal(val => Ex1PosOrder.push(val))
console.log('Percurso pos-ordem: ', Ex1PosOrder)


console.log("////////////////////")
console.log("       EX 2       ")
console.log("////////////////////")


const Ex2 = new BinarySearchTree

Ex2.insert(8)
Ex2.insert(3)
Ex2.insert(10)
Ex2.insert(1)
Ex2.insert(6)
Ex2.insert(14)
Ex2.insert(4)
Ex2.insert(7)
Ex2.insert(13)

