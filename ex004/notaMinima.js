function notaMinima() {
    var falta = parseFloat(document.getElementById("valor4").value);
    falta += parseFloat(document.getElementById("valor5").value);
    falta = 21 - falta
    let msg = falta <= 10 ? `Sua proxima nota tem que ser ${falta} para passar.`: "Você já está reprovado! Faça uma boa prova e uma boa recuperação."
    alert(msg)
}
