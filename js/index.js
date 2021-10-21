let quoteEl = document.getElementById("quote")
let eyeBtn = document.getElementById("eyemg")
let linkEls = document.getElementById("links")

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
    let heightOfBackground = window.innerWidth * 0.625
    let topSection = (window.innerHeight - heightOfBackground) / 2

    eyeBtn.style.width = (0.232 * window.innerWidth) + "px";
    eyeBtn.style.top = (0.40 * heightOfBackground + topSection) + "px";
    eyeBtn.style.left = (0.389 * window.innerWidth) + "px";

    linkEls.style.marginTop = (0.04 * heightOfBackground + topSection) + "px";

    quoteEl.style.top = (0.01 * heightOfBackground + topSection) + "px";
}