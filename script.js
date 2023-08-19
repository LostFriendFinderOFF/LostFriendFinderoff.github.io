function search(event) {
  event.preventDefault();
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  console.log("Search by: " + searchTerm);

  if (searchTerm === "logo") {
    document.getElementById('imagenDiv').innerHTML = '<img src="logo-hub.PNG" />';
  }

  document.getElementById('loadingAnimation').style.display = 'inline-block';
  setTimeout(function () {
    document.getElementById('loadingAnimation').style.display = 'none';
  }, 3000); // Adjust the delay (in milliseconds) as needed
}
/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) =>{
   const searchBar = document.getElementById(search),
         searchButton = document.getElementById(button)

   searchButton.addEventListener('click', () =>{
       // We add the show-search class, so that the search bar expands
       searchBar.classList.toggle('show-search')
   })
}
toggleSearch('search-bar', 'search-button')
