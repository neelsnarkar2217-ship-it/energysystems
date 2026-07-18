const form = document.getElementById("contact-form");
const successBox = document.getElementById("form-success");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        fullName: document.getElementById("name").value,
        companyName: document.getElementById("company").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        serviceRequired: document.getElementById("service").value,
        projectLocation: document.getElementById("location").value,
        projectDescription: document.getElementById("message").value
    };

    try {

        const response = await fetch("https://energysystems.onrender.com/api/enquiry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            successBox.style.display = "block";
            form.reset();
        } else {
            alert(result.message);
        }

    } catch (err) {
        alert("Unable to submit enquiry.");
        console.log(err);
    }
});