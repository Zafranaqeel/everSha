// Daftar pengguna (gunakan localStorage untuk persistensi)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Referensi elemen
const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');
const loginErrorMessage = document.getElementById('loginErrorMessage');
const signUpMessage = document.getElementById('signUpMessage');
const showLoginButton = document.getElementById('showLogin');
const showSignUpButton = document.getElementById('showSignUp');

// Tampilkan Form Login atau Sign Up
showLoginButton.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
});
showSignUpButton.addEventListener('click', () => {
    signUpMessage.style.display = 'none';
    signUpForm.style.display = 'block';
    loginForm.style.display = 'none';
});

// Proses Login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", username);
        window.location.href = "../../Index.html";
    } else {
        loginErrorMessage.style.display = 'block';
    }
});

// Proses Registrasi
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;

    // Cek apakah username sudah digunakan
    if (users.some(u => u.username === username)) {
        signupErrorMessage.style.display = 'block';
    } else {
        // Tambahkan pengguna baru
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        signUpMessage.style.display = 'block';
    }
});
