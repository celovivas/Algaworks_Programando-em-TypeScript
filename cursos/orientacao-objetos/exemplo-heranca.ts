class Funcionario{
    nome: string;
    salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    // Podemos já definir um valor default, CASO VENHA NULL
    pagarImposto(taxa: number = 7.5){
        let temp: number = (this.salario * taxa / 100);
        //console.log(`Total de taxa a pagar: ${temp} de imposto. Percentual de imposto: ${taxa / 100}.%`);
        console.log(`Total de taxa a pagar: ${temp} de imposto. Percentual de imposto: ${taxa}.%`);
    }

}

class Secretario extends Funcionario{

    pagarImposto(taxa: number = 27.5){
        console.log("Secretário paga mais!!!!");
        super.pagarImposto(taxa);
    }

}

let sara = new Funcionario("Sara da Silva", 1000);
let anderson = new Secretario("Anderson Chefe", 1300);

sara.pagarImposto();
sara.pagarImposto(9);

anderson.pagarImposto();
anderson.pagarImposto(30);