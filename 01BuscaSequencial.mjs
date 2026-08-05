const frutas = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi', 'pera', 'jabuticaba', 'limão', 'maracuja'];
const numeros = [10, 20, 30, 40, 50];

function buscaSequencial(vetor, valorBusca) {
    //percurso do vetor com fo tradicional
    for(let i = 0; i< vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1 //valorBusca não existe no vetor
}

console.log("Buscando Maracujá: ", buscaSequencial(frutas, 'maracuja'))
console.log("Buscando uva: ", buscaSequencial(frutas, 'uva'))
console.log("Buscando limão: ", buscaSequencial(frutas, 'limão'))
console.log("Buscando número 5: ", buscaSequencial(numeros, 5))
console.log("Buscando número 50: ", buscaSequencial(numeros, 50))
