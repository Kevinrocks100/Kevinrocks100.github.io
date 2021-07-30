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
  var goalButtonUpdate = document.getElementById("goalButtonUpdate")
  var casualButtonUpdate = document.getElementById("casualButtonUpdate")
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
                var amtTwo = info.amtTwo;
                function percentage(amtTwo){
                    //return (amtTwo/100)*amtTwo;
                    return (amtTwo/amtTwo)*100
                }
                var width = percentage(amtTwo,amtTwo)+"%";
                var postkeyOne = data.key;
                document.getElementById("list_div").innerHTML += `
                <div class="eachGoalJust" id="${postkeyOne}" data-toggle="modal" data-target="#justsaveupdate">
                <div class="card bg-dark text-white">
                  <img src="https://www.macmillandictionary.com/external/slideshow/full/White_full.png" class="card-img" alt="..." height="300px">
                  <div class="overlay-div"></div>
                  <div class="card-img-overlay">
                    <h3 class="card-title">${info.goalNameOne}</h3>
                    <p class="card-text"></p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${width}" aria-valuenow="${amtTwo}" aria-valuemin="0" aria-valuemax="${amtTwo}"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
              <!-- Button to Open the Modal -->
              <!-- The Modal -->
      
                <div class="modal" id="justsaveupdate">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Casually saving </h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                          <label> Amount to save:</label>
                          <input type="text" class="form-control" id="amtTwoUpdate">
                          <br>

                          <button type="button" class="btn btn-success goalButtonUpdate" id="${postkeyOne}">Update</button>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
      
            </div>
                `
                casualButtonUpdate(postkeyOne)
            })
        });
        firebase.database().ref("Savings/" + 'ExactAmount/' + `${user.uid}/`).on("value", function(lists){
            lists.forEach(function(data){
                var info = data.val()
                var amtOne = info.amtOne;
                var objAmt = info.objAmt;
                function percentage(amtOne,objAmt){
                    //return (amtTwo/100)*amtTwo;
                    return (amtOne/objAmt)*100
                }
                var width = percentage(amtOne,objAmt)+"%";
                var postkeyTwo = data.key
                document.getElementById("list_div").innerHTML += `
                <div class="eachGoalExact" id="${postkeyTwo}" data-toggle="modal" data-target="#exactamtupdate">
                <div class="card bg-dark text-white">
                  <img src="https://www.macmillandictionary.com/external/slideshow/full/White_full.png" class="card-img" alt="..." height="300px">
                  <div class="overlay-div"></div>
                  <div class="card-img-overlay">
                    <h3 class="card-title">${info.goalNameOne}</h3>
                    <p class="card-text"></p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${width}" aria-valuenow="${amtOne}" aria-valuemin="0" aria-valuemax="${objAmt}"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
              <!-- Button to Open the Modal -->
              <!-- The Modal -->

      
                <div class="modal" id="exactamtupdate">
                  <div class="modal-dialog">
                    <div class="modal-content">
                    
                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">Savings Goal</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      
                      <!-- Modal body -->
                      <div class="modal-body">
                        <label> Objective amount:</label>
                        <input type="text" class="form-control" id="objAmtUpdate">
                        <label> Amount to save:</label>
                        <input type="text" class="form-control" id="amtOneUpdate">
                        <br>

                        <button type="button" class="goalButtonUpdate" id="${postkeyTwo}">Update</button>
                     
                      </div>
                      
                      <!-- Modal footer -->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
      
            </div>
                `
                goalButtonUpdate(postkeyTwo)
            })
        });

        function casualButtonUpdate(postkeyOne){
            [...document.getElementsByClassName("casualButtonUpdate")]
        .forEach(function (cardOne) {
          cardOne.addEventListener("click", goalClicked);
          function goalClicked() {
            casualButtonUpdate.addEventListener("click", function(){
                // firebase.database().ref('Savings/' + 'JustSave/' +`${cardOne.id}/`).update({
                //     amtTwo:document.getElementById("amtTwoUpdate").value
                // })
                console.log(postkeyOne)
            })
          }
        });
        }
        casualButtonUpdate()

        function goalButtonUpdate(postkeyTwo){
            [...document.getElementsByClassName("goalButtonUpdate")]
        .forEach(function (cardTwo) {
          cardTwo.addEventListener("click", gClicked);
          function gClicked() {
            goalButtonUpdate.addEventListener("click", function(){
                console.log(postkeyTwo)
                firebase.database().ref('Savings/' + 'ExactAmount/' +`${cardTwo.id}/`).update({
                    objAmt:document.getElementById("objAmtUpdate").value, 
                    amtOne:document.getElementById("amtOneUpdate").value
                })
            })
          }
        });
        }
        goalButtonUpdate()

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