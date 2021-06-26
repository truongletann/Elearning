function getInfo() {
    let token = localStorage.getItem('USER_TOKEN');

    axios({
        url:`http://localhost:8080/api/admin/user`,
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp){
        let content = '';
        let listUser = resp.data;
        let No = 1;
        
        for(let user of listUser){
            content += `
            <tr>
                <th>${No}</th>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.roleDesc}</td>
                <td>
                    <a href="/user-edit.html?id=${user.id}" class="btn btn-sm btn-info btn-round py-1 font-weight-bold">Sửa</a>
                    <a href="javascript:void(0)" class="btn btn-sm btn-danger btn-round py-1 font-weight-bold" onclick="remove(${user.id})">Xóa</a>
                </td>
            </tr>
            `;

            No++;
        }

        document.getElementById('tBody').innerHTML = content;
    })
    .catch(function(err){
        console.log(err)
        let data = err.response.data;

        if(data.status==401){
            // window.location.href = "/login.html";
        }
        else if(data.status==403){
            alert('not have access !')
        }
    })
}

getInfo();

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
            let token = localStorage.getItem('USER_TOKEN');

        axios({
            url:`http://localhost:8080/api/admin/user/${id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(function(resp){
            getInfo();
        })
        .catch(function(err){
            console.log(err)
        })
        
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    
}

