async function noteFormHandler(event) {
  event.preventDefault();

  const note_text = document.querySelector('textarea[name="note-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (note_text) {
    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        note_text
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

document.querySelector('.note-form').addEventListener('submit', noteFormHandler);
