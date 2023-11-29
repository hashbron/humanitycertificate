function checkboxClicked() {
	var captcha = document.getElementById('captcha');
	var checkbox = document.getElementById('checkbox');
	checkbox.style.visibility = "hidden";
	captcha.src = "open.gif";
}