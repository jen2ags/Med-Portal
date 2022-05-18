async function loginUser(event) {
  event.preventDefault();
  // Get form values
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  // Check if form complete
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
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
// Login User
document.querySelector("#login-form").addEventListener("submit", loginUser);
