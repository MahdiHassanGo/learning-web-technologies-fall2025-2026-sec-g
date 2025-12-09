function showError(id, message) {
    var el = document.getElementById(id);
    if (el) {
        el.innerHTML = message;
    }
}

function clearError(id) {
    var el = document.getElementById(id);
    if (el) {
        el.innerHTML = "";
    }
}

function validateLogin() {
    var username = document.getElementById("login_username").value.trim();
    var password = document.getElementById("login_password").value.trim();

    clearError("loginError");

    if (username === "" || password === "") {
        showError("loginError", "Username or password cannot be empty");
        return false;
    } else if (username.length < 3) {
        showError("loginError", "Username must be at least 3 characters");
        return false;
    } else if (password.length < 4) {
        showError("loginError", "Password must be at least 4 characters");
        return false;
    }

       else{
    alert("validation passed.");
    return true;
}
}
