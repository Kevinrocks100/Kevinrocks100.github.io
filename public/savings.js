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
                var postkeyOne = data.key
                document.getElementById("list_div").innerHTML += `
                <div class="eachGoalJust" id="${postkeyOne}" data-toggle="modal" data-target="#justsaveupdate">
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
              <div class="container">
              <!-- Button to Open the Modal -->
              <!-- The Modal -->
              <div class="modal" id="exactamt">
                <div class="modal-dialog">
                  <div class="modal-content">
                  
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Savings Goal</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                      <label> Goal Name:</label>
                      <input type="text" class="form-control" id="goalNameOne">
                      <label> Objective amount:</label>
                      <input type="text" class="form-control" id="objAmt">
                      <label> Amount to save:</label>
                      <input type="text" class="form-control" id="amtOne">
                      <br>
                      <button type="button" class="btn btn-success" id="goalButton">Start saving!</button>
                    </div>
                    
                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                  </div>
                </div>
              </div>
              
              <div class="modal" id="justsave">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Casually saving </h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                          <label> Goal Name:</label>
                          <input type="text" class="form-control" id="goalNameTwo">
                          <label> Amount to save:</label>
                          <input type="text" class="form-control" id="amtTwo">
                          <br>
                          <button type="button" class="btn btn-success" id="casualButton">Start saving!</button>
                        </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
      
                <div class="modal" id="justsaveupdate">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Casually saving </h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                          <label> Amount to save:</label>
                          <input type="text" class="form-control" id="amtTwo">
                          <br>
                          <div class="casualButtonUpdate" id="${postkeyOne}">
                          <button type="button" class="btn btn-success" id="casualButtonUpdate">Update</button>
                      </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
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
                        <input type="text" class="form-control" id="objAmt">
                        <label> Amount to save:</label>
                        <input type="text" class="form-control" id="amtOne">
                        <br>
                        <div class="goalButtonUpdate">
                        <button type="button" class="btn btn-success" id="goalButtonUpdate">Update</button>
                      </div>
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
            })
        });
        firebase.database().ref("Savings/" + 'ExactAmount/' + `${user.uid}/`).on("value", function(lists){
            lists.forEach(function(data){
                var info = data.val()
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
                      <progress class="progress is-success" value="100" max="100" ></progress>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
              <!-- Button to Open the Modal -->
              <!-- The Modal -->
              <div class="modal" id="exactamt">
                <div class="modal-dialog">
                  <div class="modal-content">
                  
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Savings Goal</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                      <label> Goal Name:</label>
                      <input type="text" class="form-control" id="goalNameOne">
                      <label> Objective amount:</label>
                      <input type="text" class="form-control" id="objAmt">
                      <label> Amount to save:</label>
                      <input type="text" class="form-control" id="amtOne">
                      <br>
                      <button type="button" class="btn btn-success" id="goalButton">Start saving!</button>
                    </div>
                    
                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                  </div>
                </div>
              </div>
              
              <div class="modal" id="justsave">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Casually saving </h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                          <label> Goal Name:</label>
                          <input type="text" class="form-control" id="goalNameTwo">
                          <label> Amount to save:</label>
                          <input type="text" class="form-control" id="amtTwo">
                          <br>
                          <button type="button" class="btn btn-success" id="casualButton">Start saving!</button>
                        </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
      
                <div class="modal" id="justsaveupdate">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Casually saving </h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                          <label> Amount to save:</label>
                          <input type="text" class="form-control" id="amtTwo">
                          <br>
                          <div class="casualButtonUpdate" >
                          <button type="button" class="btn btn-success" id="casualButtonUpdate">Update</button>
                      </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
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
                        <input type="text" class="form-control" id="objAmt">
                        <label> Amount to save:</label>
                        <input type="text" class="form-control" id="amtOne">
                        <br>
                        <div class="goalButtonUpdate" id="${postkeyTwo}">
                        <button type="button" class="btn btn-success" id="goalButtonUpdate">Update</button>
                      </div>
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
            })
        });

        [...document.getElementsByClassName("casualButtonUpdate")]
        .forEach(function (cardOne) {
          cardOne.addEventListener("click", goalClicked);
          function goalClicked() {
            casualButtonUpdate.addEventListener("click", function(){
                // firebase.database().ref('Savings/' + 'JustSave/' +`${cardOne.id}/`).update({
                //     amtTwo:amtTwo
                // })
                console.log(cardOne.id)
            })
          }
        });
[...document.getElementsByClassName("goalButtonUpdate")]
        .forEach(function (cardTwo) {
          cardTwo.addEventListener("click", gClicked);
          function gClicked() {
            goalButtonUpdate.addEventListener("click", function(){
                console.log(cardTwo.id)
                // firebase.database().ref('Savings/' + 'ExactAmount/' +`${cardTwo.id}/`).update({
                //     objAmt:objAmt, 
                //     amtOne:amtOne
                // })
            })
          }
        });

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