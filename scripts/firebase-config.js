/**
 * Configuration Firebase
 * Utilise les librairies "compat" pour fonctionner avec le code existant sans modules
 */

const firebaseConfig = {
    apiKey: "AIzaSyBmx3bUN0V4neqRA8LIAaZJMyAPuIZW67o",
    authDomain: "elevage-pro-3028b.firebaseapp.com",
    projectId: "elevage-pro-3028b",
    storageBucket: "elevage-pro-3028b.firebasestorage.app",
    messagingSenderId: "562943937201",
    appId: "1:562943937201:web:52afd7b63b76582c743090"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);

// Export des services en global pour les autres scripts
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase initialisé avec succès");
