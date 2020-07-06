const frutas = ["Laranaja", "Pera", "Uva"];

//interar função forEatch
frutas.forEach((value, index, arr) =>{
    console.log(index, value, arr);
});


// função map
frutas.map((value, index) => {
    console.log(`${index} - ${value}`);
});


// função flet
const idade = [23, 34, 45, [70, 86, [19, 87]]];

console.log(idade);
console.log(idade.flat(2));


// função fletMap
const arr = [1, 2, 3, 4];

arr.flatMap(value => {
    
    console.log([value * 2]);

});

//função keys (Interator) usando o next, pula sempre para o proximo array.
const arrInterator = frutas.values();

console.log(arrInterator.next());
console.log(arrInterator.next());
console.log(arrInterator.next());
console.log(arrInterator.next());

//enties - Retorna um Array Interator que comtma os pares chaves/valor para cada elemento do array
const arrInterEntries = frutas.entries();

console.log(arrInterEntries.next());
console.log(arrInterEntries.next());
console.log(arrInterEntries.next());
console.log(arrInterEntries.next());

//find - Retorna o primeiro item do array que satisfaz a condição.
//usando a constante arr criada anteriormente.
const firstGreaterThanTwo = arr.find(value => value > 2);

console.log("O Primeiro numero maiior que 2 e: " + firstGreaterThanTwo);

//findIndex - Retorna o índice do primeiro item de uma array que se satisfaz a condição.
const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

console.log("Qual a posição do Primeiro numero maior que 2 e: " + firstIndexGreaterThanTwo);

//filter - Retorna um novo array com todos os elementos que satisfazem a condição.
const firstValuesGreaterThanTwo = arr.filter(value => value > 2);

console.log("Quais os númerios maior que 2 e: " + firstValuesGreaterThanTwo);

//indexOf - Retorna o primeiro índice em que um elemento pode ser encontrado no array
const arra = [1, 3, 3, 4, 3];

const firstIndexOfItem = arra.indexOf(3);

console.log(firstIndexOfItem);

//lastIndexOf - Retorna o último índice em que um elemento pode ser encontrado no array
const firstLastIndexOfItem = arra.lastIndexOf(3);

console.log(firstLastIndexOfItem);

//Includes - Retorna um booleano verificando se determinado elemento existe no array
const hasItemOne = arra.includes(1);
const hasIntemTwo = arra.includes(2);

console.log(hasItemOne);
console.log(hasIntemTwo);

//some - Retona booleano verificando se pelo mesnos um item de um array satisfaz a condição.
const hasSomeEvenNumber = arra.some(value => value % 2 === 0);

console.log(hasSomeEvenNumber);

//2º exemplo some- verificando se algum aluno da lista passou de ano.
const students = [
    {
        nome: 'Heger',
        nota: 5
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
    return studentsList.some(student => student.nota >= 7);
}

console.log("Algum Alunos Aprovados?  " + getEstudantesAprovados(students));


//every - Retorna um booleano verificando se todos os itens de um array satisfazem a condição
//1º exemplo - se todos os numeros do array são pares?
const allEvemNumbers = arra.every(value => value % 2 === 0);

console.log(allEvemNumbers);

//2º exemplo - setodos os alnos passaram
function getTodosEstaoAprovados(studentsList) {
    return studentsList.every(student => student.nota >= 7);
}

console.log("todos os Alunos foram Aprovados?  " + getTodosEstaoAprovados(students));

//Sort  - ordenando o array diacordo com a condições solicitada.
//1º Exemplo - ordem crecente
function sortOdmCrecente(estudantCrecente) {
    return estudantCrecente.sort((current, next) => next.nota - current.nota);
};

console.log(sortOdmCrecente(students));

//2º Exemplo - ordem decrecente
function sortOdmDecrecente(estudantdecrecente) {
    return estudantdecrecente.sort((current, next) => current.nota - next.nota);
};

console.log(sortOdmDecrecente(students));

//reverse - Inverste a ordem do array

console.log("Ordem reversa : " + arr.reverse());


//join - junta todos os elementos de array, separados por um delimitador em uma string
console.log(arra.join('-'));

//reduce - soma todos os elementos dentro de um array
