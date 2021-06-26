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
            document.location.href = "/user-index.html";
        })
    })
    .catch(function(err){
        if(err.response.status==400){
            swal("Unsuccessfull !", "Account Invalid !", "error");
        }
    })
}