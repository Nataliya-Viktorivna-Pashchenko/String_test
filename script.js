document.querySelector(".btn").addEventListener("click", () => {
    let data = document.querySelector(".inputString").value;
    document.querySelector(".printString").innerHTML = data;
})