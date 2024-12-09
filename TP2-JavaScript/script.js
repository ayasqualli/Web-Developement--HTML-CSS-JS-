function validateForm(event) {
    const civilite = document.getElementById('civ');
    const prenom = document.getElementById('fname');
    const nom = document.getElementById('lname');
    const email = document.getElementById('mail');
    const confirmEmail = document.getElementById('confirm_mail');
    const password = document.getElementById('pswrd');
    const confirmPassword = document.getElementById('confirm_pswrd');
    const birthDate = document.getElementById('bdate');

    let isValid = true;
    if (!civilite.value || !prenom.value || !nom.value || !email.value || !password.value || !confirmEmail.value || !confirmPassword.value || !birthDate.value) {
        alert("");
        isValid = false;
        return false;
    }

    if (civilite.value === 'civ') {
        markAsError(civilite);
        isValid = false;
        alert('Veuillez sélectionner une civilité!');
        return false;
        
    }

    const nameRegex = /^[A-Za-zÀ-ÿ\s-]+$/;
    if (!nameRegex.test(prenom.value)) {
        markAsError(prenom);
        isValid = false;
        alert('Veuillez entrer un prénom valide !');
        return false;
    }
    else{

    }
    if (!nameRegex.test(nom.value)) {
        markAsError(nom);
        isValid = false;
        alert('Veuillez entrer un nom valide !');
        return false;
        
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        markAsError(email);
        isValid = false;
        alert('Veuiller entrer un mail valide !');
        return false;
    }

    if (email.value !== confirmEmail.value) {
        markAsError(email);
        markAsError(confirmEmail);
        isValid = false;
        alert('Les deux mails ne sont pas identiques !');
        return false;
    }


    if (password.value.length < 5 || password.value.length > 10) {
        markAsError(password);
        isValid = false;
        alert('Le mot de passe doit contenir de 5 à 10 caractères !');
        return false;
    }

    if (password.value !== confirmPassword.value) {
        markAsError(password);
        markAsError(confirmPassword);
        isValid = false;
        alert('Les mots de passe ne sont pas identiques !');
        return false;
    }

    if (!birthDate.value) {
        markAsError(birthDate);
        isValid = false;
        alert("la date de naissance n'est pas valide !");
        return false;
    }

    if (isValid) {
        alert('Formulaire validé avec succès!');
        return true;
    }

    return false;
}

function markAsError(element) {
    element.style.borderColor = 'red';
    element.style.borderWidth = '2px';
}