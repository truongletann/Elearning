let token = localStorage.getItem('USER_TOKEN');
let url_str = window.location.href;
let url = new URL(url_str);
let id = url.searchParams.get('id');

function loadCourses(){
    axios({
        url:'http://localhost:8080/api/admin/course',
        method: 'get',
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(function(resp){
        let content = "";

        for (let course of resp.data) {
            content += `
                <option value="${course.id}">${course.title}</option>
            `;
        }

        document.getElementById('courseSelect').innerHTML = content;
    })
    .catch(function(err){
        console.log(err)
    })
}

loadCourses();

function loadTarget(){
    axios({
        url:`http://localhost:8080/api/admin/target/${id}`,
        method: 'get',
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(function(resp){
        document.getElementById('title').value = resp.data.title;
        document.getElementById('courseSelect').value = resp.data.courseId;
    })
    .catch(function(err){
        console.log(err)
    })
}

loadTarget();

function save(){
    // Lấy thông tin từ form
    let title = document.getElementById('title').value;
    let courseId = document.getElementById('courseSelect').value;

    let target = {
        "courseId": courseId,
        "id": id,
        "title": title
    }
    // Gọi api để thêm mới 
    axios({
        url: 'http://localhost:8080/api/admin/target',
        method: 'PUT',
        data: target,
        headers: {
            "Authorization":`Bearer ${token}`
        }
    })
    .then(function (response) { // Xử lý response trả về

        swal("Thông báo!", "Thành công!", "success").then(function(resp){
            window.location.href = '/target-list.html';
        })
       
    })
    .catch(function (error) { // Xử lý error trả về
        console.log(error);
        swal("Thông báo!", "Thất bại!", "error");
    })
}