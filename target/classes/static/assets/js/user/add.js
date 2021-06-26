function loadRole() {
    axios({
            url: 'http://localhost:8080/api/admin/role',
            method: 'get'
        })
        .then(function(resp) {
            let arrRole = resp.data;
            let strOption = '';

            for (let role of arrRole) {
                strOption += `<option value="${role.id}">${role.description}</option>`;
            }

            let roleIdTag = document.getElementById('roleId');
            roleIdTag.innerHTML = strOption;
        })
        .catch(function(err) {
            console.log(err);
        })
}

loadRole();

function addUser() {
    let checked = true;
    let fullname = document.getElementById('fullname').value;
    if (fullname.length == 0) {
        document.getElementById('fullnameErr').innerHTML = 'Vui long nhap ho ten';
        document.getElementById('fullnameErr').style.color = 'red';
        checked = false;
    } else {
        document.getElementById('fullnameErr').innerHTML = '';
    }

    let email = document.getElementById('email').value;
    if (email.length == 0) {
        document.getElementById('emailErr').innerHTML = 'Vui long nhap email';
        document.getElementById('emailErr').style.color = 'red';
        checked = false;
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false) {
        document.getElementById('emailErr').innerHTML = 'Email khong dung dinh dang';
        checked = false;
    } else {
        document.getElementById('emailErr').innerHTML = '';
    }

    let password = document.getElementById('password').value;
    if (password.length == 0) {
        document.getElementById('passwordErr').innerHTML = 'Vui long nhap password';
        document.getElementById('passwordErr').style.color = 'red';
        checked = false;
    } else {
        document.getElementById('passwordErr').innerHTML = '';
    }

    let confirm = document.getElementById('confirm').value;
    if (confirm.length == 0) {
        document.getElementById('confirmErr').innerHTML = 'Vui long nhap lai password';
        document.getElementById('confirmErr').style.color = 'red';
        checked = false;
    } else {
        document.getElementById('confirmErr').innerHTML = '';
    }

    let avatar = document.getElementById('avatar').value;
    let roleId = document.getElementById('roleId').value;

    if (checked == true) {
        let user = {
            "fullname": fullname,
            "email": email,
            "password": password,
            "confirm": confirm,
            "avatar": "",
            "roleId": roleId
        }
        console.log(user)
            //goi api them moi
        axios({
                url: 'http://localhost:8080/api/admin/user',
                method: 'post',
                data: user
            })
            .then(function(resp) {
                console.log(resp)
                console.log('Them moi thanh cong');
            })
            .catch(function(err) {
                console.log('Them moi that bai')
            })
    } else {
        console.log('Them moi that bai')
    }
    //tao doi tuong user


}