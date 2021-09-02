// Retrieve data from the form and send it to firebase
const createTranslationTicket = (event) => {
  event.preventDefault()
let userForm = document.forms[0]
let username = userForm.elements['username'].value
let email = userForm.elements['email'].value
let text = userForm.elements['text'].value
let translateTo = userForm.elements['language'].value
  let userData = {
    username,
    email,
    text,
    translateTo
  }
  console.info(userData)
}
