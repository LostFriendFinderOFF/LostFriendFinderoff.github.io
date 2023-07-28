function search(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
    console.log("Buscando por: " + searchTerm);
  
    if (searchTerm === "logo") {
      document.getElementById('imagenDiv').innerHTML = '<img src="logo-hub.PNG" />';
  }
  
  function showConstructionMessage(formType) {
    var messageElement;
    if (formType === 'login') {
      messageElement = document.getElementById('loginMessage');
    } else if (formType === 'signup') {
      messageElement = document.getElementById('signupMessage');
    }
  
    if (messageElement) {
      messageElement.style.display = 'block';
      setTimeout(function () {
        messageElement.style.display = 'none';
      }, 3000); 
    }
  }
  
