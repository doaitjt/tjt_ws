
const currentData = JSON.parse(localStorage.getItem('eventDetail'))

$('#leadTitle').innerHTML = currentData.title;
$('.blog-detail').innerHTML = currentData.detail;