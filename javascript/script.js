function submitForm(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form

  // Lấy giá trị từ các trường đăng ký
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

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

let check = 0;

click.addEventListener("click", function (e) {
  e.preventDefault();
  check++;
  if (check % 2 === 1) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
});

let login = document.getElementById("login");
login.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "login.html";
});
let sigup = document.getElementById("sigup");
sigup.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "sigup.html";
});

//thêm giỏ hàng
// Lấy tất cả các nút "Thêm vào" trên trang
var addToCartButtons = document.querySelectorAll(".buy button");

// Xử lý sự kiện click cho mỗi nút "Thêm vào"
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Lấy thông tin sản phẩm từ phần tử cha của nút "Thêm vào"
    var productContainer = button.parentNode.parentNode;
    var productName = productContainer.querySelector("p").innerText;
    var productPrice = productContainer.querySelector("b").innerText;

    // Tạo một đối tượng sản phẩm mới
    var product = {
      name: productName,
      price: productPrice,
    };

    // Thêm sản phẩm vào giỏ hàng (ở đây là một hàm xử lý riêng)
    addToCart(product);
  });
});

// Hàm xử lý thêm sản phẩm vào giỏ hàng
function addToCart(product) {
  // Thực hiện logic để thêm sản phẩm vào giỏ hàng
  // ở đây, bạn có thể sử dụng các phương thức và lưu trữ dữ liệu phù hợp
  console.log("Sản phẩm đã được thêm vào giỏ hàng:", product);
}
//product
let products2 = [
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/13-0b69bdec-f167-4a7b-a54d-392b42ea1d21.jpg?v=1586771698080",
    name: "Rau muống",
    giá: "30000",
    id: 1,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/22-0ebe1919-23f8-423c-82dc-05bceb49649d.jpg?v=1586771656913",
    name: "Nấm kim châm",
    giá: "15000",
    id: 2,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/16-dbe6f83d-77ce-49d7-860d-617f7bfcc5e3.jpg?v=1586771621947",
    name: "Thịt lợn",
    giá: "300000",
    id: 3,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/6-57ff4cf1-efa5-4479-af31-e87169caeb47.jpg?v=1586771726600",
    name: "Kẹo xylitol",
    giá: "40000",
    id: 4,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/1.jpg?v=1586546649760",
    name: "Bia lon",
    giá: "320000",
    id: 5,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/3-00ccab9b-c9cb-4785-9eee-0eb88dd23e0a.jpg?v=1586546741313",
    name: "Bánh mì",
    giá: "15000",
    id: 6,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/4-633225d0-dedd-464c-994e-a9788f154949.jpg?v=1586546779223",
    name: "Muối sạch",
    giá: "8000",
    id: 7,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/8-cffbe610-14c8-4679-bd2e-de784a3597ac.jpg?v=1586546813233",
    name: "Mì cung đình",
    giá: "150000",
    id: 8,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/12-548a836b-476f-46bf-9ceb-bc327aa34928.jpg?v=1586546883750",
    name: "Cải ngọt",
    giá: "30000",
    id: 9,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/14-cd11ecfa-7de5-42a7-a067-2aadf5ddb816.jpg?v=1586546904400",
    name: "Nấm to",
    giá: "105000",
    id: 10,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/15-c4ca2856-53ff-45f5-ae3d-1a1db87f9f1b.jpg?v=1586546926977",
    name: "Thịt heo",
    giá: "300000",
    id: 11,
    stock: 20,
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/383/804/products/11-a3cdebab-bdae-4eb8-a193-a05fc55822a5.jpg?v=1586546961453",
    name: "Bắp cải",
    giá: "10000",
    id: 12,
    stock: 20,
  },
];

// //lưu data lên local
localStorage.setItem("products", JSON.stringify(products2));

//lấy  dữ liệu về
let products = JSON.parse(localStorage.getItem("products")) || [];
console.log(products);

function renderProduct() {
  let element = "";
  for (let i = 0; i < products.length; i++) {
    element += `
          <div>
                <img
                  src="${products[i].image}"
                  alt=""
                />
                <p>${products[i].name}</p>
                <b>${products[i].giá}</b>
                <div class="buy">
                  <br>
                  <button onclick="addToCart()">Thêm vào <span class="material-symbols-outlined"> shopping_bag </span> </button> <button>mua ngay</button>
                </div> 
                <br>
          </div>

    `;
  }
  // console.log(element);
  document.getElementById("product1").innerHTML = element;
}
renderProduct();

// Hàm đi mua hàng
function addToCart() {
  console.log(111111);
  // Kiểm tra xem người dùng đã đăng nhập chưa
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));

  if (checkLogin !== null && users !== null) {
    let currentUser = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === checkLogin) {
        currentUser = users[i];
        break;
      } else {
        alert("vui lòng đăng nhập để mua hàng");
      }
    }

    if (currentUser) {
      let element = "";
      for (let j = 0; j < currentUser.cart.length; j++) {
        element += `
          <tr>
            <td>${currentUser.cart[j].id}</td>
            <td><img src=".${currentUser.cart[j].image}"/></td>
            <td>${currentUser.cart[j].name}</td>
            <td>${currentUser.cart[j].price}</td>
            <td> <input type="number" value="${currentUser.cart[j].quantity}"> </td>
          </tr>
        `;
      }

      document.getElementById("renderProduct").innerHTML = element;
    } else {
      window.location.href = "login.html";
    }
  }
}

addToCart();

function showQuantityCart() {
  // Lấy giỏ hàng ra, độ dài là số lượng sản phẩm trong giỏ hàng
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));

  if (checkLogin !== null && users !== null) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === checkLogin) {
        document.getElementsByClassName("itemInCart")[0].innerHTML =
          users[i].cart.length;
        break;
      }
    }
  }
}

showQuantityCart();
