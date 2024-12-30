const users = [
    {username: "admin", password: "root"},
    {username: "zafran", password: "trisha"},
    {username: "user", password: "jkt48"}
];
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
window.onload = function(){
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn){
        window.location.href = "../../Index.html";
    };
}
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", username);
        window.location.href = "../../Index.html";
    } else {
        errorMessage.style.display = 'block';
    }
});
