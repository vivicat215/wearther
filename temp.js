	/*
	var img = new Image();
	var div = document.getElementById('frozenimg');
	img.onload = function() {
		div.appendChild(img);
	}
	img.src = "http://2.bp.blogspot.com/_dhgmf43a-Yk/TQ2bNH0gZBI/AAAAAAAAAi4/WoDXWygmKJI/s1600/snow_beard.jpg";
	*/

var temptext = document.getElementById('temptext');
var tempimg = document.getElementById('tempimg'); 

document.getElementById('winter').onclick = function() {
	temptext.innerHTML = "While we'd all love to stay indoors, drink hot chocolate, and choose a new show to binge watch, there comes a point when the music has to be faced. Whether its layering tights under jeans, rocking a white button-down under a gorgeous sweater, or finding a coat with a hood to protect your ears, lots of fashionable tricks exist to let you still see the light of day despite the cold. So what items will you need? Tights are the answer to quite a few of your windy weather woes. If you're wearing trousers or jeans out, slip a pair on underneath, and no one will be any the wiser. If you're going with a skirt, tights are a great way to protect your legs during the cold.";
	tempimg.src = "http://i.imgur.com/EKFqDVl.jpg";
}

document.getElementById('spring').onclick = function() {
	temptext.innerHTML = "It's most like spring or fall seasons now. Dress youself for the season by adding color and life back into your wardrobe. However, the weather is still characterized by quickly changing temperatures, so be ready for whatever nature throws your way. Always bring a sweater, cardigan, light jacket, or pair of leggings handy -- it is always easy to take off layers if you get hot.";
	tempimg.src = "http://i.imgur.com/yGV1Axq.jpg";
}

document.getElementById('summer').onclick = function() {
	temptext.innerHTML = "The sun is out, temperature is up, and you're left wondering how to dress and keep looking up. When it's under 65 &degF, you can have a lot of fun with layers, but now, wearing more than one layer can have you sweat like a roasted pig. You want to dress well, but also comfortable. You don't need multiple layers to look your best. You can look great wearing just a single layer.";
	tempimg.src = "http://i.imgur.com/KCgBfjD.jpg";
}

document.getElementById('hot').onclick = function() {
	temptext.innerHTML = "It's a scorcher! With temperatures climbing to an unbearable boiling point across the nation, even surpassing 105 degrees for some, we're doing everything we can to cool off. Since we can't stick ice cubes in our braids during work hours, we're making smart sartorial choices our other go-to. Get on board by: (1) Looking for breathable fabrics, like cotton or linen, that won't cling; (2) Going sleeveless whenever you can to avoid sweat stains; and (3) Opting for light colors (think: white and pastels) because they reflect light. Darker hues tend to absorb the most heat. With that said, we rounded up 11 fashion finds to melt-proof your look, and keep you looking fresh despite a heat wave.";
	tempimg.src = "http://i.imgur.com/oGABZBm.jpg";
}

document.getElementById('frozen').onclick = function() {
	temptext.innerHTML = "A temperature of 0 &degF and a wind speed of 15 mph creates a wind chill temperature of -19 &degF. Under these conditions frost bite can occur in just 30 minutes. So it's better to just stay home if you'd like your toes to not get bitten off.";
	tempimg.src = "http://i.imgur.com/aO84tAh.jpg";
}

