window.onload = function() {
    const image1 = document.querySelector('img[name="leaf"]');
    const image2 = document.querySelector('img[name="coccinelle"]');
    let typed = document.getElementById("text");

    function SelectedImage(event) {
        event.preventDefault();
        if (event.target.getAttribute('value') === "1") {
            typed.innerHTML = "Feuille";
        } else if (event.target.getAttribute('value') === "0") {
            typed.innerHTML = "Coccinelle";
        }
        else{
            return;
        }
    }

    image1.onclick = SelectedImage;
    image2.onclick = SelectedImage;
}