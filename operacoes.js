var calculadora = function (operacao, a, b) {
    var n1 = Number(a)
    var n2 = Number(b)

    if (operacao == 'soma') {
        return (n1 + n2) + ''


    } else if (operacao == 'subtracao') {
        return (n1 - n2) + ''

    }else if(operacao == 'divisao') {
        return (n1 / n2) + ''


    }else if(operacao == 'multiplicacao') {
        return (n1 * n2) + ''
    }

}

module.exports = calculadora;