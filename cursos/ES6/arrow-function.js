const precos = ['10', '23', '19', '25', '34'];

// o array possui uma funcao map
// ou seja, aplicar "alguma coisa" em cada valor do array
// Neste caso, vamos aplicar uma funcao em cada valor do array e retorna outro array 
// com os valores aplicados
// neste caso, para cada valor, retornamos ela "formatada com o R$".
// o atributo preco é cada item do array precos
const valoresEmReais1 = precos.map(function(preco){
    return "R$" + preco + ",00";
});


// Utilizando arrow function no codigo acima...
const valoresEmReais2 = precos.map((preco) => {
    return "R$" + preco + ",00";
});

// Resumindo ainda mais pois temos somente 1 linha de instrução
// Podemos ler: Para cada item do array precos (chame-o de preco, por exemplo), retorne a instrucao a seguir.
const valoresEmReais3 = precos.map(preco => {return "R$" + preco + ",00"});

// ou assim, ainda mais reduzido
const valoresEmReais4 = precos.map(preco => "R$" + preco + ",00");


console.log(valoresEmReais1);
console.log(valoresEmReais2);
console.log(valoresEmReais3);
console.log(valoresEmReais4);

// outro exemplo...
const acimaDeVinte1 = precos.filter(preco => {
    
    if (preco > 20){
        return preco;
    }
    // Ou usando operador ternario
    //return (preco>20?preco:null);
});

// utilizando arrow function...
const acimaDeVinte2 = precos.filter(item => item > 20);

// podemos utilizar as funcoes juntas...
const acimaDeVinte3 = precos.filter(item => item > 20).filter(preco => preco < 30);

// podemos utilizar as várias funcoes juntas...
const acimaDeVinte4 = precos
        .filter(item => item > 20)
        .filter(preco => preco < 30)
        .map(preco => "R$ " + preco + ",00");

console.log(acimaDeVinte1);
console.log(acimaDeVinte2);
console.log(acimaDeVinte3);
console.log(acimaDeVinte4);