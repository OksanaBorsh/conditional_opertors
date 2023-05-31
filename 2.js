function checkName() {
    var name = document.getElementById("nameInput").value;
    var greeting;

    if (name === "John") {
        greeting = "Привіт " + name;
    } else {
        greeting = "Я вас не знаю";
    }

    document.getElementById("greetingOutput").innerHTML = greeting;
}
