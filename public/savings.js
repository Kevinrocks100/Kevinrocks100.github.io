var firebaseConfig = {
  apiKey: "AIzaSyBEXrgqXEA54Jvv1l04Px8bTodK1KAEdAc",
  authDomain: "fir-f80af.firebaseapp.com",
  databaseURL: "https://fir-f80af-default-rtdb.firebaseio.com",
  projectId: "fir-f80af",
  storageBucket: "fir-f80af.appspot.com",
  messagingSenderId: "371053966260",
  appId: "1:371053966260:web:81a6970d6b486bef2138e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var goalButton = document.getElementById("goalButton");
    var casualButton = document.getElementById("casualButton");
    var goalNameOne = document.getElementById("goalNameOne");
    var goalNameTwo = document.getElementById("goalNameTwo");
    var objAmt = document.getElementById("objAmt");
    var amtOne = document.getElementById("amtOne");
    var amtTwo = document.getElementById("amtTwo");
    var database = firebase.database();
    var usersRef = database.ref('/users');
    goalButton.addEventListener('click', e => {
      e.preventDefault();
      usersRef.child(userId.value).set({
        first_name: goalNameOne,
        last_name: objAmt,
        age: amtOne
      });
    });
  }
})
