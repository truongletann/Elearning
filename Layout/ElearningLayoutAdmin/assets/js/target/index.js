let token = localStorage.getItem('USER_TOKEN');

function loadData() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    axios({
        url: 'http://localhost:8080/api/admin/target',
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp) {
        let listTarget = resp.data;
        let content = '';
        let No = 1;
        for (let target of listTarget) {
            content += `
            <tr>
                <th>${No}</th>
                <td>${target.title}</td>
                <td>
                    <a href="/target-edit.html?id=${target.id}" class="btn btn-sm btn-info btn-round py-1 font-weight-bold">Sửa</a>
                    <a href="javascript:void(0)" class="btn btn-sm btn-danger btn-round py-1 font-weight-bold" onclick="remove(${target.id})">Xóa</a>
                </td>
            </tr>
            `;
            No++;
        }
        document.getElementById('tBodyTarget').innerHTML = content;
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

loadData();

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
                url: `http://localhost:8080/api/admin/target/${id}`,
                method: 'delete',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(function(resp){
                swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                    loadData();
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