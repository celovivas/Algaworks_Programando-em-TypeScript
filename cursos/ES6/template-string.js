const numeros = ['12', '17', '21', '23', '28', '32'];

const maioresDeVinte = numeros
        .filter(item => item > 20)
        .filter(num => num < 30)
        //.map(num => "R$ " + num + ",00");
        .map(num => `R$ ${num},00.`);


console.log(maioresDeVinte);