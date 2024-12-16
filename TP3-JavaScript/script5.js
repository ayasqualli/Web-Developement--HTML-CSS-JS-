var menu = document.getElementsByClassName("menu");
var i;

for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var sousMenuContainer = this.nextElementSibling;
    if (sousMenuContainer && sousMenuContainer.classList.contains('sous-menu-container')) {
      if (sousMenuContainer.style.display === "block") {
        sousMenuContainer.style.display = "none";
      } else {
        sousMenuContainer.style.display = "block";
      }
    }
  });
}