// User Interface Logic
window.onload = function () {
    let body = document.body;
    body.onkeydown = function () {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    };
    body.onkeyup = function () {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    };
}




