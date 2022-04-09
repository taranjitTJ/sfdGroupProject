const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const logIn = document.getElementById('logIn');
const date1 = document.getElementById('dt1');
const date2 = document.getElementById('dt2');


logIn.addEventListener("click", validate);

function validate(e){
	e.preventDefault();
	if(checkInputs()){
		location.href= "bookings.html";}
}
// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	if(checkInputs()){
// 		logIn.onclick = "bookings.html";


// 	}
// });

function checkInputs() {
	// trim to remove the whitespaces
	
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	let validEmail = false;
	let validPass = false;
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		validEmail = true;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
		validPass = true;
	}

	if(validEmail && validPass){
		return true;
	}
	else{
		return false;
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setDate() {
	d = new Date(document.getElementById("dt").value);
	dt = d.getDate();
	mn = d.getMonth();
	mn++;
	yy = d.getFullYear();
	document.getElementById("ndt").value = dt + "/" + mn + "/" + yy
	document.getElementById("ndt").hidden = false;
	document.getElementById("dt").hidden = true;
  }








// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });