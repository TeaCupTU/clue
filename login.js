function validateForm() {
    var answer = document.getElementById("answer").value;

    // Check if the answer is correct
    if (answer === "03/03/2004") {
      window.location.href = "welcome.html"; // Redirect to the next page
      return false; // Prevent form submission
    } else {
      if (answer === "11/09/2022") {
        window.location.href = "page2.html"; // Redirect to the next page
        return false; // Prevent form submission
      } else {
        alert("Incorrect answer! Please try again."); // Display an error message
        return false; // Prevent form submission
      }
    }
  }