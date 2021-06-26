let url_str = window.location.href;
let url = new URL(url_str);
let id = url.searchParams.get('id');

function loadCourseData() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    axios({
        url: `http://localhost:8080/api/user/usercourse/${id}`,
        method: 'get'
    })
    .then(function(resp) {
        console.log(resp.data)
        let listCourse = resp.data;
        let content = '';
        for (let course of listCourse) {
            content += `
            <div class="col-md-3">
                    <a href="#" class="my-course-item">
                        <img src="http://localhost:8080/img/${course.image}" alt="">
                        <h6 class="my-course-title">${course.title}</h6>
                        <div class="my-course-desc">
                            ${course.description}
                        </div>
                        <div class="my-course-author">
                            <h6>
                                <small>Lê Quang Song</small>
                                <small>Start course</small>
                            </h6>
                        </div>
                    </a>
                </div>
            `;
        }
        document.getElementById('dCourse').innerHTML = content;

    })
    .catch(function(err){
    
        if(data.status == 401){
            alert('Chưa đăng nhập!')
        }
        else if(data.status == 403){
            alert('Không có quyền truy cập!')
        }
    })
}

loadCourseData();