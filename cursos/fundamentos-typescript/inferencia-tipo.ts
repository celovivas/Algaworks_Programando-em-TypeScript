let quantidade = 20;

// abaixo não compila. Ele espera um number
//quantidade = "uma string";

let x = [1, 2, null];

x[0] = 10;
x[2] = 10;

// Não compila
//x[0] = "String";


// Contextual Typing --> Ele sabe que espera um MouseEvent, então ele mesmo deduz.
// Caso 1
window.onmousedown = function (this, evento){
    console.log(evento.button);
    
    // Abaixo dá erro pois ele sabe que no MouseEvent não existe esta propriedade
    //console.log(evento.buton);
}

// Caso 2
//-- Neste caso, deixamos explícito que o evento pode ser de qq tipo
window.onmousedown = function (this, evento: any){
    // Neste caso ele aceita as duas linhas, pois ele não sabe o tipo do evento
    // e se não sabe, pode ter os dois atributos, por isso não dá erro de compilacao
    console.log(evento.button);
    console.log(evento.buton);
}