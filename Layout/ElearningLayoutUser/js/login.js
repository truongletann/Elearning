function signUp() {
    // B1. LẤY THÔNG TIN FORM ĐĂNG NHẬP
    let name = document.getElementById("rgName").value;
    let email = document.getElementById("rgEmail").value;
    let pass = document.getElementById("rgPassword").value;

    let userLogin = {
        "avatar": "images.png",
        "email": email,
        "fullname": name,
        "id": 0,
        "password": pass,
        "roleDesc": "",
        "roleId": 3
    };

    axios({
        url: 'http://localhost:8080/api/user/profile',
        method: 'POST',
        data: userLogin
    })
    .then(function(response){
        swal("Good job!", "You clicked the button!", "success").then(function(resp){
            // XÓA THÔNG TIN NGƯỜI DÙNG ĐÃ NHẬP TRÊN FORM
            document.getElementById("rgName").value = "";
            document.getElementById("rgEmail").value = "";
            document.getElementById("rgPassword").value = "";

            document.location.href = "/index.html";
        })
    })
    .catch(function(err){
        if(err.response.status==400){
            swal("Unsuccessfull !", "Account Invalid !", "error");
        }
    })
}

function login() {
    // B1. LẤY THÔNG TIN FORM ĐĂNG NHẬP
    let email = document.getElementById("lgEmail").value;
    let pass = document.getElementById("lgPassword").value;

    // B2. GỌI API ĐĂNG NHẬP
    let userLogin = {
        "email": email,
        "password": pass
    };

    axios({
        url: 'http://localhost:8080/api/admin/auth/login',
        method: 'POST',
        data: userLogin
    })
    .then(function(response){
        swal("Good job!", "You clicked the button!", "success").then(function(resp){
            // XÓA THÔNG TIN NGƯỜI DÙNG ĐÃ NHẬP TRÊN FORM
            document.getElementById("lgEmail").value = "";
            document.getElementById("lgPassword").value = "";

            // B3. LƯU TOKEN VÀO MÁY NGƯỜI DÙNG
            localStorage.setItem('USER_TOKEN', response.data);

            // CHUYỂN HƯỚNG VỀ TRANG DANH SÁCH ROLE
            
            document.location.href = "/index.html";
        })
    })
    .catch(function(err){
        if(err.response.status==400){
            swal("Unsuccessfull !", "Account Invalid !", "error");
        }
    })
}

function getInfo(){
    let token = localStorage.getItem('USER_TOKEN');
    axios({
        url:`http://localhost:8080/api/account`,
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp){
        document.getElementById('divSign').innerHTML = 
        `
        <div class="dropdown" style="float: right;
        margin-right: 30px;">
        <button class="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${resp.data.fullname}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button"><a style="text-decoration: none; color:black;" href="/profile.html?id=${resp.data.id}">Account</a></button>
          <button class="dropdown-item" type="button" onclick="logout()">Logout</button>
          <button class="dropdown-item" type="button"><a style="text-decoration: none; color:black;" href="/course.html?id=${resp.data.id}">My Course</a></button>
        </div>
      </div>
        `
    })
    .catch(function(err){
        console.log(err)
    })
}

getInfo();

function logout() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    let token = localStorage.getItem('USER_TOKEN');
    if(token != null){
        // XÓA TOKEN KHỎI LOCALSTORAGE
        localStorage.removeItem('USER_TOKEN');
        document.location.href = "/index.html";
    }
}