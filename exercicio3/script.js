/////////////////////////// EXERCÍCIO 3 ///////////////////////////

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};
console.log(pokemon1);

/* a) Crie uma cópia do objeto, acima, mantendo a estrutura, 
mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água” */

const pokemon2 = {
    ...pokemon1
}
pokemon2.nome = 'Squirtle';
pokemon2.tipo = 'Água';

console.log(pokemon2);

/* b) No objeto original, adicione mais uma propriedade, 
chamada `ataques`. Esta propriedade deve guardar um array
de objetos com a estrutura abaixo. Inicie a propriedade como 
um array vazio, e crie o objeto abaixo utilizando push() */

pokemon1.ataques = [];

console.log(pokemon1);

pokemon1.ataques.push({ nome: 'Investida', dano: 40, precisao: 100, tipo: 'Normal' });

// c)
// pokemon2.ataques = {
//     ...pokemon1.ataques
// };
pokemon2.ataques = [
    ...pokemon1.ataques
];

console.log(pokemon2);

// d)
pokemon1.ataques.push({ nome: 'Folha Navalha', dano: 45, precisao: 100, tipo: 'Grama' });

// e)
const ataqueSquirtle = {
    nome: 'Jato de Água',
    dano: 40,
    precisao: 100,
    tipo: 'Água'
}

pokemon2.ataques.push(ataqueSquirtle);

console.log('Pokemon 1: ', pokemon1);
console.log('Pokemon 2: ', pokemon2);