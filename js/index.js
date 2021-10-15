let quoteEl = document.getElementById("quote")
let eyeBtn = document.getElementById("eyemg")

quoteEl.style.display = "none"

document.getElementById("eyemg").addEventListener("click", quoteFunction)
window.addEventListener("resize", findMargin)
window.addEventListener("load", findMargin)

function quoteFunction() {
    if (quoteEl.style.display === "none") {
        quoteEl.style.display = "block"
    } else {
        quoteEl.style.display = "none"
    }
}

function findMargin() {
    console.log(innerHeight + "px high, " + innerWidth + "px wide")
}