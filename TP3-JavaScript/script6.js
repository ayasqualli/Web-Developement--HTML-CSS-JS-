document.addEventListener('DOMContentLoaded', function() {
    var menu2 = document.getElementById('menu2');
    
    menu2.addEventListener('click', function() {
        this.classList.toggle('active');
        var sousMenuContainer = this.querySelector('.sous-menu-container');
        if (sousMenuContainer.style.display === 'block') {
            sousMenuContainer.style.display = 'none';
        } else {
            sousMenuContainer.style.display = 'block';
        }
    });
});