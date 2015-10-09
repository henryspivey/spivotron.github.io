$(document).ready(function(){
	var images = "https://raw.githubusercontent.com/spivotron/spivotron.github.io/master/images/images.json";
	function displayPhotos(data) {
		console.log(data);
	}
	$.getJSON(images, displayPhotos);


});
