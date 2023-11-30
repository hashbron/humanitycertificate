document.getElementById("openEndedText").defaultValue = "Type Here....";

function checkboxClicked() {
	var captcha = document.getElementById('captcha');
	var checkbox = document.getElementById('checkbox');
	checkbox.style.visibility = "hidden";
	captcha.src = "assets/initialCaptcha/open.gif";
}

 function captchaSevenClicked(){
	var a = document.getElementById("captchaOne");
	a.style.display = "none";
	var b = document.getElementById("captchaTwo");
	b.style.display = "none";
	var c = document.getElementById("captchaThree");
	c.style.display = "none";
	var d = document.getElementById("captchaFour");
	d.style.display = "none";
	var e = document.getElementById("captchaFive");
	e.style.display = "none";
	var f = document.getElementById("captchaSix");
	f.style.display = "none";
	var g = document.getElementById("captchaSeven");
	g.style.display = "none";
  }

  function captchaSixClicked(){
	var g = document.getElementById("captchaSeven");
	g.style.display = "block";
  }

  function captchaFiveClicked(){
	var f = document.getElementById("captchaSix");
	f.style.display = "block";
  }

  function captchaFourClicked(){
	var e = document.getElementById("captchaFive");
	e.style.display = "block";
  }

  function captchaThreeClicked(){
	var d = document.getElementById("captchaFour");
	d.style.display = "block";
  }

  function captchaTwoClicked(){
	var c = document.getElementById("captchaThree");
	c.style.display = "block";
  }

  function captchaOneClicked(){
	var b = document.getElementById("captchaTwo");
	b.style.display = "block";
  }

function verifyClick() {
	
	var a = document.getElementById("captchaOne");
	var b = document.getElementById("captchaTwo");
	var c = document.getElementById("captchaThree");
	var d = document.getElementById("captchaFour");
	var e = document.getElementById("captchaFive");
	var f = document.getElementById("captchaSix");
	var g = document.getElementById("captchaSeven");

	if (window.getComputedStyle(g).display == "block") {
	  captchaSevenClicked();
	} else if (window.getComputedStyle(f).display == "block") {
		captchaSixClicked();
	} else if (window.getComputedStyle(e).display == "block") {
		captchaFiveClicked();
	} else if (window.getComputedStyle(d).display == "block") {
		captchaFourClicked();
	} else if (window.getComputedStyle(c).display == "block") {
		captchaThreeClicked();
	} else if (window.getComputedStyle(b).display == "block") {
		captchaTwoClicked();
	} else {
		captchaOneClicked();
	}

  }

 