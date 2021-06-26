// KIỂM TRA ĐĂNG NHẬP
function checkLogin() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    let token = localStorage.getItem('USER_TOKEN');
    if(token == null || token.length == 0){
        document.location.href = "/login.html";
    }
}

// ĐĂNG XUẤT
function logout() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    let token = localStorage.getItem('USER_TOKEN');
    if(token != null){
        // XÓA TOKEN KHỎI LOCALSTORAGE
        localStorage.removeItem('USER_TOKEN');
        document.location.href = "/login.html";
    }
}

checkLogin();


function getInfo(){
    let token = localStorage.getItem('USER_TOKEN');
    axios({
        url:`http://localhost:8080/api/account`,
        method: 'get',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(resp){
        document.getElementById('iAvatar').src = `http://localhost:8080/img/${resp.data.avatar}`;
        document.getElementById('sName').innerHTML = resp.data.fullname;
    })
    .catch(function(err){
        console.log(err)
    })
}

getInfo();