import students from "./students.mjs";

function notaMaiorQueSeis() {
	return students.filter((aluno) => aluno.nota >= 6);
}

console.log(students);
const alunosNotaMaior6 = notaMaiorQueSeis();
console.log(`Temos ${alunosNotaMaior6.length} alunos com nota maior ou igual a 6. São eles:`);
console.log(alunosNotaMaior6);

const media = students.reduce((media, aluno) => (media += aluno.nota / students.length), 0);
console.log(`\nA média de notas dos alunos é de: ${media.toFixed(2)}`);

const crescente = [...students];
crescente.sort((a, b) => a.nota - b.nota);
console.log(`\nOs alunos em ordem crescente de nota é: `);
console.log(crescente);
