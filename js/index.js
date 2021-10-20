let quoteEl = document.getElementById("quote")
let eyeBtn = document.getElementById("eyemg")

quoteEl.style.display = "none"

document.getElementById("eyemg").addEventListener("click", quoteFunction)

function quoteFunction() {
    if (quoteEl.style.display === "none") {
        quoteEl.style.display = "block"
    } else {
        quoteEl.style.display = "none"
    }
}

// Resize Event
window.addEventListener("load", resizeHandler);
window.addEventListener("resize", resizeHandler);

function resizeHandler() {
    eyeBtn.style.width = (0.23 * document.getElementById("background")) + "px";
    eyeBtn.style.top = (0.283 * window.innerWidth) + "px";
    eyeBtn.style.left = (0.39 * window.innerWidth) + "px";
    console.log("width = " + document.body.style.width)
    console.log("top = " + eyeBtn.style.top)
    console.log("left = " + eyeBtn.style.left)
}