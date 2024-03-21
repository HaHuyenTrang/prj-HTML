// //hiển thị user
// document.addEventListener("DOMContentLoaded", function() {
//     const userLogin = JSON.parse(localStorage.getItem("userLogin"));

//     if (userLogin) {
//         const userWelcome = document.getElementById("user-welcome");
//         userWelcome.textContent = "Welcome, " + userLogin.username;
//     }
// });

function login(e) {
    e.preventDefault();
  let userName = document.getElementById("username");
  let passWord = document.getElementById("password");
  const userlocal = JSON.parse(localStorage.getItem("user")) || [];
  const findUser = userlocal.find(
    (user) =>
      user.username === userName.value && user.password === passWord.value
  );
  if (!findUser) {
    alert("Tên tài khoản hoặc mật khẩu không đúng");
  } else {
    // khi đang nhập dung
    // lưu id của user tren local 
    window.location.href = "home.html";
  }
  localStorage.setItem("userLogin", JSON.stringify(findUser));
}
