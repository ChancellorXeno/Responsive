var head = document.getElementById("down_head");
var nav = document.getElementById("down_nav");

function ClickHead() {
	document.getElementsByClassName('nav')[0].style.padding = "0em 0em 7em 0em";
	if (head.style.display == "none"){
		head.style.display = "block";
	}
	else {
		head.style.display = "none";
		document.getElementsByClassName('nav')[0].style.padding = "0em 0em 0em 0em";

	}
}
function ClickNav() {
	document.getElementsByClassName('h-img')[0].style.padding = "5em 0em 0em 0em";
	if (nav.style.display == "none"){
		nav.style.display = "block";
	}
	else {
		nav.style.display = "none";
		document.getElementsByClassName('h-img')[0].style.padding = "0em 0em 0em 0em";
	}
}