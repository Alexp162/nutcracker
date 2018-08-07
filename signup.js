let createButton = document.querySelector('.btn')
let firstName = document.querySelector('#firstName').value
let lastName = document.querySelector('#lastName').value
let email = document.querySelector('#email').value
let month = document.querySelector('#month').value
let day = document.querySelector('#day').value
let year = document.querySelector('#year').value
let gender = document.querySelector('#gender').value
let password = document.querySelector('#password').value
let confirmpassword = document.querySelector('#confirmpassword').value
let signupbutton = document.querySelector('#signupbutton')




console.log(createButton)
createButton.addEventListener('click', (e) => {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let month = document.querySelector('#month').value
    let day = document.querySelector('#day').value
    let year = document.querySelector('#year').value
    let gender = document.querySelector('#gender').value
    let password = document.querySelector('#password').value
    let confirmpassword = document.querySelector('#confirmpassword').value
    let info = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        month: month,
        day: day,
    
        year: year,
        gender: gender,
        
    }
    e.preventDefault()
    console.log('button clicked')
    console.log(info)
    firebase.database().ref('/').push(info)




    // let email =

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
        console.log(email)
    });
})
