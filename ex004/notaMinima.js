function notaMinima() {
    var falta = parseFloat(document.getElementById("valor4").value);
    falta += parseFloat(document.getElementById("valor5").value);
    falta = 21 - falta
    alta <= 10 ? alert(`Sua proxima nota tem que ser ${falta} para passar.`): alert("Você já está reprovado! Faz um boa prova e uma boa recuperação.");
}
