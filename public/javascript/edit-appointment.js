async function editFormHandler(event) {
  event.preventDefault();

  const appointment_id = document.querySelector('#appointment_id').value;
  const note_text = document.querySelector('#note_text').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/appointment/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      appointment_id,
      note_text,
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
