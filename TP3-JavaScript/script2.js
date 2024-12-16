const show = document.getElementById("show");
const hide = document.getElementById("hide");
const image = document.getElementById("image");

function ShowImage(event) {
    event.preventDefault();
    // The image is hidden by default
    window.onload = function() {
        document.images["image"].style.display = "none";
    }
    
    if (event.target.onclick) {
        if (event.target.value === "1") {
            document.images["image"].style.display = "block";
        } else if (event.target.value === "0") {
            document.images["image"].style.display = "none";
        }
    }
    return;
}
