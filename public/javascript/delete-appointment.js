async function deleteAppointmentHandler(event) {
  event.preventDefault();

  // Get form values
  const link = document.querySelector("#delete");
  const id = link.dataset.appointment;

  // Fetch
  const response = await fetch(`/api/appointments/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/view-all");
  } else {
    alert(response.statusText);
  }
}

// Delete
document
  .querySelector("#delete")
  .addEventListener("click", deleteAppointmentHandler);
