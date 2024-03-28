function render() {
  // Lấy dữ liệu từ local storage
  var productsData = localStorage.getItem("products");

  // Chuyển đổi dữ liệu thành mảng các đối tượng sản phẩm
  var products = JSON.parse(productsData);

  // Lấy thẻ <table> trong HTML
  // var table = document.querySelector("table");
  var table = document.getElementById("tbody");

  table.innerHTML = "";

  // Duyệt qua mảng sản phẩm và tạo các hàng trong bảng
  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    // Tạo một hàng mới trong bảng
    var row = document.createElement("tr");

    // Tạo các ô trong hàng để hiển thị thông tin sản phẩm
    var indexCell = document.createElement("td");
    indexCell.textContent = i + 1; // Số thứ tự

    // var iDCell = document.createElement("td");
    // iDCell.textContent = product.id; // id

    var nameCell = document.createElement("td");
    nameCell.textContent = product.name; // Tên sản phẩm

    var imageCell = document.createElement("td");
    var image = document.createElement("img");
    image.src = product.image; // URL hình ảnh sản phẩm
    imageCell.appendChild(image);

    var priceCell = document.createElement("td");
    priceCell.textContent = product.giá; // Giá sản phẩm

    var quantityCell = document.createElement("td");
    quantityCell.textContent = product.stock; // Số lượng sản phẩm (ở đây mặc định là 1)

    var deleteCell = document.createElement("td");
    var buttonDelete = document.createElement("button");
    buttonDelete.id = `product-${product.id}`;
    buttonDelete.textContent = `Xoa`;
    buttonDelete.addEventListener("click", function (e) {
      const id = this.id.split("-")[1];
      deleteProduct(+id);
    });
    deleteCell.appendChild(buttonDelete);

    // Thêm các ô vào hàng
    row.appendChild(indexCell);
    // row.appendChild(iDCell);
    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(deleteCell);

    // Thêm hàng vào bảng
    table.appendChild(row);
  }
}
render();

// Thêm sản phẩm mới
function addProduct() {
  // Prompt the user to enter the product details
  var name = prompt("Tên sản phẩm:");
  var image = prompt("Ảnh sản phẩm:");
  var price = prompt("Giá sản phẩm:");

  // Create a new product object
  var newProduct = {
    name: name,
    image: image,
    giá: price,
    id: products.length + 1,
    stock: 20,
  };

  // Add the new product to the products array
  products.push(newProduct);

  // Save the updated products array to local storage
  localStorage.setItem("products", JSON.stringify(products));

  // Refresh the page to display the updated product list
  location.reload();
}

// Lấy dữ liệu từ local storage
var productsData = localStorage.getItem("products");
var products = JSON.parse(productsData) || [];

// Rest of the code to display the products in the table

//xóa sản phẩm trong prd
function deleteProduct(id) {
  // Tìm vị trí của sản phẩm trong mảng products
  var index = products.findIndex(function (product) {
    return product.id == id;
  });

  // Nếu sản phẩm được tìm thấy
  if (index !== -1) {
    // Xóa sản phẩm khỏi mảng
    products.splice(index, 1);

    // Lưu lại mảng sản phẩm đã cập nhật vào local storage
    localStorage.setItem("products", JSON.stringify(products));

    render();
  }
}

// cập nhật
// ...
// products.push(newProduct);
localStorage.setItem("products", JSON.stringify(products));
// ...
