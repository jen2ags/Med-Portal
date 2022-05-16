async function newAppointmentHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="appointment-title"]').value;
    const post_url = document.querySelector('input[name="appointment-url"]').value;
  
    const response = await fetch(`/api/appointments`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/appointment');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#new-appointment-form').addEventListener('submit', newAppointmentHandler);