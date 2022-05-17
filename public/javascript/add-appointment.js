async function newAppointmentHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="appointment-title"]').value;
    const patient_name = document.querySelector('input[name="patient-name"]').value;
    const doctor_name = document.querySelector('input[name="doctor-name"]').value;
    const date_time = document.querySelector('input[name="date"]').value;
  // add const for patient name doctor name date_time
    const response = await fetch(`/api/appointments`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        
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