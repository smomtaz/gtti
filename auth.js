// Authentication Handler
const auth = firebase.auth();
const loginScreen = document.getElementById('loginScreen');
const mainApp = document.getElementById('mainApp');
const loadingSpinner = document.getElementById('loadingSpinner');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const loginError = document.getElementById('loginError');
const userPhoto = document.getElementById('userPhoto');

// Check if email is authorized
function isAuthorizedEmail(email) {
    // Check exact email match
    if (AUTHORIZED_EMAILS.includes(email)) {
        return true;
    }
    
    // Check domain match
    const domain = email.split('@')[1];
    if (AUTHORIZED_DOMAINS.includes(domain)) {
        return true;
    }
    
    return false;
}

// Show error message
function showError(message) {
    loginError.textContent = message;
    loginError.style.display = 'block';
    setTimeout(() => {
        loginError.style.display = 'none';
    }, 5000);
}

// Google Sign In
googleSignInBtn.addEventListener('click', async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    try {
        loadingSpinner.style.display = 'flex';
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        // Check if user is authorized
        if (!isAuthorizedEmail(user.email)) {
            await auth.signOut();
            showError(`Access denied. ${user.email} is not authorized to access this app.`);
            loadingSpinner.style.display = 'none';
            return;
        }
        
        // User is authorized - will be handled by onAuthStateChanged
        
    } catch (error) {
        console.error('Sign in error:', error);
        loadingSpinner.style.display = 'none';
        
        if (error.code === 'auth/popup-closed-by-user') {
            showError('Sign in cancelled.');
        } else if (error.code === 'auth/popup-blocked') {
            showError('Popup blocked. Please allow popups for this site.');
        } else {
            showError('Sign in failed. Please try again.');
        }
    }
});

// Sign Out
signOutBtn.addEventListener('click', async () => {
    try {
        await auth.signOut();
        // Will be handled by onAuthStateChanged
    } catch (error) {
        console.error('Sign out error:', error);
        showError('Sign out failed. Please try again.');
    }
});

// Auth State Observer
auth.onAuthStateChanged(user => {
    loadingSpinner.style.display = 'none';
    
    if (user && isAuthorizedEmail(user.email)) {
        // User is signed in and authorized
        loginScreen.style.display = 'none';
        mainApp.style.display = 'block';
        
        // Update user info
        if (user.photoURL) {
            userPhoto.src = user.photoURL;
            userPhoto.style.display = 'block';
        }
        
        // Initialize the app
        if (typeof initializeFromHash === 'function') {
            initializeFromHash();
        }
        
        // Log analytics (optional)
        console.log(`Authorized user: ${user.email}`);
        
    } else {
        // User is signed out or not authorized
        loginScreen.style.display = 'flex';
        mainApp.style.display = 'none';
        
        if (user && !isAuthorizedEmail(user.email)) {
            // User tried to sign in but is not authorized
            auth.signOut();
            showError(`Access denied. ${user.email} is not authorized.`);
        }
    }
});

// Handle authentication errors globally
window.addEventListener('unhandledrejection', event => {
    if (event.reason && event.reason.code && event.reason.code.startsWith('auth/')) {
        console.error('Authentication error:', event.reason);
        event.preventDefault();
    }
});
