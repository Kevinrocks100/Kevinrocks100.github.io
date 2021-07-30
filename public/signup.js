var firebaseConfig = {
    apiKey: "AIzaSyAE9G_OkAFpyEqDRh4L3PpOgg9N1fl_X6g",
    authDomain: "kpcbudgeting.firebaseapp.com",
    projectId: "kpcbudgeting",
    storageBucket: "kpcbudgeting.appspot.com",
    messagingSenderId: "97358543124",
    appId: "1:97358543124:web:95cb0bd86c1459ce632a01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const submit = document.querySelector(".submit");
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;

nextBtnFirst.addEventListener("click", function () {
slidePage.style.marginLeft = "-25%";
bullet[current - 1].classList.add("active");
current += 1;
});
prevBtnSec.addEventListener("click", function () {
slidePage.style.marginLeft = "0%";
bullet[current - 2].classList.remove("active");
current -= 1;
});


var email = document.getElementById('email');
const pword = document.getElementById('pword');
//const fileUploader = document.getElementById('fileUploader');
var docRef = firebase.firestore();
var auth = firebase.auth();
// let file = {};
// var imgUrl;

document.getElementById('contactForm');

submit.addEventListener('click', e => {
  var termsBox = document.getElementById("terms");
  if (termsBox.checked == true){
  var email1 = document.getElementById('email');
  email1 = getInputVal('email');
console.log(email1);
function getInputVal(id) {
  return document.getElementById(id).value;
}
  //if(email1.indexOf('@csedge.org') >= 0 || email1.indexOf('@google.com') >= 0 || email1.indexOf('@gmail.com') >= 0){
  firebase.auth().createUserWithEmailAndPassword(email.value, pword.value).then(auth => {

          e.preventDefault();
          var email = getInputVal('email');
          var fln = getInputVal('fln');
          var budget = getInputVal('budget');
          //var role = getInputVal('role');
          //console.log(role);
          var username = getInputVal('username');
          // var role = document.getElementById("role");
          // role.onchange = function
          
          // role.onchange = function(){
          //   this.options[this.selectedIndex].text
          // }

          function getInputVal(id) {
            return document.getElementById(id).value;
          }

		          var emailBox = document.getElementById("emailing");
         
          if (emailBox.checked == true){
            docRef.collection("emailList").doc(auth.user.uid).set({
              email: email,
              fln: fln,
            }).then(function () {
              console.log('saved2');
            })
        console.log("ifRan")
          } 

    // if (document.getElementById("fileUploader").value == "") {
      docRef.collection("userInfo").doc(auth.user.uid).set({
        email: email,
        fln: fln,
        budget: budget,
        // role: role,
        // interestOne: "",
        // interestTwo: "",
        // skillOne: "",
        // skillTwo: "",
        // hobbies: "",
        // bio: "",
        // projOne: "",
        // projTwo: "",
        username: username,
        //downloadURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HLOr38Y1RZQoGz-y98QmEQHaHa%26pid%3DApi&f=1",
        userId:auth.user.uid
      }).then(function () {
        console.log('saved');
        auth.user.sendEmailVerification().then(function(){
          alert("Your account has been created and a verification email has been sent, please check your email");
          window.location = "index.html";
        });
      }).catch(function (error) {
        alert(error);
      })
    //   firebase.database().ref('users/' + auth.user.uid).set({
    //     name: fln,
    //     email:email,
    //     photoURL:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HLOr38Y1RZQoGz-y98QmEQHaHa%26pid%3DApi&f=1",
    //     userId:auth.user.uid,
    //     username:username
    //   }).then(function () {
    //     alert('Signed up, welcome to Programeet');
    //     firebase.auth().signOut().then(function() {
    //       console.log('Logged Out');
    //     }).catch(function(error) {
    //       alert(error);
    //     });
    //     window.location = "verify.html";
    //   })
    

  })

//} 
// else{
//   slidePage.style.marginLeft = "0%";
//   bullet[current - 2].classList.remove("active");
//   //progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 3;
// }
  }
})
