$('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    company: $('#name').value,
    email: $('#mail').value,
    message: $('#mess').value,
  }
  fetch(`${API_ENDPOINT}/api/contact`, {
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'no-cors'
    
  }).then(r => {
    console.log(r.clone().);
  }).then(fullfiled => {
    
    
  })
});
