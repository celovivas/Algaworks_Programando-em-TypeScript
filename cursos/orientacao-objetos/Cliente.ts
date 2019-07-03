class Cliente{

    // prorpiedades
    nome: string;
    idade: number;

    // Forma de criar um construtor no typescript
    // Só pode ter um construtor
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// cria um objeto semalhante ao java
let marcelo: Cliente = new Cliente("Marcelo", 35);
let apresentacao: string = marcelo.apresentar();
console.log(apresentacao);

let obj2: Cliente = new Cliente("Maria", 37);

console.log(obj2.apresentar());