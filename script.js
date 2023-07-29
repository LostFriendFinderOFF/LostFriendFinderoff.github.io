function search(event) {
  event.preventDefault();
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
  if (searchTerm === "logo") {
    document.getElementById('imagenDiv').innerHTML = '<img src="logo-hub.PNG" />';
  }
}

function showConstructionMessage(formType) {
  var messageElement;
  if (formType === 'login') {
    messageElement = document.getElementById('loginMessage');
  } else if (formType === 'signup') {
    messageElement = document.getElementById('signupMessage');
  }

  if (messageElement) {
    messageElement.classList.add('active'); 
    setTimeout(function () {
      messageElement.classList.remove('active');
    }, 3000);
  }
}





