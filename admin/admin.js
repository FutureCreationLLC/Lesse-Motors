// Simple demo login (you can replace with Firebase later)
const adminUser = "LesseMotors";
const adminPass = "Ra160824$";

// LOGIN PROCESS
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(e){
        e.preventDefault();

        let u = document.getElementById("username").value;
        let p = document.getElementById("password").value;

        if (u === adminUser && p === adminPass) {
            localStorage.setItem("adminLogged", "yes");
            window.location.href = "dashboard.html";
        } else {
            alert("Incorrect login");
        }
    });
}

// CHECK ACCESS FOR DASHBOARD
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("adminLogged") !== "yes") {
        window.location.href = "login.html";
    }
}

// LOGOUT BUTTON
if (document.getElementById("logoutBtn")) {
    document.getElementById("logoutBtn").onclick = function(){
        localStorage.removeItem("adminLogged");
        window.location.href = "login.html";
    };
}
