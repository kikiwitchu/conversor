function converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolar = parseFloat(valor);

    var valorReal = valorDolar * 5

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado de U$" + valor + " em real é R$" + valorReal
    elementoValorConvertido.innerHTML = valorConvertido

}