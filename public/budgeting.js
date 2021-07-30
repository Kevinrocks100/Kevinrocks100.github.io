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
//   var nameOne = document.getElementById("nameOne").value
//   var priceOne = document.getElementById("priceOne").value
//   var saveOne = document.getElementById("saveOne")
//   var addExOne = document.getElementById("addExOne")
  var budgetText = document.getElementById("budgetText").value
  var budgetButton = document.getElementById("budgetButton")
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // addExOne.addEventListener("click",function(){
        //     document.getElementById("row").innerHTML += `
        //     <div class="row">
        //     <div class="form-group col-sm-3">
        //         <div class="input-group"> <span class="input-group-addon"></span>
        //             <input type="text" class="form-control" id="nameOne" placeholder="Item" aria-describedby="basic-addon1" style="width:100px;">
        //         </div>
        //     </div>
        //     <div class="form-group col-sm-3">
        //         <div class="input-group"> <span class="input-group-addon"></span>
        //             <input type="text" class="form-control" id="priceOne" placeholder="Item" aria-describedby="basic-addon1" style="width:100px;">
        //         </div>
        //     </div>
        // </div>
        //     `
        // })

        // budgetButton.addEventListener("click",function(){
        //     firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
        //         budget:budgetText
        //     })
        // })

        document.getElementById("saveOne").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' +`${user.uid}/`).set({
                [document.getElementById("toIOne").value]:document.getElementById("toPOne").value,
                [document.getElementById("toITwo").value]:document.getElementById("toPTwo").value,
                [document.getElementById("toIThree").value]:document.getElementById("toPThree").value,
                [document.getElementById("toIFour").value]:document.getElementById("toPFour").value
            })
        })
        document.getElementById("saveThree").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' +`${user.uid}/`).update({
                [document.getElementById("hoIOne").value]:document.getElementById("hoPOne").value,
                [document.getElementById("hoITwo").value]:document.getElementById("hoPTwo").value,
                [document.getElementById("hoIThree").value]:document.getElementById("hoPThree").value,
                [document.getElementById("hoIFour").value]:document.getElementById("hoPFour").value
            })
        })
        document.getElementById("saveFour").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("suIOne").value]:document.getElementById("suPOne").value,
                [document.getElementById("suITwo").value]:document.getElementById("suPTwo").value,
                [document.getElementById("suIThree").value]:document.getElementById("suPThree").value,
                [document.getElementById("suIFour").value]:document.getElementById("suPFour").value
            })
        })
        document.getElementById("saveFive").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("grIOne").value]:document.getElementById("grPOne").value,
                [document.getElementById("grITwo").value]:document.getElementById("grPTwo").value,
                [document.getElementById("grIThree").value]:document.getElementById("grPThree").value,
                [document.getElementById("grIFour").value]:document.getElementById("grPFour").value
            })
        })
        document.getElementById("saveSix").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("mpIOne").value]:document.getElementById("mpPOne").value,
                [document.getElementById("mpITwo").value]:document.getElementById("mpPTwo").value,
                [document.getElementById("mpIThree").value]:document.getElementById("mpPThree").value,
                [document.getElementById("mpIFour").value]:document.getElementById("mpPFour").value
            })
        })
        document.getElementById("saveSeven").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("tpIOne").value]:document.getElementById("tpPOne").value,
                [document.getElementById("tpITwo").value]:document.getElementById("tpPTwo").value,
                [document.getElementById("tpIThree").value]:document.getElementById("tpPThree").value,
                [document.getElementById("tpIFour").value]:document.getElementById("tpPFour").value
            })
        })
        document.getElementById("saveEight").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("laIOne").value]:document.getElementById("laPOne").value,
                [document.getElementById("laITwo").value]:document.getElementById("laPTwo").value,
                [document.getElementById("laIThree").value]:document.getElementById("laPThree").value,
                [document.getElementById("laIFour").value]:document.getElementById("laPFour").value
            })
        })
        document.getElementById("saveNine").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("vhIOne").value]:document.getElementById("vhPOne").value,
                [document.getElementById("vhITwo").value]:document.getElementById("vhPTwo").value,
                [document.getElementById("vhIThree").value]:document.getElementById("vhPThree").value,
                [document.getElementById("vhIFour").value]:document.getElementById("vhPFour").value
            })
        })
        document.getElementById("saveTen").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("diIOne").value]:document.getElementById("diPOne").value,
                [document.getElementById("diITwo").value]:document.getElementById("diPTwo").value,
                [document.getElementById("diIThree").value]:document.getElementById("diPThree").value,
                [document.getElementById("diIFour").value]:document.getElementById("diPFour").value
            })
        })
        document.getElementById("saveEleven").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("ecIOne").value]:document.getElementById("ecPOne").value,
                [document.getElementById("ecITwo").value]:document.getElementById("ecPTwo").value,
                [document.getElementById("ecIThree").value]:document.getElementById("ecPThree").value,
                [document.getElementById("ecIFour").value]:document.getElementById("ecPFour").value
            })
        })
        document.getElementById("saveTwelve").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("enIOne").value]:document.getElementById("enPOne").value,
                [document.getElementById("enITwo").value]:document.getElementById("enPTwo").value,
                [document.getElementById("enIThree").value]:document.getElementById("enPThree").value,
                [document.getElementById("enIFour").value]:document.getElementById("enPFour").value
            })
        })
        document.getElementById("saveThirteen").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("otIOne").value]:document.getElementById("otPOne").value,
                [document.getElementById("otITwo").value]:document.getElementById("otPTwo").value,
                [document.getElementById("otIThree").value]:document.getElementById("otPThree").value,
                [document.getElementById("otIFour").value]:document.getElementById("otPFour").value
            })
        })
        // saveOne.addEventListener("click", function(){
        //     firebase.database().ref('Budgets/' + `${user.uid}/`).set({
        //         nameOne:nameOne,
        //         priceOne:priceOne
        //     })
        // })
    }
    })