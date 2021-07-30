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

        firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).on("value", snap => {
            var info = snap.val();
            var budget = parseFloat(info.budget);
            var rent = parseFloat(info.Rent);
            if(budget > rent){
                //alert("You are within your budget, you don't need to make any major adjustments")
                document.getElementById("budgetRec").innerHTML = "Your budget is " + budget + " and your total expenses are " + rent + " You are within your budget, you don't need to make any major adjustments.";
            }
        })

        budgetButton.addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).set({
                budget:budgetText
            })
        })

        document.getElementById("saveOne").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("toIOne").value]:parseFloat(document.getElementById("toPOne").value),
                [document.getElementById("toITwo").value]:parseFloat(document.getElementById("toPTwo").value),
                [document.getElementById("toIThree").value]:parseFloat(document.getElementById("toPThree").value),
                [document.getElementById("toIFour").value]:parseFloat(document.getElementById("toPFour").value)
            })
        })
        document.getElementById("saveThree").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("hoIOne").value]:parseFloat(document.getElementById("hoPOne").value),
                [document.getElementById("hoITwo").value]:parseFloat(document.getElementById("hoPTwo").value),
                [document.getElementById("hoIThree").value]:parseFloat(document.getElementById("hoPThree").value),
                [document.getElementById("hoIFour").value]:parseFloat(document.getElementById("hoPFour").value)
            })
        })
        document.getElementById("saveFour").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("suIOne").value]:parseFloat(document.getElementById("suPOne").value),
                [document.getElementById("suITwo").value]:parseFloat(document.getElementById("suPTwo").value),
                [document.getElementById("suIThree").value]:parseFloat(document.getElementById("suPThree").value),
                [document.getElementById("suIFour").value]:parseFloat(document.getElementById("suPFour").value)
            })
        })
        document.getElementById("saveFive").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("grIOne").value]:parseFloat(document.getElementById("grPOne").value),
                [document.getElementById("grITwo").value]:parseFloat(document.getElementById("grPTwo").value),
                [document.getElementById("grIThree").value]:parseFloat(document.getElementById("grPThree").value),
                [document.getElementById("grIFour").value]:parseFloat(document.getElementById("grPFour").value)
            })
        })
        document.getElementById("saveSix").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("mpIOne").value]:parseFloat(document.getElementById("mpPOne").value),
                [document.getElementById("mpITwo").value]:parseFloat(document.getElementById("mpPTwo").value),
                [document.getElementById("mpIThree").value]:parseFloat(document.getElementById("mpPThree").value),
                [document.getElementById("mpIFour").value]:parseFloat(document.getElementById("mpPFour").value)
            })
        })
        document.getElementById("saveSeven").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("tpIOne").value]:parseFloat(document.getElementById("tpPOne").value),
                [document.getElementById("tpITwo").value]:parseFloat(document.getElementById("tpPTwo").value),
                [document.getElementById("tpIThree").value]:parseFloat(document.getElementById("tpPThree").value),
                [document.getElementById("tpIFour").value]:parseFloat(document.getElementById("tpPFour").value)
            })
        })
        document.getElementById("saveEight").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("laIOne").value]:parseFloat(document.getElementById("laPOne").value),
                [document.getElementById("laITwo").value]:parseFloat(document.getElementById("laPTwo").value),
                [document.getElementById("laIThree").value]:parseFloat(document.getElementById("laPThree").value),
                [document.getElementById("laIFour").value]:parseFloat(document.getElementById("laPFour").value)
            })
        })
        document.getElementById("saveNine").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("vhIOne").value]:parseFloat(document.getElementById("vhPOne").value),
                [document.getElementById("vhITwo").value]:parseFloat(document.getElementById("vhPTwo").value),
                [document.getElementById("vhIThree").value]:parseFloat(document.getElementById("vhPThree").value),
                [document.getElementById("vhIFour").value]:parseFloat(document.getElementById("vhPFour").value)
            })
        })
        document.getElementById("saveTen").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("diIOne").value]:parseFloat(document.getElementById("diPOne").value),
                [document.getElementById("diITwo").value]:parseFloat(document.getElementById("diPTwo").value),
                [document.getElementById("diIThree").value]:parseFloat(document.getElementById("diPThree").value),
                [document.getElementById("diIFour").value]:parseFloat(document.getElementById("diPFour").value)
            })
        })
        document.getElementById("saveEleven").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("ecIOne").value]:parseFloat(document.getElementById("ecPOne").value),
                [document.getElementById("ecITwo").value]:parseFloat(document.getElementById("ecPTwo").value),
                [document.getElementById("ecIThree").value]:parseFloat(document.getElementById("ecPThree").value),
                [document.getElementById("ecIFour").value]:parseFloat(document.getElementById("ecPFour").value)
            })
        })
        document.getElementById("saveTwelve").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("enIOne").value]:parseFloat(document.getElementById("enPOne").value),
                [document.getElementById("enITwo").value]:parseFloat(document.getElementById("enPTwo").value),
                [document.getElementById("enIThree").value]:parseFloat(document.getElementById("enPThree").value),
                [document.getElementById("enIFour").value]:parseFloat(document.getElementById("enPFour").value)
            })
        })
        document.getElementById("saveThirteen").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                [document.getElementById("otIOne").value]:parseFloat(document.getElementById("otPOne").value),
                [document.getElementById("otITwo").value]:parseFloat(document.getElementById("otPTwo").value),
                [document.getElementById("otIThree").value]:parseFloat(document.getElementById("otPThree").value),
                [document.getElementById("otIFour").value]:parseFloat(document.getElementById("otPFour").value)
            })
        })
        // saveOne.addEventListener("click", function(){
        //     firebase.database().ref('Budgets/' + `${user.uid}/`).set({
        //         nameOne:nameOne,
        //         priceOne:priceOne
        //     })
        // })
    } else{
        window.location = "index.html";
    }
    })