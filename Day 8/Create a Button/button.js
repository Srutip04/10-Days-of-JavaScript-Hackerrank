let btnCounter = document.getElementById('btn');
let count = 0;
btnCounter.innerHTML = count;
btnCounter.addEventListener("click", () => {
    btnCounter.innerHTML = ++count;
});