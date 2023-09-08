function add() {
    var button = document.createElement("button");
    var text = document.getElementById("input").value;
    // Set the text content of the button.

    button.dataset["data"] = Number(1);
    button.dataset["text"] = text
    button.textContent = text + ":1";
    button.classList.add("button-30");

    button.onclick = function(event) {
        increment(event.target);
    };
    document.body.appendChild(button);

    document.getElementById("input").value = "";

}

function increment(t) {

    var updateCounter = parseInt(t.dataset["data"]) + 1;
    t.dataset["data"] = updateCounter;

    t.textContent = t.dataset["text"] + ": " + updateCounter;

}

function check(e) {
    if (e.key === "Enter") {
        console.log(e.target.value)
        add()
    }
}