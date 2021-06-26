let token = localStorage.getItem('USER_TOKEN');

function loadRoleData() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    axios({
        url: 'http://localhost:8080/api/admin/role',
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp) {
        let listRole = resp.data;
        let content = '';
        for (let role of listRole) {
            content += `
            <tr>
                <th>${role.id}</th>
                <td>${role.name}</td>
                <td>${role.description}</td>
                <td>
                    <a href="/role-edit.html?id=${role.id}"
                        class="btn btn-sm btn-info btn-round py-1 font-weight-bold">Sửa</a>
                    <a href="javascript:void(0)"
                        class="btn btn-sm btn-danger btn-round py-1 font-weight-bold" onclick="remove(${role.id})">Xóa</a>
                </td>
            </tr>
            `;
        }
        document.getElementById('tbodyRole').innerHTML = content;
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

loadRoleData();

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
                url: `http://localhost:8080/api/admin/role/${id}`,
                method: 'delete',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(function(resp){
                swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                    window.location.href = '/role-index.html';
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