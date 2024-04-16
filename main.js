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
    // setTimeout to remove
    setTimeout(
      () => nameAlert.remove(), 3000
    );
    setTimeout(
      () => nameInput.classList.remove('border', 'border-danger', 'border-2'), 3000
    );
  } else if (name.length > 40) {
    let nameAlert = document.createElement('p');
    nameInput.classList.add('border', 'border-danger', 'border-2')
    nameInput.setAttribute('onfocus', 'this.value = ""')
    nameAlert.textContent = 'Please enter less than 40 words';
    nameAlert.classList.add('text-danger');
    nameSection.appendChild(nameAlert);
    // setTimeout to remove
    setTimeout(
      () => nameAlert.remove(), 3000
    );
    setTimeout(
      () => nameInput.classList.remove('border', 'border-danger', 'border-2'), 3000
    );
  }
}

function emailValidation() {
  const email = document.getElementById('emailInput').value;
  if (email.trim() === "") {
    let emailAlert = document.createElement('p');
    emailInput.classList.add('border', 'border-danger', 'border-2')
    emailAlert.textContent = 'Email is required';
    emailAlert.classList.add('text-danger');
    emailSection.appendChild(emailAlert);
    // setTimeout to remove
    setTimeout(
      () => emailAlert.remove(), 3000
    );
    setTimeout(
      () => emailInput.classList.remove('border', 'border-danger', 'border-2'), 3000
    );
  }
  else if (email.includes('@') == false) {
    let emailAlert = document.createElement('p');
    emailInput.classList.add('border', 'border-danger', 'border-2')
    emailInput.setAttribute('onfocus', 'this.value = ""')
    emailAlert.textContent = 'Please enter a valid email address';
    emailAlert.classList.add('text-danger');
    emailSection.appendChild(emailAlert);
    // setTimeout to remove
    setTimeout(
      () => emailAlert.remove(), 3000
    );
    setTimeout(
      () => emailInput.classList.remove('border', 'border-danger', 'border-2'), 3000
    );
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
    // setTimeout to remove
    setTimeout(
      () => passwordAlert.remove(), 3000
    );
    setTimeout(
      () => passwordInput.classList.remove('border', 'border-danger', 'border-2'), 3000
    );
  } else if (password.length < 8) {
    let passwordAlert = document.createElement('p');
    passwordInput.classList.add('border', 'border-danger', 'border-2')
    passwordInput.setAttribute('onfocus', 'this.value = ""')
    passwordAlert.textContent = 'The password should more than 8 words';
    passwordAlert.classList.add('text-danger');
    passwordSection.appendChild(passwordAlert);
    // setTimeout to remove
    setTimeout(
      () => passwordAlert.remove(), 3000
    );
    setTimeout(
      () => passwordInput.classList.remove('border', 'border-danger', 'border-2'), 3000
    );
  } else if (password.length > 40) {
    let passwordAlert = document.createElement('p');
    passwordInput.classList.add('border', 'border-danger', 'border-2')
    passwordInput.setAttribute('onfocus', 'this.value = ""')
    passwordAlert.textContent = 'The password should less than 40 words';
    passwordAlert.classList.add('text-danger');
    passwordSection.appendChild(passwordAlert);
    // setTimeout to remove
    setTimeout(
      () => passwordAlert.remove(), 3000
    );
    setTimeout(
      () => passwordInput.classList.remove('border', 'border-danger', 'border-2'), 3000
    );
  }
}

function validation() {
  nameValidation();
  emailValidation();
  passwordValidation();
}