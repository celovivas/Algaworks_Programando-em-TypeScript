var Cliente = /** @class */ (function () {
    // Forma de criar um construtor no typescript
    // Só pode ter um construtor
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1! Meu nome \u00E9 " + this.nome + " e tenho " + this.idade + " anos.";
    };
    return Cliente;
}());
// cria um objeto semalhante ao java
var marcelo = new Cliente("Marcelo", 35);
var apresentacao = marcelo.apresentar();
console.log(apresentacao);
var obj2 = new Cliente("Maria", 37);
console.log(obj2.apresentar());
