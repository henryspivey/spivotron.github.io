$(document).ready(function(){
	var images = "https://raw.githubusercontent.com/spivotron/spivotron.github.io/master/images/images.json";
	
	function displayPhotos(data) {
		var photoHTML = "<ul>";
		console.log(data.items);
		$.each(data.items, function(i, photo) {
			

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
