function openGif() {
	var captcha = document.getElementById('captcha');
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

 