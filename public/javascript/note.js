async function noteFormHandler(event) {
  event.preventDefault();

  const note_text = document.querySelector('#note_text').value.trim();
  const appointment_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (note_text) {
    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({
        note_text,
        appointment_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#saveNote').addEventListener('click', noteFormHandler);
