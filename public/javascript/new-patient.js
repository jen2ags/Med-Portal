async function signupUser(event) {
  event.preventDefault();

  // Get form values
  const patient_name = document.querySelector("#username-signup").value.trim();

  // Confirm form is complete
  if (patient_name) {
    const response = await fetch("/api/patients", {
      method: "post",
      body: JSON.stringify({
        patient_name,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/appointment");
    } else {
      alert(response.statusText);
    }
  }
}

// Sign Up Button Listener
document.querySelector("#signup-button").addEventListener("click", signupUser);
