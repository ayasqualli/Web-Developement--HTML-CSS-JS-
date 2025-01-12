var elements = document.getElementsByClassName('navbar-element');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function() {
        this.style.backgroundColor='red';
        this.style.color="white";
    });

    elements[i].addEventListener('mouseout', function() {
        this.style.backgroundColor='';
        this.style.color="";
    });

    elements[i].addEventListener('click', function() {
        this.style.backgroundColor='green';
        this.style.color="white";
    });
}