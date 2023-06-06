
const currentData = JSON.parse(localStorage.getItem('blogDetail'))

$('#leadTitle').innerHTML = currentData.title;
$('.blog-detail').innerHTML = currentData.detail;