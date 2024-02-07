const MAX_VISOR_CHAR = 9

function AddNumber(num){
    document.getElementById("total").removeAttribute("hidden")
    if (document.getElementById("total").innerHTML.length < MAX_VISOR_CHAR) {
        document.getElementById("total").innerHTML += num
    }
}

function CleanCurrentEntry() {
    document.getElementById("total").innerHTML = ""
}

function CleanAll() { 
    document.getElementById("total").innerHTML = ""
    document.getElementById("accumulation").innerHTML = ""
    count = []
} 