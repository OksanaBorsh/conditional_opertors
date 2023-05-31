function checkTime() {
    var time = parseInt(document.getElementById("timeInput").value);
    var greeting;

    if (time > 17) {
        greeting = "Добрий вечір";
    } else {
        greeting = "Доброго дня";
    }

    document.getElementById("greetingOutput").innerHTML = greeting;
}
