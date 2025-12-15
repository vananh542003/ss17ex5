let loginBtn = document.querySelector(".submit-btn");

loginBtn.onclick = function () {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

 
  if (username === "nguyenvananh542003@gmail.com" && password === "123456") {
    alert("Đăng nhập thành công ✅");
  } else {
    alert("Đăng nhập thất bại ❌");
  }
};
