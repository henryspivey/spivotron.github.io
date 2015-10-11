$(document).ready(function(){
	var images = "https://raw.githubusercontent.com/spivotron/spivotron.github.io/master/images/images.json";
	
	function displayPhotos(data) {
		var photoHTML = "<ul>";
		$.each(data.items, function(i, photo) {
			console.log(data.items["link"]);

			photoHTML += "<li>";
			photoHTML += '<img src="' + data.items["link"]+ '">';
			photoHTML += "<p>"+ data.items["caption"] + "</p>";
			photoHTML += "</li>";
		});
		photoHTML += "</ul>";
		$("#gallery").html(photoHTML);
	}
	$.getJSON(images, displayPhotos);


});
