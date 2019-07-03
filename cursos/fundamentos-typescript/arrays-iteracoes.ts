
let notasAlunos: number[] = [10, 8, 8.7, 7.5, 7.0];

// indicies - in
for (let i in notasAlunos){
    console.log(i);
}

// valores - of
for (let nota of notasAlunos){
    console.log(nota);
}