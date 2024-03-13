function submitForm(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form
  
    // Lấy giá trị từ các trường đăng ký
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
    // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau không
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
  
    // Gửi dữ liệu đăng ký đến máy chủ hoặc xử lý theo yêu cầu của bạn
    // ở đây chúng ta chỉ hiển thị thông báo đăng ký thành công
    alert("Đăng ký thành công!");
  }


  // /button/

  const click = document.getElementById("button-2");
  const myButton = document.getElementById("button");

  let check =0;

  click.addEventListener("click", function(e){
    e.preventDefault();
    check++;
    if (check %2 === 1){
      myButton.style.display = "block";
    }else{
      myButton.style.display = "none";
    }
  });
 
let login = document.getElementById("login");
login.addEventListener("click", function(e){
  e.preventDefault();
  window.location.href = "login.html";
});
let sigup = document.getElementById("sigup");
sigup.addEventListener("click", function(e){
  e.preventDefault();
  window.location.href = "sigup.html";
});



//thêm giỏ hàng
 // Lấy tất cả các nút "Thêm vào" trên trang
 var addToCartButtons = document.querySelectorAll('.buy button');

 // Xử lý sự kiện click cho mỗi nút "Thêm vào"
 addToCartButtons.forEach(function(button) {
   button.addEventListener('click', function() {
     // Lấy thông tin sản phẩm từ phần tử cha của nút "Thêm vào"
     var productContainer = button.parentNode.parentNode;
     var productName = productContainer.querySelector('p').innerText;
     var productPrice = productContainer.querySelector('b').innerText;

     // Tạo một đối tượng sản phẩm mới
     var product = {
       name: productName,
       price: productPrice
     };

     // Thêm sản phẩm vào giỏ hàng (ở đây là một hàm xử lý riêng)
     addToCart(product);
   });
 });

 // Hàm xử lý thêm sản phẩm vào giỏ hàng
 function addToCart(product) {
   // Thực hiện logic để thêm sản phẩm vào giỏ hàng
   // ở đây, bạn có thể sử dụng các phương thức và lưu trữ dữ liệu phù hợp
   console.log('Sản phẩm đã được thêm vào giỏ hàng:', product);
 }
  

