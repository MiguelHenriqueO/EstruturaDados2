function buscaBinariaObj(VetorObj, fnComp){
    let ini = 0 
    let fim = VetorObj.length -1

    while(fim >= ini){
        let meio = Math.floor((ini + fim) / 2)
        
        switch (fnComp(VetorObj[meio])) {
            case 0:
                return meio
            case 1:
                ini = meio + 1
                break
            default:
                fim = meio - 1
                break;
        }
        
    
    }
    return -1

}

function compara(valorMeio, valorBusca = "IGOR"){
   if (valorBusca === valorMeio.first_name) return 0
   else if (valorBusca > valorMeio.first_name) return 1
   else return -1
}

import {objNomes} from "./Data/vetor-obj-nomes.mjs"

console.log("posição de first name = MIGUEL ", buscaBinariaObj(objNomes, compara))

