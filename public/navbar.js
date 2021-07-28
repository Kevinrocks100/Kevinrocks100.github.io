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
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        
        document.getElementByld("HOME").innerHTML=``<div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white">
                <div class="container-fluid"><a class="navbar-brand" href="#">KCP Budgeting</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
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
            </nav>
            <div class="modal fade" role="dialog" tabindex="-1" id="signup">
                <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>Sign In</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group mb-3">
                                    <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span><input class="form-control" type="email" required="" placeholder="Email"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span><input class="form-control" type="password" required="" placeholder="Password"></div>
                                </div>
                                <div class="form-group mb-3"><button class="btn btn-primary btn-lg" style="width: 100%;" type="button">Log in</button></div>
                            </form>
                            <hr style="background-color: #BABABA;">
                            <p class="text-center">Or&nbsp;<a class="text-decoration-none" href="#">Forget password</a></p>
                            <p class="text-center">Don't have an account? &nbsp;<a class="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" role="dialog" tabindex="-1" id="signin">
                <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>Sign Up Now</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="text-center"><button class="btn btn-primary text-start" style="width: 100%;" type="button"><i class="fa fa-facebook"></i>&nbsp; Continue with Facebook</button></div>
                            <div class="text-center mt-2"><button class="btn btn-light text-start border-dark" style="width: 100%;" type="button"><i class="fa fa-google"></i>&nbsp; Continue with Google</button></div>
                            <form class="mt-4">
                                <div class="form-group mb-3">
                                    <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-user-o"></i></span><input class="form-control" type="text" required="" placeholder="Full Name"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span><input class="form-control" type="email" required="" placeholder="Email"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span><input class="form-control" type="password" required="" placeholder="Password"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" required="" checked=""><label class="form-check-label" for="formCheck-1">I agree all the terms and conditions.</label></div>
                                </div>
                                <div class="form-group mb-3"><button class="btn btn-primary btn-lg" style="width: 100%;" type="button">Sign Up</button></div>
                            </form>
                            <hr style="background-color: #BABABA;">
                            <p class="text-center">Already have an Account?&nbsp;<a class="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup">Log In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    }
    else{
    <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white">
            <div class="container-fluid"><a class="navbar-brand" href="#">KCP Budgeting</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
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
        </nav>
        <div class="modal fade" role="dialog" tabindex="-1" id="signup">
            <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Sign In</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span><input class="form-control" type="email" required="" placeholder="Email"></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span><input class="form-control" type="password" required="" placeholder="Password"></div>
                            </div>
                            <div class="form-group mb-3"><button class="btn btn-primary btn-lg" style="width: 100%;" type="button">Log in</button></div>
                        </form>
                        <hr style="background-color: #BABABA;">
                        <p class="text-center">Or&nbsp;<a class="text-decoration-none" href="#">Forget password</a></p>
                        <p class="text-center">Don't have an account? &nbsp;<a class="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signin">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" role="dialog" tabindex="-1" id="signin">
            <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Sign Up Now</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center"><button class="btn btn-primary text-start" style="width: 100%;" type="button"><i class="fa fa-facebook"></i>&nbsp; Continue with Facebook</button></div>
                        <div class="text-center mt-2"><button class="btn btn-light text-start border-dark" style="width: 100%;" type="button"><i class="fa fa-google"></i>&nbsp; Continue with Google</button></div>
                        <form class="mt-4">
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-user-o"></i></span><input class="form-control" type="text" required="" placeholder="Full Name"></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-envelope-o"></i></span><input class="form-control" type="email" required="" placeholder="Email"></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group"><span class="text-primary input-group-text"><i class="fa fa-lock"></i></span><input class="form-control" type="password" required="" placeholder="Password"></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" required="" checked=""><label class="form-check-label" for="formCheck-1">I agree all the terms and conditions.</label></div>
                            </div>
                            <div class="form-group mb-3"><button class="btn btn-primary btn-lg" style="width: 100%;" type="button">Sign Up</button></div>
                        </form>
                        <hr style="background-color: #BABABA;">
                        <p class="text-center">Already have an Account?&nbsp;<a class="text-decoration-none" href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup">Log In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
})
