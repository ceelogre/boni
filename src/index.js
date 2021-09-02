import app from './firebase.js'
// Retrieve data from the form and send it to firebase
const parseForm = (event) => {
  event.preventDefault()
let userForm = document.forms[0]
let username = userForm.elements['username'].value
let email = userForm.elements['email'].value
let text = userForm.elements['text'].value
let translateTo = userForm.elements['language'].value
  let ticket = {
    username,
    email,
    text,
    translateTo
  }
  createTranslationTicket(ticket)
}
const  createTranslationTicket = (ticket) => {
  let db = app.firestore()
  db.collection('tickets').add(ticket)
    .then(
      docRef => console.info(docRef)
    )
    .catch(
      error => console.error(error)
    )
}
export default parseForm