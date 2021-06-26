// LẤY TOKEN TỪ LOCALSTORAGE
let token = localStorage.getItem('USER_TOKEN');
let url_str = window.location.href;
let url = new URL(url_str);
let id = url.searchParams.get('id');

function loadCate() {
    axios({
        url: `http://localhost:8080/api/admin/category/${id}`,
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function (resp) {
        document.getElementById('title').value = resp.data.title;
        document.getElementById('imgUrl').value = resp.data.icon;
    })
    .catch(function (err) {
        console.log(err.response);
    })
}
loadCate();

function save() {

    let flag = true;
    let title = document.getElementById('title').value;
    let imgUrl = document.getElementById('imgUrl').value;

    if (flag === true) {
        // TẠO ĐỐI TƯỢNG USER
        let cate = {
            "icon": imgUrl,
            "id": id,
            "title": title
        }

        // GỌI API THÊM MỚI
        axios({
            url: 'http://localhost:8080/api/admin/category',
            method: 'POST',
            data: cate,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(function (resp) {
                swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                    window.location.href = '/category-index.html';
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