async function newAppointmentHandler(event) {
    event.preventDefault();
  
    const patient_id = document.querySelector('input[name="appointment-patient_id"]').value;
    const post_url = document.querySelector('input[name="appointment-url"]').value;
  
    const response = await fetch(`/api/appointments`, {
      method: 'POST',
      body: JSON.stringify({
        patient_id,
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