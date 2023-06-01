var firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId
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
  }
  else {
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
    const auth = firebase.auth();
    document.querySelector("#show-register").addEventListener("click", () => {
      showRegistration();
    });

    const showRegistration = () => {
      document.querySelector("#registration-page").classList.remove("hide");
      document.querySelector("#login-page").classList.add("hide");
      document.querySelector("#homepage").classList.add("hide");
    };

    document.querySelector("#show-login").addEventListener("click", () => {
      showLogin();
    });

    const showLogin = () => {
      document.querySelector("#registration-page").classList.add("hide");
      document.querySelector("#login-page").classList.remove("hide");
      document.querySelector("#homepage").classList.add("hide");
    };

    document.querySelector("#signout").addEventListener("click", () => {
      signOut();
    });

    const register = () => {
      const email = document.querySelector("#registration-email").value;
      const reemail = document.querySelector("#registration-reemail").value;
      const password = document.querySelector("#registration-password").value;

      if (email.trim() == "") {
        alert("Enter Email");
      } else if (password.trim().length < 7) {
        alert("Password must be at least 7 characters");
      } else if (email != reemail) {
        alert("emails do not match");
      } else {
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ...
        });
      }
    };

    document.querySelector("#register").addEventListener("click", () => {
      register();
    });

    //register when you hit the enter key
    document.querySelector("#registration-password").addEventListener("keyup", (e) => {
      if (event.keyCode === 13) {
        e.preventDefault();
        register();
      }
    });

    const login = () => {
      const email = document.querySelector("#login-email").value;
      const password = document.querySelector("#login-password").value;

      if (email.trim() == "") {
        alert("Enter Email");
      } else if (password.trim() == "") {
        alert("Enter Password");
      } else {
        authenticate(email, password);
      }
    };

    document.querySelector("#login").addEventListener("click", () => {
      login();
    });

    //sign in when you hit enter
    document.querySelector("#login-password").addEventListener("keyup", (e) => {
      if (event.keyCode === 13) {
        e.preventDefault();
        login();
      }
    });

    const authenticate = (email, password) => {
      const auth = firebase.auth();
      auth.signInWithEmailAndPassword(email, password);
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    };

    const showHomepage = () => {
      document.querySelector("#registration-page").classList.add("hide");
      document.querySelector("#login-page").classList.add("hide");
      document.querySelector("#homepage").classList.remove("hide");
    };

    const signOut = () => {
      firebase.auth().signOut().then(function () {
        location.reload();
      })
      .catch(function (error) {
        alert("error signing out, check network connection");
      });
    };

    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        showHomepage();
      }
    });

    document.querySelector("#forgot-password").addEventListener("click", () => {
      const email = document.querySelector("#login-email").value;
      if (email.trim() == "") {
        alert("Enter Email");
      } else {
        forgotPassword(email);
      }
    });

    const forgotPassword = (email) => {
      auth.sendPasswordResetEmail(email).then(function () {
        alert("email sent");
      })
      .catch(function (error) {
        alert("invalid email or bad network connection");
      });
    };
  }
});

function logout(){
  firebase.auth().signOut().then(function() {
    alert('Logged out');
  }).catch(function(error) {
  // An error happened.
    console.log(error);
  });
}
