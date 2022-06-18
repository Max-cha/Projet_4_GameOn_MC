
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

function exitModal() {
  modalbg.style.display = "none";
  form.style.display = "block";
  document.getElementById("success_message").style.display = "none"
}


//COCHER LES CONDITIONS
function conditionsChecked() {
  if (checkConditions.checked === false) {
    checkConditions.parentElement.dataset.error = "Merci d'accepter les conditions de participation"
    checkConditions.parentElement.dataset.errorVisible = true
    return false;
  }
  checkConditions.parentElement.dataset.error = null
  checkConditions.parentElement.dataset.errorVisible = false
  return true;
}

// COCHER CASE VILLE
function cityChecked() {
  let listLocation = document.querySelectorAll('[name="location"]:checked');
  const locationsParent = document.getElementById("locations")
  if (listLocation.length !== 1) {
    locationsParent.dataset.error = "Merci de cocher une ville"
    locationsParent.dataset.errorVisible = true
    return false;
  }
  locationsParent.dataset.error = null
  locationsParent.dataset.errorVisible = false
  return true;
}

//PRENOM
function checkfirstname() {
  const firstname = document.getElementById("first")
  if (firstname.value.length < 2) {
    console.log(firstname.parentElement)
    firstname.parentElement.dataset.error = "Merci de renseigner un prénom valide"
    firstname.parentElement.dataset.errorVisible = true
    return false;
  }
  firstname.parentElement.dataset.error = null
  firstname.parentElement.dataset.errorVisible = false
  return true;
}

//NOM DE FAMILLE
function checklastname() {
  const lastname = document.getElementById("last")
  if (lastname.value.length < 2) {
    lastname.parentElement.dataset.error = "Merci de renseigner un nom valide"
    lastname.parentElement.dataset.errorVisible = true
    return false;
  }
  lastname.parentElement.dataset.error = null
  lastname.parentElement.dataset.errorVisible = false
  return true;
}


//MAIL
function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  //regex pour mail
  var email = document.getElementById("email");

  if (!re.test(email.value)) {
    email.parentElement.dataset.error = "Merci de renseigner un email valide"
    email.parentElement.dataset.errorVisible = true
    return false;
  }
  email.parentElement.dataset.error = null
  email.parentElement.dataset.errorVisible = false
  return true;
}

//DATE DE NAISSANCE
function validateBirthdate(birthdate) {
  var re = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;     //regex date de naissance
  var birthdate = document.getElementById("birthdate");

  if (!re.test(birthdate.value)) {
    birthdate.parentElement.dataset.error = "Merci de renseigner une date de naissance valide"
    birthdate.parentElement.dataset.errorVisible = true
    return false;
  }
  birthdate.parentElement.dataset.error = null
  birthdate.parentElement.dataset.errorVisible = false
  return true;
}

//NOMBRE TOURNOIS
function quantityCheked() {
  const quantity = document.getElementById("quantity")
  if (quantity.value.length !== 1) {
    quantity.parentElement.dataset.error = "Merci de renseigner le nombres de tournois"
    quantity.parentElement.dataset.errorVisible = true
    return false;
  }
  quantity.parentElement.dataset.error = null
  quantity.parentElement.dataset.errorVisible = false
  return true;
}

//VERIFICATION DE LA LANDING PAGE PAR L'USAGER
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const firstnameOK = checkfirstname()
  const lastnameOk = checklastname()
  const emailOk = validateEmail()
  const cityOk = cityChecked()
  const conditionsOk = conditionsChecked()
  const birthdateOk = validateBirthdate()
  const quantityOk = quantityCheked()
  if (firstnameOK && lastnameOk && emailOk && cityOk && conditionsOk && birthdateOk && quantityOk) {
    form.style.display = "none";
    form.reset()
    document.getElementById("success_message").style.display = "block"
  }
}
) 
