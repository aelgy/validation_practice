const nameSection = document.getElementById('nameSection');
const nameInput = document.getElementById('nameInput')
const emailSection = document.getElementById('emailSection');
const emailInput = document.getElementById('emailInput');
const passwordSection = document.getElementById('passwordSection');
const passwordInput = document.getElementById('passwordInput')


function nameValidation() {
  const name = document.getElementById('nameInput').value;
  if (name.trim() === "") {
    let nameAlert = document.createElement('p');
    nameInput.classList.add('border', 'border-danger', 'border-2')
    nameAlert.textContent = 'Please enter a valid name';
    nameAlert.classList.add('text-danger');
    nameSection.appendChild(nameAlert);
  } else if (name.length > 40) {
    let nameAlert = document.createElement('p');
    nameInput.classList.add('border', 'border-danger', 'border-2')
    nameAlert.textContent = 'Please enter less than 40 words';
    nameAlert.classList.add('text-danger');
    nameSection.appendChild(nameAlert);
  }
}

function emailValidation() {
  const email = document.getElementById('emailInput').value;
  if (email.trim() === "") {
    let emailAlert = document.createElement('p');
    emailInput.classList.add('border', 'border-danger', 'border-2')
    emailAlert.textContent = 'Please enter a valid email address';
    emailAlert.classList.add('text-danger');
    emailSection.appendChild(emailAlert);
  }
  else if (email.includes('@') == false) {
    let emailAlert = document.createElement('p');
    emailInput.classList.add('border', 'border-danger', 'border-2')
    emailAlert.textContent = 'Please enter a valid email address';
    emailAlert.classList.add('text-danger');
    emailSection.appendChild(emailAlert);
  }
}

function passwordValidation() {
  const password = document.getElementById('passwordInput').value;
  if (password.trim() === "") {
    let passwordAlert = document.createElement('p');
    passwordInput.classList.add('border', 'border-danger', 'border-2')
    passwordAlert.textContent = 'Password is required';
    passwordAlert.classList.add('text-danger');
    passwordSection.appendChild(passwordAlert);
  }
  // else if (name.length > 40) {
  //   let nameAlert = document.createElement('p');
  //   nameInput.classList.add('border', 'border-danger', 'border-2')
  //   nameAlert.textContent = 'Please enter less than 40 words';
  //   nameAlert.classList.add('text-danger');
  //   nameSection.appendChild(nameAlert);
  // }
}

function validation() {
  // nameValidation();
  // emailValidation();
  passwordValidation();
}