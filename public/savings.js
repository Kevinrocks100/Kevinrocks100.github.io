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
  var goalButton = document.getElementById("goalButton")
  var casualButton = document.getElementById("casualButton")
  var goalNameOne = document.getElementById("goalNameOne").value
  var goalNameTwo = document.getElementById("goalNameTwo").value
  var objAmt = document.getElementById("objAmt").value
  var amtOne = document.getElementById("amtOne").value
  var amtTwo = document.getElementById("amtTwo").value
  var auth = firebase.auth();
//   var docRef = firebase.firestore();
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        firebase.database().ref("Savings/" + 'JustSave/' + `${user.uid}/`).on("value", function(lists){
            lists.forEach(function(data){
                var info = data.val()
                var postkey = data.key
                console.log(postkey)
                document.getElementById("list_div").innerHTML += `
                <div class="eachGoal" id="${postkey}">
                <div class="card bg-dark text-white">
                  <img src="https://www.macmillandictionary.com/external/slideshow/full/White_full.png" class="card-img" alt="..." height="300px">
                  <div class="overlay-div"></div>
                  <div class="card-img-overlay">
                    <h3 class="card-title">${info.goalNameOne}</h3>
                    <p class="card-text"></p>
                    <div class="progress">
                      <progress class="progress is-success" value="100" max="100" ></progress>
                    </div>
                  </div>
                </div>
              </div>
                `
            })
        })
        firebase.database().ref("Savings/" + 'ExactAmount/' + `${user.uid}/`).on("value", function(lists){
            lists.forEach(function(data){
                var info = data.val()
                var postkey = data.key
                console.log(postkey)
                document.getElementById("list_div").innerHTML += `
                <div class="eachGoal" id="${postkey}">
                <div class="card bg-dark text-white">
                  <img src="https://www.macmillandictionary.com/external/slideshow/full/White_full.png" class="card-img" alt="..." height="300px">
                  <div class="overlay-div"></div>
                  <div class="card-img-overlay">
                    <h3 class="card-title">${info.goalNameOne}</h3>
                    <p class="card-text"></p>
                    <div class="progress">
                      <progress class="progress is-success" value="100" max="100" ></progress>
                    </div>
                  </div>
                </div>
              </div>
                `
            })
        })

        goalButton.addEventListener("click", function(){
            firebase.database().ref('Savings/' + 'ExactAmount/' +`${user.uid}/` + `${goalNameOne}`).set({
                objAmt:objAmt, 
                amtOne:amtOne,
                goalNameOne:goalNameOne
            })
        })
        casualButton.addEventListener("click", function(){
            firebase.database().ref('Savings/' + 'JustSave/' + `${user.uid}/` +  `${goalNameTwo}/`).set({
                amtTwo:amtTwo,
                goalNameOne:goalNameOne
            })
        })

    }
    })