let count = []
const MAX_VISOR_CHAR = 9


// Adiciona o valor ao visor 
function AddNumber(num){
    document.getElementById("total").removeAttribute("hidden")
    if (document.getElementById("total").innerHTML.length < MAX_VISOR_CHAR) {
        document.getElementById("total").innerHTML += num
    }
}

// Adiciona operação ao visor 
function CalcAction(action) {
    let currentNumber = document.getElementById("total").innerHTML

    if(currentNumber.length === 0) { return }

    count.push(Number(document.getElementById("total").innerHTML))

    // Garante que o número decimal esteja no formato correto no visor
    if(currentNumber.split('')[currentNumber.length - 1] == '.') {
        document.getElementById("accumulator").removeAttribute("hidden")
        document.getElementById("accumulator").innerHTML += `${document.getElementById("total").innerHTML}0 ${action}`
    }
    else {
        document.getElementById("accumulator").removeAttribute("hidden")
        document.getElementById("accumulator").innerHTML += `${document.getElementById("total").innerHTML} ${action}`
    }

    document.getElementById("total").innerHTML = ""

    count.push(action)

}

let saveAction = 0

// Exibe o resulado
function Result() {
    let currentAccum = document.getElementById("accumulator").innerHTML
    let currentNumber = document.getElementById("total").innerHTML

    if(count.length === 0) { return }

    // Organiza a linha com os calculos
    count.push(Number(document.getElementById("total").innerHTML))
    document.getElementById("accumulator").innerHTML += ` ${document.getElementById("total").innerHTML} =`
    ProcessResult()

}

// Organiza as contas
function ProcessResult() {
    let action = null
    let current = null
    let total = 0

    // Se o último for um operador
    if(isNaN(count[count.length-1])) {
        count.pop
    }
    // AJUSTAR A LÓGICA, ELA FALHA NO SINAL DO MEIO 
    count.forEach(n => {// 1 + 2 (+) 3 + 4
        // Se for um número
        if(!isNaN(n)) {
            if(current == null) {
                current = n
            }
            else {
                total += ProcessAction(current, n, action)
                current = null
            }
        }
        // Se for um operador
        else {
            action = n
            saveAction = n
        }
    })

    // Caso o último número sobre sem par
    if(current != null) {
        total = ProcessAction(total, current, action)
    }

    document.getElementById("total").innerHTML = total.toString().substring(0, MAX_VISOR_CHAR)
    count = []
}

// Realiza a operação
function ProcessAction(num1, num2, action) {
    switch(action) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case 'x': return num1 * num2
        case '/': return num1 / num2
    }
}

// Limpa o valor atual presente no visor
function CleanCurrentEntry() {
    document.getElementById("total").innerHTML = ""
}

// Limpa toda informação do visor e do histórico
function CleanAll() { 
    document.getElementById("total").innerHTML = ""
    document.getElementById("accumulator").innerHTML = ""
    count = []
} 

function AddComma() {
    let currentNumber = document.getElementById("total").innerHTML

    if(currentNumber == '') {
        document.getElementById("total").removeAttribute("hidden")
        document.getElementById("total").innerHTML = "0."
    }
    else if(!currentNumber.includes(".")) {
        document.getElementById("total").innerHTML += "."
    }
}