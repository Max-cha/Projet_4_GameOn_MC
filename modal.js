
//BOITE MODAL


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector('form[name="reserve"]');
const exitButton = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const checkConditions = document.querySelector('#checkbox1');


// OUVERTURE DE LA LANDING PAGE
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}


//FERMER LA LANDING PAGE
exitButton.addEventListener("click", exitModal);

function exitModal(){
  modalbg.style.display = "none";
}


//COCHER LES CONDITIONS
function conditionsChecked(){
  if(checkConditions.checked === false){
  const conditions = document.querySelectorAll('[name="conditions"]:checked');
  console.log(conditions)
   if(conditions.value.length !== 1){
    conditions.parentElement.dataset.error="Merci d'accepter les conditions de participation"
    conditions.parentElement.dataset.errorVisible=true
    return false;
  }
      conditions.parentElement.dataset.error=null
      conditions.parentElement.dataset.errorVisible=false
      return true;
    }


// COCHER CASE VILLE
function cityChecked(){
  let listLocation = document.querySelectorAll('[name="location"]:checked');
  console.log(city)
  if(listLocation.value.length !== 1){
    city.parentElement.dataset.error="Merci de cocher une ville"
    city.parentElement.dataset.errorVisible=true
    return false;
  }
  city.parentElement.dataset.error=null
  city.parentElement.dataset.errorVisible=false
  return true;
}

//PRENOM
function checkfirstname(){
  const firstname=document.getElementById("first")
  console.log(firstname)
  if (firstname.value.length < 2){ console.log(firstname.parentElement)
    firstname.parentElement.dataset.error="Merci de renseigner un prénom valide"
    firstname.parentElement.dataset.errorVisible=true 
    return false;
  }
  firstname.parentElement.dataset.error=null
  firstname.parentElement.dataset.errorVisible=false
  return true;
}

//NOM DE FAMILLE
function checklastname(){
  const lastname=document.getElementById("last")
  console.log(lastname)
  if (lastname.value.length < 2){ console.log(lastname.parentElement)
    lastname.parentElement.dataset.error="Merci de renseigner un nom valide"
    lastname.parentElement.dataset.errorVisible=true 
    return false;
  }
  lastname.parentElement.dataset.error=null
  lastname.parentElement.dataset.errorVisible=false
  return true;
}


//MAIL
function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}
function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid");
    $result.css("color", "blue");
  } else {
    $result.text(email + " is not valid");
    $result.css("color", "red");
  }
  return false;
}
$("#validate").on("click", validate);

function submitform(event){
  console.log("coucou")
  event.preventDefault();

   if (checkfirstname() && checklastname() && validateEmail() && conditionsChecked() && cityChecked()) {
    form.style.display = "none";
    modalBody.innerHTML = "<p>Bien joué ! Vous êtes inscrit au prochain Marathon !.</p>"
   }
}
//VERIFICATION DE LA LANDING PAGE REMPLIS PAR L'USAGER
/*form.addEventListener('submit', function (event) {
  console.log("coucou")
  event.preventDefault();

   if (checkfirstname() && checklastname() && validateEmail() && conditionsChecked() && cityChecked()) {
    form.style.display = "none";
    modalBody.innerHTML = "<p>Bien joué ! Vous êtes inscrit au prochain Marathon !.</p>"
   }
}
) */
}