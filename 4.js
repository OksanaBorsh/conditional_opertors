function findMax() {
    var number1 = parseFloat(document.getElementById("number1Input").value);
    var number2 = parseFloat(document.getElementById("number2Input").value);
    var number3 = parseFloat(document.getElementById("number3Input").value);

    var max;

    if (number1 >= number2 && number1 >= number3) {
        max = number1;
    } else if (number2 >= number1 && number2 >= number3) {
        max = number2;
    } else {
        max = number3;
    }

    document.getElementById("maxOutput").innerHTML = "Максимальне число: " + max;
}
