// Toggle Functionality to the Password Field:-

document.addEventListener("DOMContentLoaded", () => {
    const password = document.querySelector("#pass");
    const eye = document.querySelector("#eye");

    // Function to toggle the visibility of the eye icon
    const toggleEyeIcon = () => {
        if (password.value === "") {
            eye.style.display = "none";
        } else {
            eye.style.display = "block";
        }
    };

    // Initial check to set the visibility of the eye icon
    toggleEyeIcon();

    // Listen for input events on the password field
    password.addEventListener("input", toggleEyeIcon);

    // Event listener for click on the eye icon to toggle password visibility
    eye.addEventListener("click", () => {
        if (eye.classList.contains("fa-eye-slash")) {
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
            password.type = "text";
        } else {
            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");
            password.type = "password";
        }
    });
});

// Toggling the Dark and Light Mode Feature:-

const mode = document.querySelector("#mode");
const mainElement = document.querySelector(".main");

// Check for saved dark mode preference in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    mainElement.classList.add("dark");
    mode.style.color = "white";
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");
}

mode.addEventListener("click", () => {
    mainElement.classList.toggle("dark");

    if (mainElement.classList.contains("dark")) {
        mode.style.color = "white";
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");
        localStorage.setItem("darkMode", "enabled");
    } else {
        mode.style.color = "black";
        mode.classList.remove("fa-sun");
        mode.classList.add("fa-moon");
        localStorage.setItem("darkMode", "disabled");
    }
});
