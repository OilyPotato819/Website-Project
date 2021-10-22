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
  if (window.innerHeight / window.innerWidth < 0.625) {
    let widthOfBackground = window.innerHeight * 1.6;
    let leftOverflow = (window.innerWidth - widthOfBackground) / 2;

    document.body.style.backgroundSize = "contain";

    eyeBtn.style.width = 0.136 * window.innerHeight + "px";
    eyeBtn.style.left = 0.463 * widthOfBackground + leftOverflow + "px";
    eyeBtn.style.top = 0.483 * window.innerHeight + "px";

    quoteEl.style.top = 0.32 * innerHeight + "px";
    quoteEl.style.left = 0.291 * widthOfBackground + leftOverflow + "px";
    quoteEl.style.width = 0.417 * widthOfBackground + "px";
    quoteEl.style.fontSize = 0.0127 * widthOfBackground + "px";
  } else {
    let heightOfBackground = window.innerWidth * 0.625;
    let topOverflow = (window.innerHeight - heightOfBackground) / 2;

    eyeBtn.style.width = 0.086 * window.innerWidth + "px";
    eyeBtn.style.top = 0.482 * heightOfBackground + topOverflow + "px";
    eyeBtn.style.left = 0.462 * window.innerWidth + "px";

    quoteEl.style.top = 0.32 * heightOfBackground + topOverflow + "px";
    quoteEl.style.left = 0.3 * innerWidth + "px";
    quoteEl.style.width = "40%";
    quoteEl.style.fontSize = "1.27vw";
  }
}