async function deleteAppointmentHandler(event) {
    event.preventDefault();
  
    const link = document.querySelector('#delete');
    const id = link.dataset.appointment;
  
    const response = await fetch(`/api/appointments/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/view-all');
    } else {
      alert(response.statusText);
    }
  }
  
  
  document.querySelector('#delete').addEventListener('click', deleteAppointmentHandler);