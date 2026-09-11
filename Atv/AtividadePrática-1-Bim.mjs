/*
DEFINIÇÃO DE REQUISITOS / ESPECIFICAÇÕES / CONSIDERAÇÕES /
RECOMENDAÇÔES:
ESTRUTURA: Construa uma aplicação em Javascript para a manipulação de
dados armazenados em uma estrutura de dados heterogênea dinâmica utilizando
um Array de Objetos por exemplo. O software deve ser capaz de realizar um
Cadastro de Alunos de uma Faculdade. Se preferir, poderá definir um limite
máximo de alunos cadastrados.
Você deve implementar os algoritmos sem usar Array.sort()
DADOS: Os dados/campos a serem armazenados sobre os alunos são
obrigatoriamente: NOME; RA; IDADE; SEXO; MÉDIA e RESULTADO
(Aprovado/Reprovado). Observação para média de aprovados: >= 6,0

TELA DE APRESENTAÇÃO DO PROGRAMA:
Conter as opções abaixo:
- Cadastrar Alunos.
- Relatório de Alunos em ordem crescente por Nome.
- Relatório de Alunos em ordem decrescente por RA.
- Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.

Obs: Para os relatórios, todos os campos de cada aluno deverão ser apresentados
na tela
*/


let alunos = [
    {
        nome: "Miguel",
        ra: "12345",
        idade: 20,
        sexo: "M",
        media: 8.5,
        resultado: "Aprovado"
    }
]

function cadastrar(nome, ra, idade, sexo, media){
    let resultado
    if(media >= 6 ){
        resultado = "Aprovado"
    }else{
        resultado = "Reprovado"
    }

    alunos.push({
        nome:nome,
        ra:ra,
        idade:idade,
        sexo:sexo,
        media:media,
        resultado:resultado
    })
}

cadastrar("claudio", "1234523", 26, "m", 5 )
cadastrar("Lauro", "244", 21, "M", 7 )
cadastrar("Roberta", "123321", 19, "F", 9 )

function listar(vetor){
    console.log(vetor)
}



//Relatório de Alunos em ordem crescente por Nome.

/*
function RelatNomeOrd(vetor, fnComp){
if (vetor.length < 2) return vetor;

let meio = Math.floor(vetor.length / 2);

let vetEsq = vetor.slice(0, meio);
let vetDir = vetor.slice(meio);

vetEsq = RelatNomeOrd(vetEsq, fnComp);
vetDir = RelatNomeOrd(vetDir, fnComp);


let posEsq = 0,
    posDir = 0,
    vetRes = [];

while (posEsq < vetEsq.length && posDir < vetDir.length) {
    if (fnComp(vetDir[posDir], vetEsq[posEsq])) {
    vetRes.push(vetEsq[posEsq]);
    posEsq++;
    } else {
    vetRes.push(vetDir[posDir]);
    posDir++;
    }
}

let sobra;
if (posEsq < posDir) {
    sobra = vetEsq.slice(posEsq);
} else {
    sobra = vetDir.slice(posDir);
}

return [...vetRes, ...sobra];
}

let nomesOrdCres = RelatNomeOrd(alunos, (elem1, elem2) => elem1.nome < elem2.nome)

console.log(nomesOrdCres)
*/


//Relatório de Alunos em ordem decrescente por RA.
/*
function RelatRaDec(vetor, fnComp){
if (vetor.length < 2) return vetor;

let meio = Math.floor(vetor.length / 2);

let vetEsq = vetor.slice(0, meio);
let vetDir = vetor.slice(meio);

vetEsq = RelatRaDec(vetEsq, fnComp);
vetDir = RelatRaDec(vetDir, fnComp);


let posEsq = 0,
    posDir = 0,
    vetRes = [];

while (posEsq < vetEsq.length && posDir < vetDir.length) {
    if (fnComp(vetDir[posDir], vetEsq[posEsq])) {
    vetRes.push(vetEsq[posEsq]);
    posEsq++;
    } else {
    vetRes.push(vetDir[posDir]);
    posDir++;
    }
}

let sobra;
if (posEsq < posDir) {
    sobra = vetEsq.slice(posEsq);
} else {
    sobra = vetDir.slice(posDir);
}

return [...vetRes, ...sobra];
}

let OrdRaDecres = RelatRaDec(alunos, (elem1, elem2) => Number(elem1.ra) < Number(elem2.ra))

console.log(OrdRaDecres)   
*/

//Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.

let alunosAprov = []

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].resultado == "Aprovado") {
        alunosAprov.push(alunos[i]);
    }
}

function NomeCresAprov(vetor, fnComp){
if (vetor.length < 2) return vetor;

let meio = Math.floor(vetor.length / 2);

let vetEsq = vetor.slice(0, meio);
let vetDir = vetor.slice(meio);

vetEsq = NomeCresAprov(vetEsq, fnComp);
vetDir = NomeCresAprov(vetDir, fnComp);


let posEsq = 0,
    posDir = 0,
    vetRes = [];

while (posEsq < vetEsq.length && posDir < vetDir.length) {
    if (fnComp(vetDir[posDir], vetEsq[posEsq])) {
    vetRes.push(vetEsq[posEsq]);
    posEsq++;
    } else {
    vetRes.push(vetDir[posDir]);
    posDir++;
    }
}

let sobra;
if (posEsq < posDir) {
    sobra = vetEsq.slice(posEsq);
} else {
    sobra = vetDir.slice(posDir);
}

return [...vetRes, ...sobra];
}

let NomesCresAprovad = NomeCresAprov(alunosAprov, (elem1, elem2) => elem1.nome < elem2.nome)

