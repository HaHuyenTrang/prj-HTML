   // Lấy thông tin người dùng từ local storage
   const userlocal = JSON.parse(localStorage.getItem("user")) || [];

   // Tạo danh sách người dùng trong bảng HTML
   const userTableBody = document.getElementById("userTableBody");
   userlocal.forEach((user, index) => {
     const row = document.createElement("tr");
     const sttCell = document.createElement("td");
     const idCell = document.createElement("td");
     const nameCell = document.createElement("td");
     const actionCell = document.createElement("td");
     const lockButton = document.createElement("button");
     const unlockButton = document.createElement("button");

     sttCell.textContent = index + 1;
     idCell.textContent = user.userId;
     nameCell.textContent = user.username;
     lockButton.textContent = "Khóa";
     unlockButton.textContent = "Mở khóa";

     actionCell.appendChild(lockButton);
     actionCell.appendChild(unlockButton);

     row.appendChild(sttCell);
     row.appendChild(idCell);
     row.appendChild(nameCell);
     row.appendChild(actionCell);

     userTableBody.appendChild(row);
   });