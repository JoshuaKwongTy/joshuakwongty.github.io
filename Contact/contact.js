const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const phoneNumberInput = document.getElementById('phonenumber');
const emailInput = document.getElementById('emailinput');
const errorList = document.getElementById('error');
const myForm = document.getElementById("my-form")

myForm.addEventListener('submit', errorMessages)

function errorMessages(e){
    e.preventDefault()
    var nameID = document.getElementById('name');
    var phoneID = document.getElementById('phone');
    var emailID = document.getElementById('email');
    if (nameID){
        nameID.remove();
    }
    if (phoneID) {
        phoneID.remove();
    }
    if (emailID) {
        emailID.remove();
    }
    if (firstNameInput.value == "" || lastNameInput.value == ""){
        const li = document.createElement('li');
        li.setAttribute('id', 'name');
        li.appendChild(document.createTextNode('Full name was not inputted!'));
        errorList.appendChild(li)
    }
    if (phoneNumberInput.value == ""){
        const li = document.createElement('li');
        li.setAttribute('id', 'phone');
        li.appendChild(document.createTextNode('Phone number was not inputted!'));
        errorList.appendChild(li)
    }
    if (emailInput.value == ""){
        const li = document.createElement('li');
        li.setAttribute('id', 'email');
        li.appendChild(document.createTextNode('Email was not inputted!'));
        errorList.appendChild(li)
    }
    if (phoneNumberInput.value != "" && firstNameInput.value != "" && lastNameInput.value != "" && emailInput.value != ""){
        console.log("Valid input")
        phoneNumberInput.value = ""
        firstNameInput.value = ""
        lastNameInput.value = ""
        emailInput.value = ""
          }
}