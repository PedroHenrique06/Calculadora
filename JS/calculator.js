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
    console.log(count)

}

// Limpa toda informação do visor e do histórico
function CleanAll() { 
    document.getElementById("total").innerHTML = ""
    document.getElementById("accumulator").innerHTML = ""
    count = []
} 

// Limpa o valor atual presente no visor
function CleanCurrentEntry() {
    document.getElementById("total").innerHTML = ""
}

function Percentage() {
    let currentNumber = document.getElementById("total").innerHTML

    if(currentNumber != "") {
        document.getElementById("total").innerHTML = Number(currentNumber)/100
    }
}

// Tornar decimal
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

// Exibe o resulado
function Result() {
    let currentAccum = document.getElementById("accumulator").innerHTML
    let currentNumber = document.getElementById("total").innerHTML

    if(count.length === 0) { return }

    // Inclui o número atual do visor na conta
    count.push(Number(document.getElementById("total").innerHTML))
    // Organiza a linha com os calculos
    document.getElementById("accumulator").innerHTML += ` ${document.getElementById("total").innerHTML} =`
    ProcessResult()

}

// Organiza as contas
function ProcessResult() {
    let actions = []
    let numbers = []
    let total = 0

    for(let i=0; i<count.length; i++) {
        // Se for um operador
        if(isNaN(count[i])) {
            actions.push(count[i])
        }
        // Se for um número
        else {
            numbers.push(Number(count[i]))
        }
      }

      // Percorre o vetor dos operadores enquanto faz as operações e atualiza o vetor dos números
      for(let i=0; i<actions.length; i++) {
        total = ProcessAction(numbers[0], numbers[1], actions[i])
        numbers.shift()
        numbers[0] = total
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
