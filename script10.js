let firstResult =
    function addFunction() {
        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);
        let c = Number(document.getElementById("c").value);
        let d = (a + b + c) / 3;
        document.getElementById("firstQuestion").innerHTML = `A média das três notas é ${d.toFixed(1)}.`;
    };

let checkPassword =
    function keyFunction() {
        let valuePassword = Number(document.getElementById("password").value);
        let checkKey = (valuePassword == 2002 ? "Senha Válida" : "Senha Inválida")
        document.getElementById("secondQuestion").innerHTML = `${checkKey}.`;
    };

let thirdResult =
    function interspaceFunction() {
        let x = Number(document.getElementById("x").value);
        let interspace;
        if (0 <= x && x <= 25) {
            interspace = "no intervalo [0 - 25]";
        } else if (25 < x && x <= 50) {
            interspace = "no intervalo [25 - 50]";
        } else if (50 < x && x <= 75) {
            interspace = "no intervalo [50 - 75]";
        } else if (75 < x && x <= 100) {
            interspace = "no intervalo [75 - 100]";
        } else {
            interspace = "fora de intervalo";
        }
        document.getElementById("thirdQuestion").innerHTML = `O valor digitado se encontra ${interspace}.`;
    };

let fourthResult =
    function paymentFunction() {
        let originalPayment = Number(document.getElementById("originalPayment").value);
        let newPayment;
        let addedValue;
        let percentage;
        if (0 <= originalPayment && originalPayment <= 400) {
            percentage = 15;
        } else if (400 < originalPayment && originalPayment <= 800) {
            percentage = 12;
        } else if (800 < originalPayment && originalPayment <= 1200) {
            percentage = 10;
        } else if (1200 < originalPayment && originalPayment <= 2000) {
            percentage = 7;
        } else {
            percentage = 4;
        }
        newPayment = originalPayment + (originalPayment * (percentage / 100));
        addedValue = newPayment - originalPayment;

        document.getElementById("fourthQuestion").innerHTML = `Novo salario: R$${newPayment.toFixed(2)}, 
        Reajuste salarial: R$${addedValue.toFixed(2)}, Percentual: ${percentage}%.`;
    };

let fifthResult =
    function paymentFunction() {
        let income = Number(document.getElementById("income").value);
        let tax;
        if (0 <= income && income <= 2000) {
            tax = "Isento de Imposto";
        } else if (2000 < income && income <= 3000) {
            tax = (income - 2000) * 0.08;
        } else if (3000 < income && income <= 4500) {
            tax = ((income - 3000) * 0.18) + 80;
        } else{
            tax = ((income - 4500) * 0.28) + 350;
        }
        document.getElementById("incomeTax").innerHTML = `Imposto R$${tax.toFixed(2)}.`;
    };