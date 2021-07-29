var firebaseConfig = {
    apiKey: "AIzaSyAE9G_OkAFpyEqDRh4L3PpOgg9N1fl_X6g",
    authDomain: "kpcbudgeting.firebaseapp.com",
    databaseURL: "https://kpcbudgeting-default-rtdb.firebaseio.com",
    projectId: "kpcbudgeting",
    storageBucket: "kpcbudgeting.appspot.com",
    messagingSenderId: "97358543124",
    appId: "1:97358543124:web:95cb0bd86c1459ce632a01"
  };
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementByld("home").innerHTML;
    } else {
        <div class="container-fluid">
          <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white">
            <div class="container-fluid"><a class="navbar-brand" href="#">KCP Budgeting</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav">
                  <li class="nav-item"><a class="nav-link active" href="#">Budgeting</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Savings</a></li>
                </ul>
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item"><a class="nav-link active" href="login.html"><button class="btn btn-outline-primary" type="button">Log In</button></a></li>
                  <li class="nav-item"><a class="nav-link active" href="signup.html"><button class="btn btn-primary" type="button">Signup</button></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>;
    }
})
