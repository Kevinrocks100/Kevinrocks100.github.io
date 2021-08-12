var firebaseConfig = {
    apiKey: "AIzaSyAE9G_OkAFpyEqDRh4L3PpOgg9N1fl_X6g",
    authDomain: "kpcbudgeting.firebaseapp.com",
    databaseURL: "https://kpcbudgeting-default-rtdb.firebaseio.com",
    storageBucket: "kpcbudgeting.appspot.com",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var recommendations = firebase.database().ref("OfficialBudget");
      var submitRecommendation = function () {
      // Get input values from each of the form elements
        var budget = $("#budgetText").val();
        // Push a new recommendation to the database using those values
        recommendations.push({
          "budget": budget
        });
      };
      // When the window is fully loaded, call this function.
      // Note: because we are attaching an event listener to a particular HTML element
      // in this function, we can't do that until the HTML element in question has
      // been loaded. Otherwise, we're attaching our listener to nothing, and no code
      // will run when the submit button is clicked.
      $(window).load(function () {
      // Find the HTML element with the id recommendationForm, and when the submit
      // event is triggered on that element, call submitRecommendation.
      $("#recommendationForm").submit(submitRecommendation);
    } else{
    }
    })
