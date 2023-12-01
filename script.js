var numSelected = 0;
const imagesMap = new Map();

document.getElementById("openEndedText").defaultValue = "Type Here....";

function checkboxClicked() {
	var captcha = document.getElementById('captcha');
	var checkbox = document.getElementById('checkbox');
	checkbox.style.visibility = "hidden";
	captcha.src = "assets/initialCaptcha/open.gif";

//	setTimeout(function() {
    	document.getElementById('captchaOne').style.display = "block"; // Set the desired opacity value
 // }, 2000); // 3000 milliseconds = 3 seconds
}

function certificateButtonClicked(){
	var h = document.getElementById("certificateButton");
	h.style.display = "none";
	var i = document.getElementById("checkboxGif");
	i.style.display = "none";
	var j = document.getElementById("certificate");
	j.style.display = "block";
	var k = document.getElementById("asciiHands");
	k.style.display = "block";
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

	var gif = document.getElementById("captcha");
	var certificateButton = document.getElementById("certificateButton");
	captcha.src = "assets/initialCaptcha/check.gif";

	setTimeout(function() {
    	certificateButton.style.display = "block";
  }, 500);
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

function verifyClick(captchaId) {

	var cur = document.getElementById(captchaId);
	var verifyButton = cur.children[2].children[1];

	if (window.getComputedStyle(verifyButton).opacity == 0.5) {
		return;
	} else {

	}
	
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

	verifyButton.style.opacity = 0.5;
	numSelected = 0;

  }

function imageBlockClicked(imageId, captchaId) {
	var img = document.getElementById(imageId);
	var check = img.children[0];
	var alt = document.getElementById(imageId).alt;
	var cur = document.getElementById(captchaId);
	var verifyButton = cur.children[2].children[1];
	//var ele3 = document.getElementsByName('busPic'); ??? log value of the divs somehow 

	// If image is unselected
	if (img.style.margin != "20px") {
		img.style.margin = "20px";
		check.style.opacity = "1";
		numSelected += 1;
		imagesMap.set('imageId', 1);
	} else if (img.style.margin == "20px") {
		img.style.margin = 0;
		check.style.opacity = "0";
		numSelected -= 1;
		imagesMap.set('imageId', 0);
	}

	if (numSelected > 0) {
		verifyButton.style.opacity = 1.0;

	} else {
		verifyButton.style.opacity = 0.5;
	}
 }

 function radioButtonSelected(radioButton, captchaId) {
 	var cur = document.getElementById(captchaId);
	var verifyButton = cur.children[2].children[1];

    if (radioButton.checked) {
      numSelected = 1;
      verifyButton.style.opacity = 1.0;
    }
}

function radioButtonSelectedSeven(radioButton, captchaId) {
 	var cur = document.getElementById(captchaId);
	var verifyButton = cur.children[5].children[1];

    if (radioButton.checked) {
      numSelected = 1;
      verifyButton.style.opacity = 1.0;
    }
}

  function textareaChanged(textareaId, captchaId) {
  	var cur = document.getElementById(captchaId);
	var verifyButton = cur.children[2].children[1];

    var textareaValue = document.getElementById(textareaId).value;
    if (textareaValue != "Type Here....") {
    	verifyButton.style.opacity = 1;
    } else {
    	verifyButton.style.opacity = 0.5;
    }
    // You can perform additional actions with the textarea value here
  }


  //storing variables
 
//radios
function displayRadioValue() {
	var ele = document.getElementsByName('question0');

	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			document.getElementById("radio1Result").innerHTML
				= ele[i].value;
				console.log(ele[i].value);
	}
}

function displayRadioValue2() {
	var ele2 = document.getElementsByName('question2');

	for (i = 0; i < ele2.length; i++) {
		if (ele2[i].checked)
			document.getElementById("radio2Result").innerHTML
				= ele2[i].value;
				console.log(ele2[i].value);
	}
}
// open ended text
const inputEl = document.getElementById("openEndedText");

function getInputVal() {
  console.log(inputEl.value);
  document.getElementById("openEndedTextResult").innerHTML
				= inputEl.value;
}

function populateCertificate() {
	
}

//images??
