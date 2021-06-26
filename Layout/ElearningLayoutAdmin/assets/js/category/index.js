let token = localStorage.getItem('USER_TOKEN');

function loadCate() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    axios({
        url: 'http://localhost:8080/api/admin/category',
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp) {
        let listCate = resp.data;
        let content = '';
        let No = 1;
        for (let cate of listCate) {
            content += `
            <tr>
                <th>${No}</th>
                <td>${cate.title}</td>
                <td>
                    <img src='http://localhost:8080/img/${cate.icon}' height="50" class="p-1 border" />
                </td>
                <td>
                    <a href="/category-edit.html?id=${cate.id}" class="btn btn-sm btn-info btn-round py-1 font-weight-bold">Sửa</a>
                    <a href="javascript:void(0)" class="btn btn-sm btn-danger btn-round py-1 font-weight-bold" onclick="remove(${cate.id})" >Xóa</a>
                </td>
            </tr>
            `;
            No++;
        }
        document.getElementById('tBodyCate').innerHTML = content;
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

loadCate();

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
                url: `http://localhost:8080/api/admin/category/${id}`,
                method: 'delete',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(function(resp){
                swal("Successfull !", "You clicked the button!", "success").then(function(resp){
                    window.location.href = '/category-index.html';
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