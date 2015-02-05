
function changeImg(){
	
	var list= ["http://goo.gl/dXrgnW", "http://goo.gl/CnPVXj", 
			"http://goo.gl/9pk0m8", "http://goo.gl/Eu3svi", "http://goo.gl/YA3Fus"];
	var element = document.getElementById("image");
	element.src = list[Math.floor(Math.random()*5)];

}
