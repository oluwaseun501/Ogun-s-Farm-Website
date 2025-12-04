

  // for eye icon on my input


      document.addEventListener('DOMContentLoaded', function() {
        let togglePassword = document.getElementById('togglePassword');
        let togglePassword2 = document.getElementById('togglePassword2');
        let passwordField = document.getElementById('password');
        let passwordField2 = document.getElementById('confPassword');

        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);

            // Toggle the eye icon
            this.querySelector('i').classList.toggle('bi-eye');
            this.querySelector('i').classList.toggle('bi-eye-slash');
        });

        togglePassword2.addEventListener('click', function() {
            const type = passwordField2.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField2.setAttribute('type', type);

            // Toggle the eye icon
            this.querySelector('i').classList.toggle('bi-eye');
            this.querySelector('i').classList.toggle('bi-eye-slash');
        });
    });











  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
 import {getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCbbV5EdSa_9aCfrdkhdoSCnkDJLYzN6HA",
    authDomain: "ogun-s-farm.firebaseapp.com",
    projectId: "ogun-s-farm",
    storageBucket: "ogun-s-farm.firebasestorage.app",
    messagingSenderId: "445732408388",
    appId: "1:445732408388:web:adc1d6319bfeb918514011",
    measurementId: "G-MQ3RVDP0C5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
   const provider = new GoogleAuthProvider();
   const db = getDatabase();
  






// sign up javascript

    document.getElementById('signIn').addEventListener('click', () => {
        
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
        let passwordRegex = /^[A-Za-z\d@$!%*?&]{6,}$/
            
        let nameRegex = /^[A-Za-z][A-Za-z\s'-]{2,}$/;
       


        let warning = document.getElementById('warning');
        let warning2 = document.getElementById('warning2');
        let warning3 = document.getElementById('warning3');
        let warning4 = document.getElementById('warning4');
        let warning5 = document.getElementById('warning5');
        
        let name = document.getElementById('name').value;
        let name2 = document.getElementById('name2').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confPassword = document.getElementById('confPassword').value;
 
    
        let passwordTest = passwordRegex.test(password);
        let emailTest = emailRegex.test(email);
        let nameTest = nameRegex.test(name);
    
        if(name == '' || name2 == "" || email == '' || password == '') {
            // setTimeout
            warning.textContent = `Fill the neccessary information`;
             setTimeout(() => warning.remove(), 3000);
            
    
        }else if (!nameTest) {
    
            // document.getElementById("name").style.border = "2px solid red !important"; 
            // document.getElementById("name").style.borderColor = "red";
           
                    warning4.textContent =`Name must be at least 3 char`
            setTimeout(() => warning4.remove(), 3000);
            
    
        }
     else if (!emailTest) {
            // document.getElementById("email").style.border = `class="border"`;
            // document.getElementById(email).style.borderColor = " red";
            warning2.textContent =`Email must be a valid`
            setTimeout(() => warning2.remove(), 3000);
            
    
    
      } else if (!passwordTest) {
               
            //    document.getElementById("password").style.border = `solid 2px red`;
                // document.getElementById("password").style.borderColor = 'red';
               warning3.textContent = `Input correct password`;
                setTimeout(()  => warning3.remove(), 3000); 
                
    
        }else if (confPassword != password) { 
              warning5.textContent = `Password  must be the same`;
                setTimeout(()  => warning5.remove(), 3000); 



        }else {
        // document.getElementById("email").value = `class="is-valid`;
    // document.getElementById("email").style.borderColor =  '';
    
    // document.getElementById("password").style.border = '';
    // document.getElementById("password").style.borderColor =  '';
    
    const userObj = {
        email, password, name , name2, createdAt: new Date().toISOString(),
    }
  
    console.log(userObj);
       document.getElementById('anime').style.display = "block";
             
             setTimeout(() => {
                 
                 document.getElementById('anime').style.display = "none";

                }, 2000);


    createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    // Signed up 
    let uid = user.user.uid;
    console.log(uid)
     let userRef = ref(db, `users/${uid}`);
    

  //  alert('You have sign up successfully');
   
    set(userRef, userObj)
    .then (() => {
        console.log('user info saved now')
         location.href = "/public/login.html";
       

    })


})
  .catch((error) => {
    console.log(error);
         console.log("User Info Saved");
    // ..
  });


    //   document.getElementById('email').value = "";
    //     document.getElementById('password').value ="";
   
            
     
    

    
    
    
        
    }
    // displayDetails()

    
    
    
    });


  

  google.addEventListener( 'click', ()=> {

      signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
      location.href = "/public/login.html";
    //  document.getElementById('anime').style.display = "block"
   

    //         setTimeout(() => anime.remove(), 3000)
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
       
       
            
    





  })




