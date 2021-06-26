let token = localStorage.getItem("USER_TOKEN");

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

function getInfo(){
    let fullName = document.getElementById('fullname');
    let email = document.getElementById('email');
    let roleId = document.getElementById('roleId');
    let password = document.getElementById('password');
    let imgUrl = document.getElementById('imgUrl');
    let confirm = document.getElementById('confirm');

    let url_str = window.location.href;
    let url = new URL(url_str);
    let id = url.searchParams.get('id');

    axios({
        url:`http://localhost:8080/api/admin/user/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp){
        let user = resp.data;
        fullName.value = user.fullname;
        email.value = user.email;
        roleId.value = user.roleId;
        password.value = user.password;
        imgUrl.value = user.avatar;
        confirm.value = user.password;

    })
    .catch(function(err){
        console.log(err)
    })
}

getInfo();

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

function editRole(){
    let fullName = document.getElementById('fullname');
    let email = document.getElementById('email');
    let roleId = document.getElementById('roleId');
    let password = document.getElementById('password');
    let imgUrl = document.getElementById('imgUrl');

    let url_str = window.location.href;
    let url = new URL(url_str);
    let id = url.searchParams.get('id');

    let user = {
        "avatar": imgUrl.value,
        "email": email.value,
        "fullname": fullName.value,
        "id": id,
        "password": password.value,
        "roleDesc": "",
        "roleId": roleId.value
    }

    console.log(user)

    axios({
        url:'http://localhost:8080/api/admin/user',
        method:'put',
        data:user,
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp){
        swal("Successfull !", "You clicked the button!", "success").then(function(resp){
            window.location.href = '/user-index.html';
        })
    })
    .catch(function(err){
        console.log(err);
        swal("Unsuccessfull !", "You clicked the button!", "error");
    })
}