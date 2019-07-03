// var, let e const

//var
function iniciarTime(iniciaJogo: boolean){
    
    var time = "Messi e amigos";
    // OCORRE O HOISTING! -> a declaracao do var cidade sobe para aqui

    if (iniciaJogo){
        var cidade = " em Uberlândia";
    }

    console.log(`${time} vai jogar ${cidade}`);
}

iniciarTime(true);


//let
function iniciarTime2(iniciaJogo: boolean){
    
    let time = "Esporte Clube Vitória";
    let cidade: String;

    if (iniciaJogo){
        cidade = " em Salvador";
    }

    console.log(`${time} vai jogar ${cidade}`);
}

iniciarTime2(true);

//const - eh um let, porém constante. não dá para 
function iniciarTime3(jogaEmSalvador: boolean){
    
    let time: String = "Esporte Clube Vitória";
    const cidade: String = "em Salvador-BA";

    if (jogaEmSalvador){
        //cidade = " em Salvador";
    }

    console.log(`${time} vai jogar ${cidade}`);
}

iniciarTime3(true);