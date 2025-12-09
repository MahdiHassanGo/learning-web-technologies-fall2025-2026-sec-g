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

function validateAdminLogin() {
    var username = document.getElementById("admin_username").value.trim();
    var password = document.getElementById("admin_password").value.trim();

    clearError("adminLoginError");

    if (username === "" || password === "") {
        showError("adminLoginError", "Admin username or password cannot be empty");
        return false;
    } else if (username.length < 3) {
        showError("adminLoginError", "Admin username must be at least 3 characters");
        return false;
    } else if (password.length < 4) {
        showError("adminLoginError", "Admin password must be at least 4 characters");
        return false;
    }
else{
    alert("Admin login validation passed.");
    return true;
}
 
}
