const students = [
    {
        nome: 'Heger',
        nota: 7
    },
    {
        nome: 'Divys',
        nota: 10
    },
    {
        nome: 'Enzo',
        nota: 7
    },
    {
        nome: 'Maria',
        nota: 6
    }
];

function getEstudantesAprovados(studentsList) {
    return studentsList.filter(student => student.nota >= 7);
}

console.log("Alunos Aprovados");
console.log(getEstudantesAprovados(students));

console.log("Lista");
console.log(students);
