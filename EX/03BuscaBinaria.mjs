function BuscaBinaria(vetor, valorBusca){

    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        let meio = Math.floor((ini + fim) / 2)
    

        if(valorBusca === vetor[meio]){
            return meio
        }
        else if (valorBusca > vetor[meio]){
            ini = meio + 1
        }
        else {
            fim = meio - 1
        }
    }

    return -1 

}


let nums =[0,11,22,33,44,55,66,77,88,99,111]

import {nomes} from "./Data/vetor-nomes.mjs"

console.log(`posição nome MIGUEL ${BuscaBinaria(nomes, 'MIGUEL')}`)