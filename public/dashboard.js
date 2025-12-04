

// to save user details

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbbV5EdSa_9aCfrdkhdoSCnkDJLYzN6HA",
  authDomain: "ogun-s-farm.firebaseapp.com",
  projectId: "ogun-s-farm",
  storageBucket: "ogun-s-farm.firebasestorage.app",
  messagingSenderId: "445732408388",
  appId: "1:445732408388:web:adc1d6319bfeb918514011",
  measurementId: "G-MQ3RVDP0C5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const userRef = ref(db, "users/" + uid);

    onValue(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        document.getElementById("myName").textContent = data.name + " " + data.name2;
        document.getElementById("myEmail").textContent = data.email;
        document.getElementById("myDate").textContent = data.createdAt;
      }
    });

  } else {
    // user is not logged in → redirect to login page
    location.href = "/public/login.html";
  }
});



// to logout

import { signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// LOGOUT FUNCTION
document.getElementById("logOut").addEventListener("click", () => {


  signOut(auth)
    .then(() => {
      // Redirect to login page
      document.getElementById('anime').style.display = "block";
             
             setTimeout(() => {
                 
                 document.getElementById('anime').style.display = "none";

                }, 2000);
         
      location.href = "/public/login.html";
    })
    .catch((error) => {
      console.log("Logout error:", error);
    });
});


