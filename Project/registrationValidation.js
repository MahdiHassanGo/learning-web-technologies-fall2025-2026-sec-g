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

function validateRegistration() {
    var username = document.getElementById("reg_username").value.trim();
    var email    = document.getElementById("reg_email").value.trim();
    var password = document.getElementById("reg_password").value.trim();
    var cpass    = document.getElementById("reg_confirm_password").value.trim();

    clearError("registrationError");

    if (username === "" || email === "" || password === "" || cpass === "") {
        showError("registrationError", "All fields are required");
        return false;
    } else if (username.length < 3) {
        showError("registrationError", "Username must be at least 3 characters");
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("registrationError", "Invalid email format");
        return false;
    } else if (password.length < 4) {
        showError("registrationError", "Password must be at least 4 characters");
        return false;
    } else if (password !== cpass) {
        showError("registrationError", "Password and Confirm Password must match");
        return false;
    }
   else{
    alert("validation passed.");
    return true;
}
}
