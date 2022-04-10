const roundTrip = document.getElementById('round-trip');
const oneWay = document.getElementById('one-way');
const submit = document.getElementById('submit');
const trip = document.getElementById('trip');
const flyingFrom = document.getElementById('flyingFrom');
const flyingTo = document.getElementById('flyingTo');
const form = document.getElementById('form');
const departing = document.getElementById('departing');
const returning = document.getElementById('returning');
const adults = document.getElementById('adults');
const children = document.getElementById('children');
const firstName1 = document.getElementById('first-name1');
const firstName2 = document.getElementById('first-name2');
const firstName3 = document.getElementById('first-name3');
const lastName1 = document.getElementById('last-name1');
const lastName2 = document.getElementById('last-name2');
const lastName3 = document.getElementById('last-name3');
const pAge1 = document.getElementById('p1-age');
const pAge2 = document.getElementById('p2-age');
const pAge3 = document.getElementById('p3-age');
const genderMale1 = document.getElementById('gender-male1');
const genderMale2 = document.getElementById('gender-male2');
const genderMale3 = document.getElementById('gender-male3');
const genderFemale1 = document.getElementById('gender-female1');
const genderFemale2 = document.getElementById('gender-female2');
const genderFemale3 = document.getElementById('gender-female3');
const genderNo1 = document.getElementById('gender-no1');
const genderNo2 = document.getElementById('gender-no2');
const genderNo3 = document.getElementById('gender-no3');
const pGender1 = document.getElementById('p1-gender');


submit.addEventListener("click", validate);

function validate(e){
    
	e.preventDefault();
	if(checkInputs()){
		//location.href= "thanks.html";
    }
}

