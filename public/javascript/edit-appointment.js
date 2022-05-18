const link = document.querySelector('#edit-appointment');
const appointment_id = link.dataset.appointment;
const doctor_id = document.querySelector('#doctor_id').value;
const date_time = document.querySelector('#date_time').value;
const patient_id = link.dataset.id;

console.log(patient_id);
console.log(appointment_id);

async function editFormHandler(event) {
  event.preventDefault();

  console.log('test');

  const response = await fetch(`/api/appointments/${appointment_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      date_time,
      patient_id,
      doctor_id
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/view-all/');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#edit-appointment')
  .addEventListener('submit', editFormHandler);
