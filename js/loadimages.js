$(document).ready(function(){
	var images = "https://raw.githubusercontent.com/spivotron/spivotron.github.io/master/images/images.json";
	
	function displayPhotos(data) {
		var photoHTML = "<ul>";
		console.log(data);
		$.each(data.images, function(i, photo) {
			console.log(photo.link);
			console.log(photo.caption);

			photoHTML += "<li>";
			photoHTML += "<img src = "+photo.link + ">";
			photoHTML += "<p>"+ photo.caption + "</p>";
			photoHTML += "</li>";
		});
		photoHTML += "</ul>";
		$("#gallery").html(photoHTML);
	}
	$.getJSON(images, displayPhotos);


});
