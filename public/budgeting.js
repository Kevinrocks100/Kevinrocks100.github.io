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
            toIOne = document.getElementById("toIOne").value;
            firebase.database().ref('Budgets/' + 'OfficialBudget/' +`${user.uid}/`).set({
                toIOne:document.getElementById("toIOne").value,
                // toPOne:document.getElementById("toPOne").value,
                // toITwo:document.getElementById("toIOne").value,
                // toPTwo:document.getElementById("toPOne").value,
                // toIThree:document.getElementById("toIOne").value,
                // toPThree:document.getElementById("toPOne").value,
                // toIFour:document.getElementById("toIOne").value,
                // toPFour:document.getElementById("toPOne").value
            })
        })
        document.getElementById("saveThree").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' +`${user.uid}/`).update({
                hoIOne:document.getElementById("hoIOne").value,
                hoPOne:document.getElementById("hoPOne").value,
                hoITwo:document.getElementById("hoIOne").value,
                hoPTwo:document.getElementById("hoPOne").value,
                hoIThree:document.getElementById("hoIOne").value,
                hoPThree:document.getElementById("hoPOne").value,
                hoIFour:document.getElementById("hoIOne").value,
                hoPFour:document.getElementById("hoPOne").value
            })
        })
        document.getElementById("saveFour").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                suIOne:document.getElementById("suIOne").value,
                suPOne:document.getElementById("suPOne").value,
                suITwo:document.getElementById("suIOne").value,
                suPTwo:document.getElementById("suPOne").value,
                suIThree:document.getElementById("suIOne").value,
                suPThree:document.getElementById("suPOne").value,
                suIFour:document.getElementById("suIOne").value,
                suPFour:document.getElementById("suPOne").value
            })
        })
        document.getElementById("saveFive").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                grIOne:document.getElementById("grIOne").value,
                grPOne:document.getElementById("grPOne").value,
                grITwo:document.getElementById("grIOne").value,
                grPTwo:document.getElementById("grPOne").value,
                grIThree:document.getElementById("grIOne").value,
                grPThree:document.getElementById("grPOne").value,
                grIFour:document.getElementById("grIOne").value,
                grPFour:document.getElementById("grPOne").value
            })
        })
        document.getElementById("saveSix").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                mpIOne:document.getElementById("mpIOne").value,
                mpPOne:document.getElementById("mpPOne").value,
                mpITwo:document.getElementById("mpIOne").value,
                mpPTwo:document.getElementById("mpPOne").value,
                mpIThree:document.getElementById("mpIOne").value,
                mpPThree:document.getElementById("mpPOne").value,
                mpIFour:document.getElementById("mpIOne").value,
                mpPFour:document.getElementById("mpPOne").value
            })
        })
        document.getElementById("saveSeven").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                tpIOne:document.getElementById("tpIOne").value,
                tpPOne:document.getElementById("tpPOne").value,
                tpITwo:document.getElementById("tpIOne").value,
                tpPTwo:document.getElementById("tpPOne").value,
                tpIThree:document.getElementById("tpIOne").value,
                tpPThree:document.getElementById("tpPOne").value,
                tpIFour:document.getElementById("tpIOne").value,
                tpPFour:document.getElementById("tpPOne").value
            })
        })
        document.getElementById("saveEight").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                laIOne:document.getElementById("laIOne").value,
                laPOne:document.getElementById("laPOne").value,
                laITwo:document.getElementById("laIOne").value,
                laPTwo:document.getElementById("laPOne").value,
                laIThree:document.getElementById("laIOne").value,
                laPThree:document.getElementById("laPOne").value,
                laIFour:document.getElementById("laIOne").value,
                laPFour:document.getElementById("laPOne").value
            })
        })
        document.getElementById("saveNine").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                vhIOne:document.getElementById("vhIOne").value,
                vhPOne:document.getElementById("vhPOne").value,
                vhITwo:document.getElementById("vhIOne").value,
                vhPTwo:document.getElementById("vhPOne").value,
                vhIThree:document.getElementById("vhIOne").value,
                vhPThree:document.getElementById("vhPOne").value,
                vhIFour:document.getElementById("vhIOne").value,
                vhPFour:document.getElementById("vhPOne").value
            })
        })
        document.getElementById("saveTen").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                diIOne:document.getElementById("diIOne").value,
                diPOne:document.getElementById("diPOne").value,
                diITwo:document.getElementById("diIOne").value,
                diPTwo:document.getElementById("diPOne").value,
                diIThree:document.getElementById("diIOne").value,
                diPThree:document.getElementById("diPOne").value,
                diIFour:document.getElementById("diIOne").value,
                diPFour:document.getElementById("diPOne").value
            })
        })
        document.getElementById("saveEleven").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                ecIOne:document.getElementById("ecIOne").value,
                ecPOne:document.getElementById("ecPOne").value,
                ecITwo:document.getElementById("ecIOne").value,
                ecPTwo:document.getElementById("ecPOne").value,
                ecIThree:document.getElementById("ecIOne").value,
                ecPThree:document.getElementById("ecPOne").value,
                ecIFour:document.getElementById("ecIOne").value,
                ecPFour:document.getElementById("ecPOne").value
            })
        })
        document.getElementById("saveTwelve").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                enIOne:document.getElementById("enIOne").value,
                enPOne:document.getElementById("enPOne").value,
                enITwo:document.getElementById("enIOne").value,
                enPTwo:document.getElementById("enPOne").value,
                enIThree:document.getElementById("enIOne").value,
                enPThree:document.getElementById("enPOne").value,
                enIFour:document.getElementById("enIOne").value,
                enPFour:document.getElementById("enPOne").value
            })
        })
        document.getElementById("saveThirteen").addEventListener("click",function(){
            firebase.database().ref('Budgets/' + 'OfficialBudget/' + `${user.uid}/`).update({
                otIOne:document.getElementById("otIOne").value,
                otPOne:document.getElementById("otPOne").value,
                otITwo:document.getElementById("otIOne".value),
                otPTwo:document.getElementById("otPOne").value,
                otIThree:document.getElementById("otIOne").value,
                otPThree:document.getElementById("otPOne").value,
                otIFour:document.getElementById("otIOne").value,
                otPFour:document.getElementById("otPOne").value
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