// boolean
let estaPago: boolean;

//number
let idade: number = 35;
let valor: number = 29.90;

//string
let nome: string = "Marcelo";
let nomeCompleto: string = 'Marcelo Vivas dos Santos';

//Template String (Interpolação de strings)
console.log(`Olá! Meu nome é ${nomeCompleto} e tenho ${idade} anos.`);

// arrays
let notas: number[] = [5, 6, 7, 8];

// tuple - Tuplas
let alunos: [string, number] = ["João", 10];
let infoUsuario: [string, number, string, string, string] = 
    ["Marcelo", 35, "Bahia", "222.222.222-20", "71 99199-9999"];

console.log(`Nome: ${infoUsuario[0]}, tenho ${infoUsuario[1]}, nasci na ${infoUsuario[2]}. 
    Meu telefone é ${infoUsuario[infoUsuario.length-1]}`);


// Enum
enum Cor {Verde, Amarelo, Azul};
let corDeFundo: Cor = Cor.Azul;

console.log(corDeFundo);

// Any - Aceita qualquer coisa
let algumValor: any = 4;
algumValor = "Agora é string";
algumValor = idade;

// O any é muito util para migração e retorno de dados de outras bibliotecas,
// de integrações e para receber retornos de metodos rest


// void - Não retorna nada
function atualizaValor(): void {
}

// null e undefined
let returnaNull = undefined;
let retornaUndefined = null;
