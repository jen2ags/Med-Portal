async function handleNote(event) {
    event.preventDefault();
  
    const note_text = document.querySelector('#note_text').value.trim();
    const link = document.querySelector('#saveNote');
    const appointment_id = link.dataset.appointment;
  
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
  
  document.querySelector('#saveNote').addEventListener('click', handleNote);
  