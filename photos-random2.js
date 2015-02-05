
function viewImg(){
	var list= ["img1", "img2", 
			"img3", "img4", "img5"];
	for(i = 0; i < 5; i++) {
		document.getElementById(list[i]).style.visibility = "hidden";
	}
	var element = document.getElementById(list[Math.floor(Math.random()*5)]);
	element.style.visibility = "visible";
}
