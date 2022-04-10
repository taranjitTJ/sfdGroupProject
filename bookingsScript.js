const roundTrip = document.getElementById('round-trip');
const oneWay = document.getElementById('one-way');
const submit = document.getElementById('submit');
const trip = document.getElementById('trip');


submit.addEventListener("click", validate);

function validate(e){
	e.preventDefault();
	if(checkInputs()){
		location.href= "thanks.html";}
}

function checkInputs() {
	// trim to remove the whitespaces
	
	// const emailValue = email.value.trim();
	// const passwordValue = password.value.trim();
	// let validEmail = false;
	// let validPass = false;
	
	if((roundTrip.checked) || (oneWay.checked)) {
        document.getElementById("trip-error").style.visibility= "hidden";
        console.log("DDDDD DDDDDD");
         return true;
        
    }
    else {
		setErrorFor(trip, 'Select one option of trip');
        console.log("Hello Tripnmnnfjnflknflknfl");
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