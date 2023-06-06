$('#subForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    email: $('#leave-mail').value,
  }
  fetch(`${API_ENDPOINT}/api/email-subscribe`, {
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'no-cors'
    
  }).then(r => r.json()).then(fullfiled => {
    
    console.log(fullfiled);
  });
});