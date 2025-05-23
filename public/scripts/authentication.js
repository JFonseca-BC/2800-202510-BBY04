document.addEventListener("DOMContentLoaded", function () {
    setupFormSwitching();
    setupRegisterHandler();
    setupLoginHandler();
});

/**
 * Attaches click event handlers to switch between login and registration forms.
 */
function setupFormSwitching() {
    document.getElementById("loginBtn").addEventListener("click", () => switchForm("login"));
    document.getElementById("registerBtn").addEventListener("click", () => switchForm("register"));
}

/**
 * Toggles the active state of login or register form and buttons based on type.
 * 
 * @param {string} type represents either "login" or "register"
 */
function switchForm(type) {
    document.getElementById("loginForm").classList.toggle("active", type === "login");
    document.getElementById("registerForm").classList.toggle("active", type === "register");
    document.getElementById("loginBtn").classList.toggle("active", type === "login");
    document.getElementById("registerBtn").classList.toggle("active", type === "register");
}

/**
 * Handles user registration form submission and validates inputs, sending user 
 * data to the backend once validated.
 */
function setupRegisterHandler() {
    document.getElementById("registerForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!validateFields({ email, password, confirmPassword })) return;

        const response = await sendData("/register", { name, email, password });

        if (response.ok) {
            sessionStorage.setItem("userEmail", email); // Store email for autofill
            alert("Registration successful! Redirecting to login.");
            switchForm("login"); // Switch to login form
        } else {
            const errorText = await response.text();
            alert("Registration failed: " + errorText);
        }
    });
}

/**
 * Handles user login form submission and validates inputs, sending credentials to 
 * the backend once validated. Also autofills email if stored from a previous 
 * registration.
 */
function setupLoginHandler() {
    document.getElementById("loginForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (!validateFields({ email, password })) return;

        const response = await sendData("/login", { email, password });

        if (response.ok) {
            alert("Login successful! Redirecting to main page.");
            window.location.href = "/main"; //Redirect after successful login
        } else {
            const errorText = await response.text();
            alert("Login failed: " + errorText);
        }
    });

    // Autofill email if available
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) document.getElementById("loginEmail").value = storedEmail;
}

/**
 * Validates required input fields (email, password, confirmPassword) with format and logic checks.
 * 
 * @param {Object} fields represents any object which includes email, password, and confirmPassword fields
 * @returns {boolean} true if all fields pass the validation checks or false otherwise
 */
function validateFields({ email, password, confirmPassword }) {
    if (!email || !password || (confirmPassword !== undefined && !confirmPassword)) {
        alert("Please fill in all fields.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (confirmPassword !== undefined && password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

/**
 * Sends a POST request to the backend with user data as JSON.
 * 
 * @param {string} url represents the endpoint to send data to (e.g., "/login", "/register")
 * @param {Object} data represents the data object to send in the request body
 * @returns {Promise<Response>} the fetch response
 */
async function sendData(url, data) {
    return await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}
