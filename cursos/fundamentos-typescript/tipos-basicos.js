// boolean
var estaPago;
//number
var idade = 35;
var valor = 29.90;
//string
var nome = "Marcelo";
var nomeCompleto = 'Marcelo Vivas dos Santos';
//Template String (Interpolação de strings)
console.log("Ol\u00E1! Meu nome \u00E9 " + nomeCompleto + " e tenho " + idade + " anos.");
// arrays
var notas = [5, 6, 7, 8];
// tuple - Tuplas
var alunos = ["João", 10];
var infoUsuario = ["Marcelo", 35, "Bahia", "222.222.222-20", "71 99199-9999"];
console.log("Nome: " + infoUsuario[0] + ", tenho " + infoUsuario[1] + ", nasci na " + infoUsuario[2] + ". \n    Meu telefone \u00E9 " + infoUsuario[infoUsuario.length - 1]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
;
var corDeFundo = Cor.Azul;
console.log(corDeFundo);
// Any - Aceita qualquer coisa
var algumValor = 4;
algumValor = "Agora é string";
algumValor = idade;
// O any é muito util para migração e retorno de dados de outras bibliotecas,
// de integrações e para receber retornos de metodos rest
// void - Não retorna nada
function atualizaValor() {
}
// null e undefined
var returnaNull = undefined;
var retornaUndefined = null;
