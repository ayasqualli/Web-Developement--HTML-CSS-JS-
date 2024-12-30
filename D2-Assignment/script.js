function validateForm() {
    const phoneInput = document.querySelector('input[type="text"]');
    const fidelioInput = document.querySelector('input[type="password"]');
    const emailInput = document.querySelectorAll('input[type="email"]');
    const acceptTerms = document.querySelector('input[type="checkbox"]');
    const email1 = emailInput[0].value;
    const email2 = emailInput[1].value;

    // Vérification du numéro de téléphone
    const phoneRegex = /^0[0-9]{8}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        alert("Le numéro de téléphone doit commencer par 0 et contenir 8 chiffres.");
        return false;
    }

    // Vérification du code fidélio
    const validCodes = {
        "0661554488": "1234",
        "0666449076": "2356",
        "0777883217": "9834"
    };
    if (validCodes[phoneInput.value] !== fidelioInput.value) {
        alert("Le code fidélio ne correspond pas au numéro de téléphone.");
        return false;
    }

    // Vérification des adresses e-mail
    if (email1 !== email2) {
        alert("Les adresses e-mail fournies ne sont pas identiques.");
        return false;
    }

    // Vérification de l'acceptation des conditions
    if (!acceptTerms.checked) {
        alert("Vous devez accepter les conditions générales d’utilisation.");
        return false;
    }

    return true; 
}
