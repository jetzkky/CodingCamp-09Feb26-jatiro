// Welcome dynamic name
let name = "Jatiro";
document.getElementById("name").innerText = name;

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("name").innerText;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("messageInput").value;

    if (userName === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email must contain '@'");
        return;
    }

    if (isNaN(phone)) {
        alert("Phone must be numeric!");
        return;
    }

    let resultText = `
        Name: ${userName} <br>
        Email: ${email} <br>
        Phone: ${phone} <br>
        Message: ${message}
    `;

    document.getElementById("result").innerHTML = resultText;
});
