var firebaseConfig = {
apiKey: "AIzaSyAE9G_OkAFpyEqDRh4L3PpOgg9N1fl_X6g",
authDomain: "kpcbudgeting.firebaseapp.com",
projectId: "kpcbudgeting",
storageBucket: "kpcbudgeting.appspot.com",
messagingSenderId: "97358543124",
appId: "1:97358543124:web:95cb0bd86c1459ce632a01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var email = document.getElementById("inputEmail").value
var password = document.getElementById("inputPassword").value
var login = document.getElementById("login")
login.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error : " + errorMessage);
      });
    promise.catch(e => alert(e.message));
})
document.addEventListener('keydown', function (key) {
  if (key.which === 13) {
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error : " + errorMessage);
    });
  promise.catch(e => alert(e.message));
  }
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser;
    window.location = "index.html";
    console.log(user)
    if(user != null){
      // var email_id = user.email;
    }
  } 
});