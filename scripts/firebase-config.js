/**
 * Configuration Firebase
 * Utilise les librairies "compat" pour fonctionner avec le code existant sans modules
 */

const firebaseConfig = {
    apiKey: "AIzaSyA60T6P2CPXvREwy2gZOIFvidTfLESoub8",
    authDomain: "elevage-app-281d9.firebaseapp.com",
    databaseURL: "https://elevage-app-281d9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "elevage-app-281d9",
    storageBucket: "elevage-app-281d9.firebasestorage.app",
    messagingSenderId: "350076499621",
    appId: "1:350076499621:web:3df7591add68fa83567f4c"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);

// Export des services en global pour les autres scripts
const auth = firebase.auth();
const db = firebase.database();

console.log("Firebase initialisé avec succès");
