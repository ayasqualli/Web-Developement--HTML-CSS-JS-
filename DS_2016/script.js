document.getElementById('image').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.zIndex = '10';
    this.style.left = '70%';
    this.style.transform = 'translate(0, 0)';
}); // Added missing closing parenthesis

document.getElementById('image').addEventListener('mouseout', function() {
    this.style.position = '';
    this.style.zIndex = '';
    this.style.left = '';
    this.style.transform = '';
});