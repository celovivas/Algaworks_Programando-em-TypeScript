interface Pessoa{
    idade: number;
    // a interrogacao indica que este atributo não é obrigatorio ser preenchido.
    sexo?: string; 
}

function imprimirIdade1(pessoa){
    console.log(pessoa.idade);
}

function imprimirIdade2(pessoa: {idade: number}){
    console.log(pessoa.idade);
}

function imprimirIdade3(pessoa: Pessoa){
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: "João Marcos"};

// perceba que a funcao nao especifica o tipo do parametro.
// Entao ela compila, mesmo não tendo certeza se possui um atributo do tipo idade.
// Vai imprimir undefined pq realmente não existe.
imprimirIdade1(joaoMarcos);

let joaoGabriel = {nome: "João Gabriel", idade: 30};
// Neste caso a funcao espera que o parametro possua um atributo do tipo idade e que seja number
imprimirIdade2(joaoGabriel);


let joaoOliveira = {nome: "João Oliveira"};
// Não compila pois não segue o "contrato" da interface definida, ou seja nao possui idade
//imprimirIdade3(joaoOliveira);


let joaoMaciel = {nome: "João Maciel", idade: 40};
imprimirIdade3(joaoMaciel);

let joaoMarcelo = {nome: "Marcelo Vivas", idade: 35, sexo: "Masculino"};
imprimirIdade3(joaoMarcelo);


