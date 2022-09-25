

let calcAgeBtn = document.getElementById("calcAge");
let dob = document.getElementById('dob');
let resYears = document.getElementById("resYears")


calcAgeBtn.addEventListener('click', findAge)

function findAge (){
    let dobVal = parseInt(dob.value)
   if (dobVal == '' && !isNaN(dobVal)) {
    alert("please enter year you were born")
   }else if(dobVal.toString().length < 4){
    alert("please enter a 4 digit number")
   }else{
    const d = new Date();
    let currYear = d.getFullYear();
    let age = currYear - (dobVal);

    resYears.innerText = age
   }

}


