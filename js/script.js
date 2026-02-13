document.addEventListener("DOMContentLoaded", function() {
    // Welcome dynamic name
    let username = "Jatiro";
    document.getElementById("username").innerText = username;

    // Form Validation
    document.getElementById("messageForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let Name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("messageInput").value;

        if (Name === "" || email === "" || phone === "" || message === "") {
            alert("All fields must be filled!");
            return;
        }
        
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        let phonePattern = /^\d+$/;
        if (!phonePattern.test(phone)) {
        alert("Phone must contain digits only!");
        return;
        }

        let resultText =
        "Name: " + Name + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Message: " + message;

        document.getElementById("result").innerHTML = resultText;
    });
});
