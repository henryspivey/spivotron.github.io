$(document).ready(function(){
	var images = "images/images.json";
	
	function displayPhotos(data) {
		var photoHTML;
		$.each(data.items, function(key, value) {
			photoHTML += "<li>";
			photoHTML += '<img src="' + $(this).link+ '">';
			photoHTML += "<p>"+ $(this).caption + "</p>";
		});
		photoHTML += "</li>";
		$("#gallery").html(photoHTML);
	}
	$.getJSON(images, displayPhotos);


});
