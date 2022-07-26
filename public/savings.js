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
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("HOME").innerHTML = `
      <nav class="navbar navbar-light navbar-expand-md sticky-top bg-dark" id = "nav">
        <div class="container-fluid" id="container-fluid"><a class="navbar-brand text-white" href="index.html">KCP Budgeting</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link active text-white" href="budgeting.html">Budgeting</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="savings.html">Savings</a></li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link active" onclick="logout()" ><button class="btn btn-primary" type="button">Logout</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    `
    var userID = user.uid;
    var goalButton = document.getElementById("goalButton");
    var goal = document.getElementById("goal");
    var objAmt = document.getElementById("objAmt");
    var amtSave = document.getElementById("amtSave");
    var content = document.getElementById("content");
    var database = firebase.database();
    var usersRef = database.ref('/Users');
    var currentUser = usersRef.child(userID);
    var x = 1;
    currentUser.child("Saving").once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        document.getElementById('context').innerHTML += `
        <div class="container">
          <div class="card bg-dark text-white">
            <img src="assets/savings.jpg" class="card-img" alt="Savings" height="200px">
            <div class="card-img-overlay">
              <h5 id="goalName" class="card-title"></h5>
              <p id="objectiveAmount" class="card-text"></p>
              <p id="amountSave" class="card-text"></p>
            </div>
          </div>
        </div>
        `
        var goalName = childSnapshot.child("Goal_Name").val();
        var objectiveAmount = childSnapshot.child("Objective_Amount").val();
        var amountSave = childSnapshot.child("Amount_Save").val();
        document.getElementById("goalName").id = 'goalName' + x; 
        document.getElementById("goalName" + x).innerHTML = goalName; 
        document.getElementById("objectiveAmount").id = "objectiveAmount" + x;
        document.getElementById("objectiveAmount" + x).innerHTML = objectiveAmount;
        document.getElementById("amountSave").id = "amountSave" + x;
        document.getElementById("amountSave" + x).innerHTML = amountSave;
        x++
      });
    });
    goalButton.addEventListener('click', e => {
      e.preventDefault();
      currentUser.child("Saving").child(x).set({
        Goal_Name: goal.value,
        Objective_Amount: objAmt.value,
        Amount_Save: amtSave.value,
      }); 
    });
  } else {
    document.getElementById("HOME").innerHTML = `
      <nav class="navbar navbar-light navbar-expand-md sticky-top bg-dark" id = "nav">
        <div class="container-fluid" id="container-fluid"><a class="navbar-brand text-white" href="index.html">KCP Budgeting</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link active text-white" href="budgeting.html">Budgeting</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="savings.html">Savings</a></li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link active" href="login.html"><button class="btn btn-outline-primary" type="button">Log In</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    `
  }
})

function logout(){
  firebase.auth().signOut().then(function() {
    alert('Logged out');
  }).catch(function(error) {
    console.log(error);
  });
}
