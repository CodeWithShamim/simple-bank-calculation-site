const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // conditon 
    if (userEmail == 'shamim' && userPassword == '1234') {
        window.open('banking.html');
        // window.location.href = "banking.html";
    } else {
        alert('warning! use valid info....')
    }

})