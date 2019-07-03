var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    // Podemos já definir um valor default, CASO VENHA NULL
    Funcionario.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 7.5; }
        var temp = (this.salario * taxa / 100);
        //console.log(`Total de taxa a pagar: ${temp} de imposto. Percentual de imposto: ${taxa / 100}.%`);
        console.log("Total de taxa a pagar: " + temp + " de imposto. Percentual de imposto: " + taxa + ".%");
    };
    return Funcionario;
}());
var Secretario = /** @class */ (function (_super) {
    __extends(Secretario, _super);
    function Secretario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Secretario.prototype.pagarImposto = function (taxa) {
        if (taxa === void 0) { taxa = 27.5; }
        console.log("Secretário paga mais!!!!");
        _super.prototype.pagarImposto.call(this, taxa);
    };
    return Secretario;
}(Funcionario));
var sara = new Funcionario("Sara da Silva", 1000);
var anderson = new Secretario("Anderson Chefe", 1300);
sara.pagarImposto();
sara.pagarImposto(9);
anderson.pagarImposto();
anderson.pagarImposto(30);
