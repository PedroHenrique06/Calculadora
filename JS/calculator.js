let count = []
const MAX_VISOR_CHAR = 9



function AddNumber(num){
    document.getElementById("total").removeAttribute("hidden")
    if (document.getElementById("total").innerHTML.length < MAX_VISOR_CHAR) {
        document.getElementById("total").innerHTML += num
    }
}

function CalcAction(action) {
    let currentNumber = document.getElementById("total").innerHTML

    if(currentNumber.length === 0) { return }

    count.push(Number(document.getElementById("total").innerHTML))

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

function CleanCurrentEntry() {
    document.getElementById("total").innerHTML = ""
}

function CleanAll() { 
    document.getElementById("total").innerHTML = ""
    document.getElementById("accumulator").innerHTML = ""
    count = []
} 