
const currentData = JSON.parse(localStorage.getItem('storyDetail'))

$('#leadTitle').innerHTML = currentData.title;
$('.blog-detail').innerHTML = currentData.detail;