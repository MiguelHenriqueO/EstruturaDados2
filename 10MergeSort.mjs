function mergeSort(vetor){
    if(vetor.length < 2) return vetor

    let meio = Math.floor(vetor.length / 2)

    let vetorEsq = vetor.slice(0,meio)
    let vetorDir = vetor.slice(meio)

    //chamada recursiva ao mergeSort
    vetorEsq = mergeSort(vetorEsq)
    vetorDir = mergeSort(vetorDir)

    //mesclagem ordenada de veortEsq e vetorDir
    let posEsq = 0 
    let posDir = 0
    let vetRes = []

    while(posEsq < vetorEsq.length && posDir < vetorDir.length){
        if(vetorEsq[posEsq] < vetorDir[posDir]){
            vetRes.push(vetorEsq[posEsq])

            posEsq++
        }else{
            vetRes.push(vetorDir[posDir])

            posDir++
        }
    }
    
    let sobra 
    
    if (posEsq < posDir){
        sobra = vetorEsq.slice(posEsq)
    
    }else{
        sobra = vetorDir.slice(posDir)
    }

    return [...vetRes, ...sobra]


}

let nums = [77,44,22,33,99,55,88,0,66,11]

let numOrd = mergeSort(nums)

console.log(numOrd)