
// javascsipt for eye function

    document.addEventListener('DOMContentLoaded', function() {
        let togglePassword = document.getElementById('togglePassword');
       
        let passwordField = document.getElementById('password');
     

        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);

            // Toggle the eye icon
            this.querySelector('i').classList.toggle('bi-eye');
            this.querySelector('i').classList.toggle('bi-eye-slash');
        });

       
    });



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

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





// login javascript

    document.getElementById('logIn').addEventListener('click', () => {
        
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    let passwordRegex = /^[A-Za-z\d@$!%*?&]{6,}$/
        let warning = document.getElementById('warning');
        let warning2 = document.getElementById('warning2');
        let warning3 = document.getElementById('warning3');

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
    
        let passwordTest = passwordRegex.test(password);
        let emailTest = emailRegex.test(email);
    
        if(email == '' || password == '') {
            // setTimeout
            warning.textContent = `Fill the neccsary information`;
             setTimeout(() => warning.remove(), 3000);
            
    
        }
     else if (!emailTest) {
            document.getElementById("email").style.border = `class="border"`;
            // document.getElementById(email).style.borderColor = " red";
            warning2.textContent =`<p class="text-danger bg-danger p-1">Email must be a valid</p>`
            setTimeout(() => warning2.remove(), 3000);
            
    
    
      } else if (!passwordTest) {
               
            //    document.getElementById("password").style.border = `solid 2px red`;
                // document.getElementById("password").style.borderColor = 'red';
               warning3.textContent = `Input correct password`;
                setTimeout(()  => warning3.remove(), 3000); 
                
    
        }else {

    
    let userObj = {
        email, password
    }
    
    console.log(userObj);
      document.getElementById('anime').style.display = "block";
             
             setTimeout(() => {
                 
                 document.getElementById('anime').style.display = "none";

                }, 2000);

        

    //   document.getElementById('email').value = "";
    //     document.getElementById('password').value ="";
   
        
     

signInWithEmailAndPassword(auth, email, password)
  .then((myUser) => {
    // Signed in 
    console.log(myUser)
    const user = myUser.user;
    console.log(user)
    // alert('login Succesful')
    console.log('you login succesfully')
    location.href = "dashboard.html";
       

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      console.log(errorCode)
    console.log( errorMessage)
    alert("Please input correct details") 
    

  })


    }
   
    });
    


  







 
