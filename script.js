function checkboxClicked() {
	var captcha = document.getElementById('captcha');
	var checkbox = document.getElementById('checkbox');
	checkbox.style.visibility = "hidden";
	captcha.src = "open.gif";
}

function about() {
	var x = document.getElementById("captchaOne");
	var a = document.getElementById("captchaTwo");

	if (a.style.display === "none") {
	  x.style.display = "block";
	  a.style.display = "block";
	} else {
	  a.style.display = "none";
	}
  }

 