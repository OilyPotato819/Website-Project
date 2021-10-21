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
    if ((window.innerHeight / window.innerWidth) < 0.625) {
        let widthOfBackground = window.innerHeight * 1.6
        let leftSection = (window.innerWidth - widthOfBackground) / 2

        document.body.style.backgroundSize = "contain";

        eyeBtn.style.width = (0.136 * window.innerHeight) + "px";
        eyeBtn.style.left = (0.463 * widthOfBackground + leftSection + "px");
        eyeBtn.style.top = (0.483 * window.innerHeight) + "px";

        document.get
    } else {
        let heightOfBackground = window.innerWidth * 0.625
        let topSection = (window.innerHeight - heightOfBackground) / 2

        eyeBtn.style.width = (0.086 * window.innerWidth) + "px";
        eyeBtn.style.top = (0.482 * heightOfBackground + topSection) + "px";
        eyeBtn.style.left = (0.462 * window.innerWidth) + "px";

        linkEls.style.marginTop = (0.03 * heightOfBackground + topSection) + "px";

        quoteEl.style.top = (0.008 * heightOfBackground + topSection) + "px";
    }
}
