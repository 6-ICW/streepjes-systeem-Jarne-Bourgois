function login() {
  const user = document.getElementById("username").value;
 const role = document.getElementById("role").value;

      localStorage.setItem("currentUser", user);
      localStorage.setItem("currentRole", role);

      if (role === "admin") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "user.html";
      }
    }
