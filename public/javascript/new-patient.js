async function signupUser(event) {
    event.preventDefault();
  
    const patient_name = document.querySelector('#username-signup').value.trim();
  
    if (patient_name) {
      const response = await fetch('/api/patients', {
        method: 'post',
        body: JSON.stringify({
          patient_name
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/appointment');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#signup-button').addEventListener('click', signupUser);