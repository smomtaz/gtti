// Firebase Configuration
// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCncTkQO68omyioTboIhkdnZhu4erpQKPw",
  authDomain: "gt-tect-int-prep.firebaseapp.com",
  projectId: "gt-tect-int-prep",
  storageBucket: "gt-tect-int-prep.firebasestorage.app",
  messagingSenderId: "766751117302",
  appId: "1:766751117302:web:6a925704a8b40af78301d7",
  measurementId: "G-1DZHNVNR9P"
};

// Authorized email addresses (add your Gmail and any others you want to allow)
const AUTHORIZED_EMAILS = [
    "your.email@gmail.com",
    // "another.email@gmail.com", // Add more as needed
];

// Or use domain-based authorization (anyone with @yourdomain.com can access)
const AUTHORIZED_DOMAINS = [
    // "yourdomain.com", // Uncomment and add domains if needed
];

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export for use in other files
window.firebaseConfig = firebaseConfig;
window.AUTHORIZED_EMAILS = AUTHORIZED_EMAILS;
window.AUTHORIZED_DOMAINS = AUTHORIZED_DOMAINS;
