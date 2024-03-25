   // Lấy dữ liệu từ local storage
   var productsData = localStorage.getItem("products");

   // Chuyển đổi dữ liệu thành mảng các đối tượng sản phẩm
   var products = JSON.parse(productsData);
   
   // Lấy thẻ <table> trong HTML
       var table = document.querySelector("table");
   
   // Duyệt qua mảng sản phẩm và tạo các hàng trong bảng
   for (var i = 0; i < products.length; i++) {
     var product = products[i];
     
     // Tạo một hàng mới trong bảng
     var row = document.createElement("tr");
     
     // Tạo các ô trong hàng để hiển thị thông tin sản phẩm
     var indexCell = document.createElement("td");
     indexCell.textContent = i + 1; // Số thứ tự
     
     var nameCell = document.createElement("td");
     nameCell.textContent = product.name; // Tên sản phẩm
     
     var imageCell = document.createElement("td");
     var image = document.createElement("img");
     image.src = product.image; // URL hình ảnh sản phẩm
     imageCell.appendChild(image);
     
     var priceCell = document.createElement("td");
     priceCell.textContent = product.giá; // Giá sản phẩm
     
     var quantityCell = document.createElement("td");
     quantityCell.textContent = "1"; // Số lượng sản phẩm (ở đây mặc định là 1)
     
     // Thêm các ô vào hàng
     row.appendChild(indexCell);
     row.appendChild(nameCell);
     row.appendChild(imageCell);
     row.appendChild(priceCell);
     row.appendChild(quantityCell);
     
     // Thêm hàng vào bảng
     table.appendChild(row);
   }