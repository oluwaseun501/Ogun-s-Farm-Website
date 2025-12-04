// PROFILE PAGE SCRIPT

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getDatabase, ref, get, update } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbbV5EdSa_9aCfrdkhdoSCnkDJLYzN6HA",
  authDomain: "ogun-s-farm.firebaseapp.com",
  projectId: "ogun-s-farm",
  storageBucket: "ogun-s-farm.firebasestorage.app",
  messagingSenderId: "445732408388",
  appId: "1:445732408388:web:adc1d6319bfeb918514011",
  measurementId: "G-MQ3RVDP0C5",
  databaseURL: "https://ogun-s-farm-default-rtdb.firebaseio.com" // ADD THIS
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

// LOAD USER DATA INTO INPUT FIELDS
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userRef = ref(db, "users/" + user.uid);

    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        document.getElementById("editName").value = data.name || "";
        document.getElementById("editName2").value = data.name2 || "";
        document.getElementById("editEmail").value = data.email || "";
        document.getElementById("createdAt").textContent = data.createdAt;

      }
    });

  } else {
    location.href = "/public/login.html"; 
  }
});


// SAVE UPDATED PROFILE
document.getElementById("saveProfile").addEventListener("click", async () => {
  const user = auth.currentUser;

  if (!user) return alert("You are not logged in.");

  const userRef = ref(db, "users/" + user.uid);

  const newData = {
    name: document.getElementById("editName").value.trim(),
    name2: document.getElementById("editName2").value.trim(),
    email: document.getElementById("editEmail").value.trim()
  };

  await update(userRef, newData);

  alert("Profile updated successfully!");
});
