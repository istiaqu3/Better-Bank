const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function () {

    const email = document.getElementById('emailField');
    const password = document.getElementById('passwordField');

    if (email.value == 'abc@x.com' && password.value == '123') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Try Again!')
    }

})

