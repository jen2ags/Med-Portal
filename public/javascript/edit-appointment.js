// This file is not in use in the current version.

// Get form values
const link = document.querySelector("#edit-appointment");
const appointment_id = link.dataset.appointment;
const doctor_id = document.querySelector("#doctor_id").value;
const date_time = document.querySelector("#date_time").value;
const patient_id = link.dataset.id;

async function editFormHandler(event) {
  event.preventDefault();
  // Get ID
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Fetch
  const response = await fetch(`/api/appointments/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      date_time,
      doctor_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/view-all/");
  } else {
    alert(response.statusText);
  }
}

// Save Changes
document
  .querySelector("#edit-appointment")
  .addEventListener("click", editFormHandler);
