 const usuario = {
    nome: "Luciano",
    sobreNome: "Pires",
    idade: 23,
}

usuario.ano = 2022;

delete usuario.idade;

console.log(usuario);


let cadastro = [
{
    nome:'Beatriz',
    idade:'22',
    telefone: 25620914,
    amigos: ['Mario', 'Roberta', 'Anita', 'João']
},
{
    nome:'Jorge',
    idade:'18',
    telefone: 45962730,
    amigos: ['Cezar', 'Luiz', 'Felipe', 'Joana']
},
{
    nome:'Carlos',
    idade:'25',
    telefone: 40028922,
    amigos: ['Priscila', 'Samara', 'Roberto', 'Ana']
},
{
    nome:'Sara',
    idade:'19',
    telefone: 95608497,
    amigos: ['Julia', 'Safira', 'Leonardo', 'Junior']
},
{
    nome:'Matheus',
    idade:'24',
    telefone: 23908469,
    amigos: ['Pedro', 'Sarah', 'Luciano', 'Guilherme']
}
]


console.log(cadastro[0].amigos[2]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[3]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[2]);