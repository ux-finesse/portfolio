document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      //stop default submission except validation success
      event.preventDefault();

      //get the value typed in by users and remove white space start and end.
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      //first check if the input fields are empty
      if (name == "" || email == "" || message == "") {
        alert("All fields are required");
        return;
      }

      //name validation (checks if the user inputted at least 2 characters)
      if (name.length < 2) {
        alert("Name must be aleast 2 characters.");
        return;
      }

      // email validation (simple regex validation)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return;
      }

      //message validation (checks the message lenght)
      if (message.length < 10) {
        alert("Message must contain at least 10 characters");
        return;
      }

      //if all requirements have been met
      window.location.href = "success.html";
    });
});
