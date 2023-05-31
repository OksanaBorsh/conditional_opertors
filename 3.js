function checkCredentials() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var message;

    if (
        (username === "ivan" && password === "333") ||
        (username === "ssss" && password === "666") ||
        (username === "gibs" && password === "0000")
    ) {
        message = "Ласкаво просимо";
    } else {
        message = "Користувач не знайдений";
    }

    document.getElementById("messageOutput").innerHTML = message;
}
