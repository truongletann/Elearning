
function getInfo(){
    let token = localStorage.getItem('USER_TOKEN');
    let fullName = document.getElementById('fullname');
    let email = document.getElementById('email');
    let email2 = document.getElementById('email2');
    let password = document.getElementById('password');
    let imgUrl = document.getElementById('imgAvatar');
    let confirm = document.getElementById('confirm');

    let url_str = window.location.href;
    let url = new URL(url_str);
    let id = url.searchParams.get('id');

    axios({
        url:`http://localhost:8080/api/user/profile/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp){
        let user = resp.data;

        fullName.value = user.fullname;
        email.value = user.email;
        email2.value = user.email;
        imgUrl.value = user.avatar;
        password.value = user.password;
        confirm.value = user.password;;

        imgUrl.src = `http://localhost:8080/img/${user.avatar}`;
        document.getElementById('selectionAcount').innerHTML = 
        `
        <div class="container">
            <div class="banner-content" >
                <h1>${user.fullname}</h1>
                <h5>${user.email}</h5>
                </div>
                </div>
        `
        
    })
    .catch(function(err){
        console.log(err)
    })
}

getInfo();

function uploadAvatar() {
    let token = localStorage.getItem('USER_TOKEN');
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
        document.getElementById('imgAvatar').src = window.URL.createObjectURL(avatarInput.files[0])
        document.getElementById('imgAvatar').value = imageUrl;
        
    })
    .catch(function(err){
        console.log(err)
    })
}

function save(){
    let token = localStorage.getItem('USER_TOKEN');
    let url_str = window.location.href;
    let url = new URL(url_str);
    let id = url.searchParams.get('id');

    let user = {
        "avatar": document.getElementById('imgAvatar').value,
        "email": document.getElementById('email2').value,
        "fullname": document.getElementById('fullname').value,
        "id": id,
        "password": document.getElementById('password').value,
        "roleDesc": "",
        "roleId": 3
    }
    axios({
        url: 'http://localhost:8080/api/user/profile',
        method: 'PUT',
        data: user,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(function (resp) {
            swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                
            })
            
        })
        .catch(function (err) {
            console.log(err);
            swal("Unsuccessfull !", "You clicked the button!", "error");
        })
}