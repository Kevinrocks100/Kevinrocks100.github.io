firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("navbar").innerHTML = `
      <div class="collapse navbar-collapse" id="navcol-1">
      <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="index.html">KCP Budgeting</a></li>
          <li class="nav-item"><a class="nav-link active" href="budgeting.html">Budgeting</a></li>
          <li class="nav-item"><a class="nav-link" href="savings.html">Savings</a></li>
      </ul>
      <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" onclick="logout()" ><button class="btn btn-primary" type="button">Logout</button></a></li>
      </ul>
  </div>
</div>
      `
    } else {
        document.getElementById("navbar").innerHTML = `
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