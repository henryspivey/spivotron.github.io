$(document).ready(function(){
	var images = "images/images.json";
	
	function displayPhotos(data) {
		var photoHTML;
		$.each(data.items, function(i, photo) {
			console.log(data.items["link"]);

			photoHTML += "<li>";
			photoHTML += '<img src="' + data.items["link"]+ '">';
			photoHTML += "<p>"+ data.items["caption"] + "</p>";
		});
		photoHTML += "</li>";
		$("#gallery").html(photoHTML);
	}
	$.getJSON(images, displayPhotos);


});
