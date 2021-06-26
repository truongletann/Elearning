let token = localStorage.getItem('USER_TOKEN');
let url_str = window.location.href;
let url = new URL(url_str);
let id = url.searchParams.get('id');

function loadCourse(){
    axios({
        url:'http://localhost:8080/api/admin/course',
        method:'get',
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(function(resp){
        let content = '';

        for (let course of resp.data) {
            content += `<option value="${course.id}">${course.title}</option>`;
        }

        document.getElementById('course').innerHTML = content;
    })
    .catch(function(err){
        console.log(err);
    })
}

loadCourse();

function loadVideo(){
    axios({
        url:`http://localhost:8080/api/admin/video/${id}`,
        method: 'get',
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(function(resp){
        document.getElementById('title').value = resp.data.title;
        document.getElementById('url').value = resp.data.url;
        document.getElementById('imgUrl').value = resp.data.avatar;
        document.getElementById('timeCount').value = resp.data.timeCount;
        document.getElementById('course').value = resp.data.courseId;
    })
    .catch(function(err){

    })
}

loadVideo();

function editVideo() {
    // Lấy thông tin từ form
    let title = document.getElementById('title').value;
    let url = document.getElementById('url').value;
    let imgUrl = document.getElementById('imgUrl').value;
    let timeCount = document.getElementById('timeCount').value;
    let course = document.getElementById('course').value;

    let video = {
        "avatar": imgUrl,
        "courseId": course,
        "id": id,
        "timeCount": timeCount,
        "title": title,
        "url": url
    }
    // Gọi api để thêm mới 
    axios({
        url: 'http://localhost:8080/api/admin/video',
        method: 'PUT',
        data: video,
        headers: {
            "Authorization":`Bearer ${token}`
        }
    })
    .then(function (response) { // Xử lý response trả về
        console.log(response);
        swal("Thông báo!", "Thành công!", "success").then(function(resp){
            window.location.href = '/video-list.html';
        })
       
    })
    .catch(function (error) { // Xử lý error trả về
        console.log(error);
        swal("Thông báo!", "Thất bại!", "error");
    })
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
