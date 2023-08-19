function search(event) {
  event.preventDefault();
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  console.log("Search by: " + searchTerm);

  if (searchTerm.includes("facebook") || searchTerm.includes("instagram")) {
    // Realiza la búsqueda en Google con los términos ingresados
    document.getElementById('search-bar').submit();
  } else {
    alert("Please enter a search term related to Facebook or Instagram.");
  }
}

/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) => {
  const searchBar = document.getElementById(search);
  const searchButton = document.getElementById(button);

  searchButton.addEventListener('click', () => {
    // Alternar la clase para expandir o contraer la barra de búsqueda
    searchBar.classList.toggle('show-search');
  });
}

toggleSearch('search-bar', 'search-button');
