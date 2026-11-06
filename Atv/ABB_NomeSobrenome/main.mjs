// Nome: Miguel Henrique Isaac De Oliveira
// RA: [PREENCHER COM SEU RA]

import AlunosABB from './AlunosABB.mjs';

const arvore = new AlunosABB();

const alunos = [
    { ra: 2026050, nome: 'Ana Beatriz Souza', media: 8.5 },
    { ra: 2026020, nome: 'João Silva', media: 7.0 },
    { ra: 2026080, nome: 'Mariana Lopes', media: 9.0 },
    { ra: 2026010, nome: 'Pedro Henrique Alves', media: 6.5 },
    { ra: 2026030, nome: 'João Silva', media: 8.0 },
    { ra: 2026070, nome: 'Camila Ferreira', media: 7.5 },
    { ra: 2026090, nome: 'Rafael Costa', media: 5.5 },
    { ra: 2026025, nome: 'Luiza Martins', media: 9.5 },
    { ra: 2026075, nome: 'Bruno Carvalho', media: 6.0 },
    { ra: 2026095, nome: 'Fernanda Ribeiro', media: 8.0 }
];

function listarAlunos(titulo) {
    console.log(`\\n${titulo}`);
    console.log('RA       | Nome                    | Média');
    console.log('---------|-------------------------|------');
    arvore.inOrderTraversal((aluno) => {
        console.log(`${aluno.ra} | ${aluno.nome.padEnd(23)} | ${aluno.media.toFixed(1)}`);
    });
}

console.log('========== CADASTRO DE ALUNOS ==========');
alunos.forEach((aluno) => {
    const inserido = arvore.insert(aluno);
    if (inserido) {
        console.log(`Aluno cadastrado: ${aluno.ra} - ${aluno.nome}`);
    } else {
        console.log(`RA já cadastrado: ${aluno.ra}`);
    }
});

// Tentativa de inserir RA duplicado.
const alunoDuplicado = { ra: 2026030, nome: 'Carlos Mendes', media: 4.0 };
console.log(`\\nTentativa de cadastro duplicado (RA ${alunoDuplicado.ra}):`);
if (!arvore.insert(alunoDuplicado)) {
    console.log('RA já cadastrado');
}

listarAlunos('========== LISTAGEM EM ORDEM DE RA ==========');

console.log('\\n========== BUSCA DE ALUNOS ==========');
const encontrado = arvore.searchStudent(2026075);
console.log(encontrado
    ? `RA 2026075 encontrado: ${encontrado.nome}, média ${encontrado.media.toFixed(1)}`
    : 'RA 2026075 não encontrado');

const naoEncontrado = arvore.searchStudent(2026099);
console.log(naoEncontrado
    ? `RA 2026099 encontrado: ${naoEncontrado.nome}`
    : 'RA 2026099 não encontrado');

console.log('\\n========== ESTATÍSTICAS INICIAIS ==========');
console.log(`Quantidade de alunos: ${arvore.count()}`);
console.log(`Altura da árvore: ${arvore.height()}`);
console.log(`Quantidade de folhas: ${arvore.countLeaves()}`);
console.log(`Média geral: ${arvore.averageGrade().toFixed(2)}`);

// Remoção de folha.
console.log('\\n========== REMOÇÃO: NÓ FOLHA (RA 2026025) ==========');
console.log(`Removido? ${arvore.remove(2026025) ? 'Sim' : 'Não'}`);
listarAlunos('Alunos após remoção do RA 2026025');

// Remoção de nó com um filho.
console.log('\\n========== REMOÇÃO: NÓ COM UM FILHO (RA 2026090) ==========');
console.log(`Removido? ${arvore.remove(2026090) ? 'Sim' : 'Não'}`);
listarAlunos('Alunos após remoção do RA 2026090');

// Remoção de nó com dois filhos (raiz).
console.log('\\n========== REMOÇÃO: NÓ COM DOIS FILHOS (RA 2026050) ==========');
console.log(`Removido? ${arvore.remove(2026050) ? 'Sim' : 'Não'}`);
listarAlunos('Alunos após remoção do RA 2026050');

const percursoPreOrdem = [];
arvore.preOrderTraversal((aluno) => percursoPreOrdem.push(aluno.ra));

console.log('\\n========== RESULTADO FINAL ==========');
console.log(`Pré-ordem (RA): ${percursoPreOrdem.join(', ')}`);
console.log(`Quantidade final: ${arvore.count()}`);
console.log(`Altura final: ${arvore.height()}`);
console.log(`Folhas finais: ${arvore.countLeaves()}`);
console.log(`Média geral final: ${arvore.averageGrade().toFixed(2)}`);
