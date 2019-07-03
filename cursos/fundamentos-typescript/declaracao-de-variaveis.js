// var, let e const
//var
function iniciarTime(iniciaJogo) {
    var time = "Messi e amigos";
    // OCORRE O HOISTING! -> a declaracao do var cidade sobe para aqui
    if (iniciaJogo) {
        var cidade = " em Uberlândia";
    }
    console.log(time + " vai jogar " + cidade);
}
iniciarTime(true);
//let
function iniciarTime2(iniciaJogo) {
    var time = "Esporte Clube Vitória";
    var cidade;
    if (iniciaJogo) {
        cidade = " em Salvador";
    }
    console.log(time + " vai jogar " + cidade);
}
iniciarTime2(true);
//const - eh um let, porém constante. não dá para 
function iniciarTime3(jogaEmSalvador) {
    var time = "Esporte Clube Vitória";
    var cidade = "em Salvador-BA";
    if (jogaEmSalvador) {
        //cidade = " em Salvador";
    }
    console.log(time + " vai jogar " + cidade);
}
iniciarTime3(true);
