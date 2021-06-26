// LẤY TOKEN TỪ LOCALSTORAGE
let token = localStorage.getItem('USER_TOKEN');
let url_str = window.location.href;
let url = new URL(url_str);
let id = url.searchParams.get('id');

function loadCategory() {
    axios({
        url: 'http://localhost:8080/api/admin/category',
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(function (resp) {
            //  Lấy ra mảng role
            let arrCate = resp.data;
            // Tạo danh sách thẻ option
            let strOption = "";
            for (let cate of arrCate) {
                strOption += `<option value="${cate.id}">${cate.title}</option>`;
            }
            // Truy cập tới thẻ select có id là 'roleId'
            let roleIdTag = document.getElementById('categoryId');
            // Thay thế các thẻ option cũ bằng danh sách thẻ option mới
            roleIdTag.innerHTML = strOption;
        })
        .catch(function (err) {
            console.log(err.response);
        })
}
loadCategory();

function loadCourse(){
    axios({
        url: `http://localhost:8080/api/admin/course/${id}`,
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(function (resp) {
            document.getElementById('title').value = resp.data.title;
            document.getElementById('letureCount').value = resp.data.leturesCount;
            document.getElementById('hourCount').value = resp.data.hourCount;
            document.getElementById('categoryId').value = resp.data.categoryId;
            document.getElementById('price').value = resp.data.price;
            document.getElementById('discount').value = resp.data.discount;
            document.getElementById('imgUrl').value = resp.data.image;
            document.getElementById('content').value = resp.data.description;
        })
        .catch(function (err) {
            console.log(err.response);
        })
}

loadCourse();

function save() {
    let flag = true;
    let title = document.getElementById('title').value;
    let letureCount = document.getElementById('letureCount').value;
    let hourCount = document.getElementById('hourCount').value;
    let categoryId = document.getElementById('categoryId').value;
    let price = document.getElementById('price').value;
    let discount = document.getElementById('discount').value;
    let imgUrl = document.getElementById('imgUrl').value;
    let content = document.getElementById('content').value;

    if (flag === true) {
        // TẠO ĐỐI TƯỢNG USER
        let course = {
            "categoryId": categoryId,
            "description": content,
            "discount": discount,
            "hourCount": hourCount,
            "id": 0,
            "image": imgUrl,
            "lastUpdate": new Date().getTime(),
            "leturesCount": letureCount,
            "price": price,
            "promotionPrice": (price*discount/100),
            "title": title,
            "viewCount": 0
        }

        // GỌI API THÊM MỚI
        axios({
            url: 'http://localhost:8080/api/admin/course',
            method: 'PUT',
            data: course,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(function (resp) {
                swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                    window.location.href = '/course-list.html';
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