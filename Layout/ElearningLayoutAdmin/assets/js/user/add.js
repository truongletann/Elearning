// LẤY TOKEN TỪ LOCALSTORAGE
let token = localStorage.getItem('USER_TOKEN');

function loadRole() {
    axios({
        url: 'http://localhost:8080/api/admin/role',
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(function (resp) {
            //  Lấy ra mảng role
            let arrRole = resp.data;
            // Tạo danh sách thẻ option
            let strOption = "";
            for (let role of arrRole) {
                strOption += `<option value="${role.id}">${role.name}</option>`;
            }
            // Truy cập tới thẻ select có id là 'roleId'
            let roleIdTag = document.getElementById('roleId');
            // Thay thế các thẻ option cũ bằng danh sách thẻ option mới
            roleIdTag.innerHTML = strOption;
        })
        .catch(function (err) {
            console.log(err.response);
        })
}
loadRole();

function addRole() {

    

    // let fullname = document.getElementById('fullname').value;
    // if (fullname.length == 0) {
    //     flag = false;
    //     document.getElementById('fullnameErr').innerHTML = 'Vui lòng nhập họ tên!';
    // }
    // else {
    //     document.getElementById('fullnameErr').innerHTML = '';
    // }

    // let email = document.getElementById('email').value;
    // if (email.length == 0) {
    //     flag = false;
    //     document.getElementById('emailErr').innerHTML = 'Vui lòng nhập email!';
    // }
    // else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false) {
    //     flag = false;
    //     document.getElementById('emailErr').innerHTML = 'Email không đúng định dạng!';
    // }
    // else {
    //     document.getElementById('emailErr').innerHTML = '';
    // }

    // let password = document.getElementById('password').value;
    // if (password.length == 0) {
    //     flag = false;
    //     document.getElementById('passwordErr').innerHTML = 'Vui lòng nhập mật khẩu!';
    // }
    // else if (password.length < 6) {
    //     flag = false;
    //     document.getElementById('passwordErr').innerHTML = 'Mật khẩu ít nhất 6 ký tự!';
    // }
    // else {
    //     document.getElementById('passwordErr').innerHTML = '';
    // }

    // let confirm = document.getElementById('confirm').value;
    // if (confirm.length == 0) {
    //     flag = false;
    //     document.getElementById('confirmErr').innerHTML = 'Vui lòng nhập lại mật khẩu!';
    // }
    // else if (confirm !== password) {
    //     flag = false;
    //     document.getElementById('confirmErr').innerHTML = 'Nhập lại mật khẩu không khớp!';
    // }
    // else {
    //     document.getElementById('confirmErr').innerHTML = '';
    // }
    let flag = true;
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let roleId = document.getElementById('roleId').value;
    let avatar = document.getElementById('imgUrl').value;

    if (flag === true) {
        // TẠO ĐỐI TƯỢNG USER
        let user = {
            "avatar": avatar,
            "email": email,
            "fullname": fullname,
            "id": 0,
            "password": password,
            "roleDesc": "",
            "roleId": roleId
        }

        // GỌI API THÊM MỚI
        axios({
            url: 'http://localhost:8080/api/admin/user',
            method: 'POST',
            data: user,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(function (resp) {
                swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                    window.location.href = '/user-index.html';
                })
                
            })
            .catch(function (err) {
                console.log(err.response);
                swal("Unsuccessfull !", "You clicked the button!", "error");
            })
    }
}

function uploadAvatar() {
    let avatarInput = document.getElementById("avatar");
    // ADD FILE VÀO ĐỐI TƯỢNG FORMDATA
    let formData = new FormData();
    formData.append('file', avatarInput.files[0]);

    axios({
        url: 'http://localhost:8080/api/file/upload',
        method: 'POST',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp){
        let imageUrl = resp.data;
        document.getElementById('imgUrl').value = imageUrl;
    })
    .catch(function(err){
        console.log(err)
    })
}