function checkInputs() {
	// trim to remove the whitespaces
	
	const flyingFromValue = flyingFrom.value.trim();
	const flyingToValue = flyingTo.value.trim();
    let valid = true;
	
	if((roundTrip.checked) || (oneWay.checked)) {
        document.getElementById("trip-error").style.visibility= "hidden";
          
        
    }
    else {
		setErrorFor(trip, 'Select one option of your trip');
        valid = false;
    }
	if(flyingFromValue === '') {
        
		setErrorFor(flyingFrom, 'Flying from city cannot be blank');
        valid = false;
	} else{
        setSuccessFor(flyingFrom);
    }
    if (flyingToValue === '') {
		setErrorFor(flyingTo, 'Flying to city cannot be blank');
        valid = false;
	} else {
		setSuccessFor(flyingTo);
		
	}

    const fnValue1 = firstName1.value.trim();
    const lnValue1 = lastName1.value.trim();
    const fullName1 = fnValue1+lnValue1;
    const ageVal1 = pAge1.value.trim();

    if(firstName1.disabled === false){
        if(fnValue1 === ''){
            
            document.getElementById("name1-error").style.visibility= "visible";
            document.getElementById("name1-error").style.color = "#e74c3c";
            document.getElementById("name1-error").innerText = 'Enter a valid name';
            valid = false;
        }
        else if(fullName1.length <= 5){
            document.getElementById("name1-error").style.visibility= "visible";
            document.getElementById("name1-error").style.color = "#e74c3c";
            document.getElementById("name1-error").innerText = 'Full name must be more than 5 characters';
            valid = false;
        }
        else if(/\d/.test(fullName1)){
            document.getElementById("name1-error").style.visibility= "visible";
            document.getElementById("name1-error").style.color = "#e74c3c";
            document.getElementById("name1-error").innerText = 'Name must not contain any number';
            valid = false;
        }
        else{
            document.getElementById("name1-error").style.visibility= "hidden";
        }

        if(ageVal1 === ''){
            console.log('age empty');
            document.getElementById("age1-error").style.visibility= "visible";
            document.getElementById("age1-error").style.color = "#e74c3c";
            document.getElementById("age1-error").innerText = 'Age must be entered';
            valid = false;
        }
        else if(/[^0-9]/g.test(ageVal1)){
            document.getElementById("age1-error").style.visibility= "visible";
            document.getElementById("age1-error").style.color = "#e74c3c";
            document.getElementById("age1-error").innerText = 'Age must be a number';
            valid = false;
        }
        else{
            document.getElementById("age1-error").style.visibility= "hidden";
        }

        if((genderMale1.checked) || (genderFemale1.checked) || (genderNo1.checked)) {
            document.getElementById("gender1-error").style.visibility= "hidden";
              
            
        }
        else {
            //setErrorFor(pGender1, 'Select gender of the passenger');
            document.getElementById("gender1-error").style.visibility= "visible";
            document.getElementById("gender1-error").style.color = "#e74c3c";
            document.getElementById("gender1-error").innerText = 'Select gender of the passenger';
            valid = false;
        }
    }

    




	return valid;
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
    console.log(formControl);
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
$('#departing').attr('min',today);
$('#returning').attr('min',today);

$(document).ready(function(){
    $('input[type=radio]').click(function(){
        if (this.id == "one-way"){
            returning.value = null;
            document.getElementById('returning').disabled = true;
            document.getElementById("trip-error").style.visibility= "hidden";
            $("#returning").css("border", "none");
            document.getElementById("return-date-error").style.visibility= "hidden";
        }
            
    });
});
$(document).ready(function(){
    $('input[type=radio]').click(function(){
        if (this.id == "round-trip"){
            document.getElementById('returning').disabled = false;
            document.getElementById("trip-error").style.visibility= "hidden";

            
        }
            
    });
});

$(document).ready(function(){
    $('input[type=radio]').click(function(){
        if (this.id == "gender-male1"){
            
            document.getElementById("gender1-error").style.visibility= "hidden";

            
        }
            
    });
});

$(document).ready(function(){
    $('input[type=radio]').click(function(){
        if (this.id == "gender-female1"){
            
            document.getElementById("gender1-error").style.visibility= "hidden";

            
        }
            
    });
});

$(document).ready(function(){
    $('input[type=radio]').click(function(){
        if (this.id == "gender-no1"){
            
            document.getElementById("gender1-error").style.visibility= "hidden";

            
        }
            
    });
});

departing.addEventListener('change', validateDates);
returning.addEventListener('change', validateDates);
function validateDates(){
    if(departing.value === ''){
        setErrorFor(departing, 'No travel date selected');
    }
    if(departing.value !== ''){
        document.getElementById("depart-date-error").style.visibility= "hidden";
        $("#departing").css("border", "none");
    }
    
    if(departing.value > returning.value){
        setErrorFor(returning, 'Return date must be after departing');
    }
    else{
        document.getElementById("return-date-error").style.visibility= "hidden";
        $("#departing").css("border", "none");
    }
    if(departing.value === ''){
        setErrorFor(departing, 'No travel date selected');
    }
    
    if(departing.value > returning.value){
        setErrorFor(returning, 'Return date must be after departing');
    }
    else{
        document.getElementById("return-date-error").style.visibility= "hidden";
        $("#returning").css("border", "none");
    }
}

adults.addEventListener('change', numberOfPassengers);
children.addEventListener('change', numberOfPassengers);

function numberOfPassengers(){
    let passengers = parseInt(adults.value) + parseInt(children.value);
    console.log(passengers);
    
    if(passengers === 1){
        firstName1.disabled = false;
        lastName1.disabled = false;
        pAge1.disabled = false;
        $('input[name=gender1]').attr("disabled",false);

        firstName2.disabled = true;
        lastName2.disabled = true;
        pAge2.disabled = true;
        $('input[name=gender2]').attr("disabled",true);

        firstName3.disabled = true;
        lastName3.disabled = true;
        pAge3.disabled = true;
        $('input[name=gender3]').attr("disabled",true);
    } else if(passengers === 2){
        firstName1.disabled = false;
        lastName1.disabled = false;
        pAge1.disabled = false;
        $('input[name=gender1]').attr("disabled",false);

        firstName2.disabled = false;
        lastName2.disabled = false;
        pAge2.disabled = false;
        $('input[name=gender2]').attr("disabled",false);

        firstName3.disabled = true;
        lastName3.disabled = true;
        pAge3.disabled = true;
        $('input[name=gender3]').attr("disabled",true);
    }
    else{
        firstName1.disabled = false;
        lastName1.disabled = false;
        pAge1.disabled = false;
        $('input[name=gender1]').attr("disabled",false);

        firstName2.disabled = false;
        lastName2.disabled = false;
        pAge2.disabled = false;
        $('input[name=gender2]').attr("disabled",false);

        firstName3.disabled = false;
        lastName3.disabled = false;
        pAge3.disabled = false;
        $('input[name=gender3]').attr("disabled",false);
    }
}

//Disable passenger details on page load
firstName1.disabled = true;
lastName1.disabled = true;
pAge1.disabled = true;
$('input[name=gender1]').attr("disabled",true);

firstName2.disabled = true;
lastName2.disabled = true;
pAge2.disabled = true;
$('input[name=gender2]').attr("disabled",true);

firstName3.disabled = true;
lastName3.disabled = true;
pAge3.disabled = true;
$('input[name=gender3]').attr("disabled",true);
// $("#departing").on("change",function(){

//     if(departing.value === ''){
//         setErrorFor(departing, 'No travel date selected');
//     }
//     if(departing.value !== ''){
//         document.getElementById("depart-date-error").style.visibility= "hidden";
//         $("#departing").css("border", "none");
//     }
    
//     if(departing.value > returning.value){
//         setErrorFor(returning, 'Return date must be after departing');
//     }
//     else{
//         document.getElementById("return-date-error").style.visibility= "hidden";
//         $("#departing").css("border", "none");
//     }
// });
// $("#returning").on("change",function(){

//     if(departing.value === ''){
//         setErrorFor(departing, 'No travel date selected');
//     }
    
//     if(departing.value > returning.value){
//         setErrorFor(returning, 'Return date must be after departing');
//     }
//     else{
//         document.getElementById("return-date-error").style.visibility= "hidden";
//         $("#returning").css("border", "none");
//     }
// });