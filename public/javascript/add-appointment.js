async function newAppointmentHandler(event) {
  event.preventDefault();

  // Get form values
  const patient_id = document.querySelector("#patient_id").value;
  const doctor_id = document.querySelector("#doctor_id").value;
  const date_time = document.querySelector("#date_time").value;

  // Fetch
  const response = await fetch(`/api/appointments`, {
    method: "POST",
    body: JSON.stringify({
      date_time,
      patient_id,
      doctor_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/view-all");
  } else {
    alert(response.statusText);
  }
}

// Save
document
  .querySelector("#saveButton")
  .addEventListener("click", newAppointmentHandler);
