function validateForm(event) {
    event.preventDefault();

    const civilite = document.getElementById('civ').value;
    const prenom = document.getElementById('fname').value;
    const nom = document.getElementById('lname').value;
    const birthDate = document.getElementById('bdate').value;
    const country = document.getElementById('country').value;
    const depart = document.getElementById('depart').value;
    const commune = document.getElementById('commmune').value;

    let isValid = True;

    if (!civilite || !prenom || !nom || !birthDate || !country || !depart || !commune) {
        alert("Veuillez remplir tous les champs obligatiores !");
        isValid = False;
        return false;
    }
    else{
        const newWindow = window.open("", "New Window", "width=300,height=200");
        newWindow.document.write(`<h1>Bonjour ${civilite} ${prenom} ${nom} ! </h1>`);
        welcomeWindow.document.close();
    }
}