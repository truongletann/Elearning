let token = localStorage.getItem('USER_TOKEN');

function loadCourseData() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    axios({
        url: 'http://localhost:8080/api/admin/course',
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp) {
        let listCourse = resp.data;
        let content = '';
        let No = 1;
        for (let course of listCourse) {
            content += `
            <tr>
                <th>${No}</th>
                <td>${course.title}</td>
                <td><img src='http://localhost:8080/img/${course.image}' height="50" class="p-1 border" /></td>
                <td>${course.leturesCount}</td>
                <td class="text-danger font-weight-bold">${course.price}</td>
                <td>
                    <a href="/course-edit.html?id=${course.id}"class="btn btn-sm btn-info btn-round py-1 font-weight-bold">Sửa</a>
                    <a href="javascript:void(0)"class="btn btn-sm btn-danger btn-round py-1 font-weight-bold" onclick="remove(${course.id})" >Xóa</a>
                </td>
            </tr>
            `;
            No++;
        }
        document.getElementById('tBodyCourse').innerHTML = content;
    })
    .catch(function(err){
        let data = err.response.data;
        if(data.status == 401){
            alert('Chưa đăng nhập!')
        }
        else if(data.status == 403){
            alert('Không có quyền truy cập!')
        }
    })
}

loadCourseData();

function remove(id){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios({
                url: `http://localhost:8080/api/admin/course/${id}`,
                method: 'delete',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(function(resp){
                swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                    window.location.href = '/course-list.html';
                })
            })
            .catch(function(err){
                console.log(err)
                swal("Unsuccessfull !", "You clicked the button!", "error")
            })
            
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });

}