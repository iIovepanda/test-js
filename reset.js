(() => {
    const $counter = document.getElementById("js-counter");
    let $counterBox  = document.querySelector(".counter");
    const clickHandler = () => {
        $counter.textContent = 0;
        $counterBox.style.backgroundColor = "#FFFFFF";
    }
    document.getElementById("js-reset-button").addEventListener
    ("click",clickHandler);
})();