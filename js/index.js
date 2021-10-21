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
    let documentRatio = document.body.clientHeight / document.body.clientWidth
    // eyeBtn.style.width = (1990 * documentRatio) + "px";
    // eyeBtn.style.top = (4350 * documentRatio) + "px";
    // eyeBtn.style.left = (3180 * documentRatio) + "px";
    console.log("width = " + eyeBtn.style.width)
    console.log("top = " + eyeBtn.style.top)
    console.log("left = " + eyeBtn.style.left)
    console.log("number = " + documentRatio + "px")
}