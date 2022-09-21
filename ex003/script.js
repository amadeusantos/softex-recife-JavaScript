function calcular() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var operador = document.getElementById("operador").value;
    console.log(valor1== "", operador)

    if (valor1 == "" || valor2 == "" || operador == "") {
        alert("Algum valor ou operador não informado! Tente novamente.");
    } else if ( valor2 == 0 && operador == "/") {
        alert( "Divisão por 0 não são possiveis. Tente novamente.");
    } else {
        if (operador == "+") {
            alert(`Soma ${valor1} + ${valor2} = ${valor1 + valor2}`)
        } else if (operador == "-") {
            alert(`Soma ${valor1} - ${valor2} = ${valor1 - valor2}`)
        } else if (operador == "*") {
            alert(`Soma ${valor1} * ${valor2} = ${valor1 * valor2}`)
        } else if (operador == "/") {
            alert(`Soma ${valor1} / ${valor2} = ${valor1 / valor2}`)
        } else {
            alert("Operador não encontrado tente utilizar '+', '-', '*' ou '/'.")
        }
    }
}