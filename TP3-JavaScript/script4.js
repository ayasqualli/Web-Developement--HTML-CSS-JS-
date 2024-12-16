document.getElementById('text').addEventListener('mouseover', function() {
    this.style.color = 'green';
    this.style.fontFamily = 'Arial, sans-serif';
    this.style.fontWeight = '600';
    this.style.textDecoration = 'underline';
    this.style.fontSize = '50px';
    this.style.position = 'absolute';
    this.style.top = '50%';
    this.style.left = '50%';
    this.style.transform = 'translate(-50%, -50%)';
  });

  document.getElementById('text').addEventListener('mouseout', function() {
    this.style.color = '';
    this.style.fontFamily = '';
    this.style.fontWeight = '';
    this.style.textDecoration = '';
    this.style.fontSize = '';
    this.style.position = '';
    this.style.top = '';
    this.style.left = '';
    this.style.transform = '';
});
