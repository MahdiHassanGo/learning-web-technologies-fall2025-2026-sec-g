function showError(id, message) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = message;
}

function clearError(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = "";
}

function validateModeratorLogin() {
    var username = document.getElementById("mod_login_username").value.trim();
    var password = document.getElementById("mod_login_password").value.trim();

    clearError("modLoginError");

    if (username === "" || password === "") {
        showError("modLoginError", "Username or password cannot be empty");
        return false;
    } else if (username.length < 3) {
        showError("modLoginError", "Username must be at least 3 characters");
        return false;
    } else if (password.length < 6) {
        showError("modLoginError", "Password must be at least 6 characters");
        return false;
    } else {
        alert("Moderator validation passed.");
        return true;
    }
}