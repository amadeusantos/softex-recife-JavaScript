function media() {
    var media = parseFloat(document.getElementById("valor1").value);
    media += parseFloat(document.getElementById("valor2").value);
    media += parseFloat(document.getElementById("valor3").value);
    media /= 3;
    if (media >= 7) {
        alert("Você foi aprovado!");
    } else {
        alert("Você foi reprovado! Boa sorte na recuperação.")
    }
}