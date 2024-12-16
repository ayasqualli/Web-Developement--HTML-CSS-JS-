const users = [
    { email: "user1@test.com", password: "pass123" },
    { email: "user2@test.com", password: "pass456" },
    { email: "admin@test.com", password: "admin123" },
    { email: "test@test.com", password: "test123" }
];


function validateForm(event) {
    const mail = document.getElementById("mail").trim();
    const password = document.getElementById("password");
    let valid = true;

    if (!mail.value || !password.value) {
        alert("Please enter your login credentials!");
        valid = false;
        return false;
    }

    let emailFound = false;
    let passwordMatch = false;

    for (let user of users) {
        if (mail.value === user.email) {
            emailFound = true;
            if (password.value === user.password) {
                passwordMatch = true;
            }
            break;
        }
    }

    if (!emailFound && !passwordMatch) {
        alert("Email and password are incorrect!");
        markAsError(mail);
        markAsError(password);
        return false;
    } else if (!emailFound) {
        alert("Email is incorrect!");
        markAsError(mail);
        return false;
    } else if (!passwordMatch) {
        alert("Password is incorrect!");
        markAsError(password);
        return false;
    }
    validLogin();
    return false;
}

function markAsError(element) {
    element.style.borderColor = 'red';
    element.style.borderWidth = '2px';
    let errorMessage = element.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '0.8rem';
        errorMessage.style.marginTop = '4px';
        element.parentNode.insertBefore(errorMessage, element.nextSibling);
    }
    if (element.id === 'mail') {
        errorMessage.textContent = 'Invalid email address';
    } else if (element.id === 'password') {
        errorMessage.textContent = 'Invalid password';
    }
}

function validLogin() {
    const form = document.getElementById('form');
    const button = form.querySelector('button');
    
    let successMessage = button.nextElementSibling;
    if (!successMessage || !successMessage.classList.contains('success-message')) {
        successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.style.color = 'green';
        successMessage.style.fontSize = '0.8rem';
        successMessage.style.fontWeight = 'bold';
        successMessage.style.marginTop = '4px';
        button.parentNode.insertBefore(successMessage, button.nextSibling);
    }
    successMessage.textContent = 'Login successful!';
}