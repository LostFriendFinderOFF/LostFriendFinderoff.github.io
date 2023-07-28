function search(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
    console.log("Buscando por: " + searchTerm);
  
    if (searchTerm === "developer") {
      window.location.href = "founder.html";
    } else {
      // Mostrar la imagen predeterminada cuando no se encuentra "developer"
      document.getElementById('imagenDiv').innerHTML = '<img src=""IMAGES/descarga (2).jpeg"" />';
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
      messageElement.style.display = 'block';
      setTimeout(function () {
        messageElement.style.display = 'none';
      }, 3000); // Ocultar el mensaje después de 3 segundos
    }
  }
  
