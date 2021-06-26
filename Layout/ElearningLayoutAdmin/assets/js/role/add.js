let token = localStorage.getItem('USER_TOKEN');

function addRole() {
    // Lấy thông tin từ form
    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;

    let role = {
        "id": "0",
        "name": name,
        "description": desc
    }
    // Gọi api để thêm mới 
    axios({
        url: 'http://localhost:8080/api/admin/role',
        method: 'POST',
        data: role,
        headers: {
            "Authorization":`Bearer ${token}`
        }
    })
    .then(function (response) { // Xử lý response trả về
        console.log(response);
        swal("Thông báo!", "Thêm mới thành công!", "success").then(function(resp){
            window.location.href = '/role-index.html';
        })
       
    })
    .catch(function (error) { // Xử lý error trả về
        console.log(error);
        swal("Thông báo!", "Thêm mới thất bại!", "error");
    })
}