// Initialize Firebase with your Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyApk_XntWizsydSEy_uEwFXMAWbkMvAvyg",
        authDomain: "lostfriendfinderv2.firebaseapp.com",
        databaseURL: "https://lostfriendfinderv2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "lostfriendfinderv2",
        storageBucket: "lostfriendfinderv2.appspot.com",
        messagingSenderId: "154202283013",
        appId: "1:154202283013:web:c9dab3ae5286e97a5d906c"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storageRef = firebase.storage().ref();

function searchPaisaje(event) {
  event.preventDefault();

  const searchTerm = document.getElementById("searchTerm").value;

  // Replace "images/" with the folder name in your Firebase Storage where images are stored.
  const imageRef = storageRef.child("images/" + searchTerm);

  imageRef
    .getDownloadURL()
    .then((url) => {
      const imageContainer = document.getElementById("imageContainer");
      imageContainer.innerHTML = `<img src="${url}" alt="Image"/>`;
    })
    .catch((error) => {
      console.log("Image not found or error occurred: ", error);
      const imageContainer = document.getElementById("imageContainer");
      imageContainer.innerHTML = "<p>Image not found</p>";
    });
}