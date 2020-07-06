const pets = [
    {
        name: "toto",
        type: "Dog",
        age: 10,
        weight: 3
    },
    {
        name: "Miau",
        type: "Cat",
        age: 2,
        weight: 0.5
    },
    {
        name: "Gogle",
        type: "Peixe",
        age: 1,
        weight: 0.01
    },
    {
        name: "tote",
        type: "Dog",
        age: 34,
        weight: 4
    }
]
//Função filter

// 2º Exemplo
/**
* const eMenorQueCinco = (numero) => {
*   return numero < 5;
*}
*
*const newPets = pets.filter(({ age }) => eMenorQueCinco(age))  
*
*/


//Filtrar os animais que tem menos de 5 anos
/**
* 1] exemplo
* const newPets = pets.filter((pet) => {
*   return pet.age < 5
* }) 
*/

//console.log(pets);
//console.log(newPets);

/**
*    //Função Map
*    //1º Exemplo - Ele tras somente o nome da do arrey, dependente de sua escolha.
*    const petNomes = pets.map((pet) => {
*        return pet.name
*    });
*
*   console.log(petNomes)
*/

/**
* //forEatch
*
*const forEatchPatName = []
*
*pets.forEach((pet) => {
*    forEatchPatName.push(pet.name);
*})
*
*console.log(forEatchPatName);
*/

//reduce
//ex. 01 - samar o peso dos animais
/**
const totalWeight = pets.reduce((total, pet) => {

    return total + pet.weight

}, 0);

console.log(totalWeight);
*/

//Ex. 02 - descobrindo dois valores idade e peso
/*
const totalWeight = pets.reduce((total, pet) => {

    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    };
}, { totalAge: 0, totalWeight: 0 });

console.log(totalWeight);
*/
//Ex. 03 - usando reduce como um filter, selecionando todos os dogs e somando seus pesos
/**
 * const totalWeight = pets.reduce((total, pet) => {

    if (pet.type !== 'Dog') return total

    return total + pet.weight

}, 0);

console.log(totalWeight);
 */

//Redudancia
// fazer um filter e depois uma reduce
const totalWeightDogs = pets.filter((pet) => {
  return pet.type === 'Dog'  
})
.reduce((total, pet) => {
    return total + pet.weight
}, 0);

console.log(totalWeightDogs);
