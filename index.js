document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('goto-page-one').onclick = function() {
    window.location.href = 'pageOne.html';
  };
  document.getElementById('goto-page-two').onclick = function() {
    window.location.href = 'pageTwo.html';
  };
}); 