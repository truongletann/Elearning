let token = localStorage.getItem('USER_TOKEN');
let url_str = window.location.href;
let url = new URL(url_str);
let id = url.searchParams.get('id');

function loadRole(){
    axios({
        url:`http://localhost:8080/api/admin/role/${id}`,
        method:'get',
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(function(resp){
        document.getElementById('name').value = resp.data.name;
        document.getElementById('desc').value = resp.data.description;
    })
    .catch(function(err){
        console.log(err)
    })
}

loadRole();

function editRole(){
    let name = document.getElementById('name');
    let desc = document.getElementById('desc');

    let role = {
        "description": desc.value,
        "id": id,
        "name": name.value
    }

    axios({
        url:'http://localhost:8080/api/admin/role',
        method:'put',
        data:role,
        headers:{
            "Authorization":`Bearer ${token}`
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
}