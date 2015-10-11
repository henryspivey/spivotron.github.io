$(document).ready(function(){
	var images = "images/images.json";
	
	function displayPhotos(data) {
		var photoHTML="";
		$.each(data.items, function(i, photo) {
			photoHTML += "<li>";
			photoHTML += '<img src="' + photo.link + '">';
			photoHTML += "<p>"+ caption.title + "</p>";
		});
		photoHTML += "</li>";
		$("#gallery").html(photoHTML);
	}
	$.getJSON(images, displayPhotos);


});
