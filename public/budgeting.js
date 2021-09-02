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
      const user = firebase.auth().currentUser;
      if (user) {
        var uid = user.uid;
        var budget = document.getElementById('budget');
        var tuition = document.getElementById('tuition');
        var roomandboard = document.getElementById('roomandboard');
        var booksandsupplies = document.getElementById('booksandsupplies');
        var additionalfees = document.getElementById('additionalfees');
        var personalexpenses = document.getElementById('personalexpenses');
        var savebudget = document.getElementById('savebudget');
        var totalexpenses = document.getElementById('totalexpenses');
        var database = firebase.database();
        var usersRef = database.ref('/Users');
        savebudget.addEventListener('click', e => {
          e.preventDefault();
          usersRef.child(uid).set({
            Budget: budget.value,
            Tuition: tuition.value,
            RoomandBoard: roomandboard.value,
            Booksandsupplies: booksandsupplies.value,
            Additionalfees: additionalfees.value,
            Personalexpenses: personalexpenses.value,
            Totalexpenses: totalexpenses.value,
          });
        //  document.getElementById('Form').reset();
        });
        const seeresult = document.getElementById('seeresult');
        savebudget.onclick = function() {
          seeresult.style.visibility = "visible";
        }
        seeresult.onclick = function() {
          var userDataRef = usersRef.child(uid);
          userDataRef.once("value").then(function(snapshot){
            var budget = snapshot.val().Budget;
            var tuition = snapshot.val().Tuition;
            var roomandboard = snapshot.val().RoomandBoard;
            var booksandsupplies = snapshot.val().Booksandsupplies;
            var additionalfees = snapshot.val().Additionalfees;
            var personalexpenses = snapshot.val().Personalexpenses;
            var totalexpenses = snapshot.val().Totalexpenses;
            document.getElementById("budget").innerHTML = budget;
            document.getElementById("tuition").innerHTML = tuition;
            document.getElementById("roomandboard").innerHTML = roomandboard;
            document.getElementById("booksandsupplies").innerHTML = booksandsupplies;
            document.getElementById("additionalfees").innerHTML = additionalfees;
            document.getElementById("personalexpenses").innerHTML = personalexpenses;
            document.getElementById("totalexpenses").innerHTML = totalexpenses;
          });
          document.getElementById('content').innerHTML = `
            <div class="home">
              <br /><br/ ><br/ >
              <h1 style="margin: 0; padding: 0;">College Budgeting Form Results</h1>
              <br /><br/ >
              <p>Your maximum budget is $<span id="budget"></span>.</p>
              <p>Your college tuition is $<span id="tuition"></span>.</p>
              <p>Your room and board is $<span id="roomandboard"></span>.</p>
              <p>Your books and supplies is $<span id="booksandsupplies"></span>.</p>
              <p>Your additional fees is $<span id="additionalfees"></span>.</p>
              <p>Your personal expenses is $<span id="personalexpenses"></span>.</p>
              <p>Your total expenses is $<span id="totalexpenses"></span>.</p>
              <p style="margin: 0; padding: 0;" id="budgetexceeded"></p>
              <br/ >
              <button type="submit" class="btn btn-outline-primary" id="back"><a href="budgeting.html">Back</a></button>
              <br/ ><br/ >
            </div>
          `
        }
      }
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
  // An error happened.
    console.log(error);
  });
}

function calculatetotalexpenses() {
  var tuition = parseInt(document.getElementById("tuition").value);
  var roomandboard = parseInt(document.getElementById("roomandboard").value);
  var booksandsupplies = parseInt(document.getElementById("booksandsupplies").value);
  var additionalfees = parseInt(document.getElementById("additionalfees").value);
  var personalexpenses = parseInt(document.getElementById("personalexpenses").value);
  document.getElementById("totalexpenses").value = tuition + roomandboard + booksandsupplies + additionalfees + personalexpenses;
}
