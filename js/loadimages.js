$(document).ready(function(){
	var images = "images/images.json";
	
	function displayPhotos(data) {
		var photoHTML;
		$.each(data.items, function(key, value) {
			console.log(key + ": " + value);
			photoHTML += "<li>";
			photoHTML += '<img src="' + link.value+ '">';
			photoHTML += "<p>"+ caption.value + "</p>";
		});
		photoHTML += "</li>";
		$("#gallery").html(photoHTML);
	}
	$.getJSON(images, displayPhotos);


});
