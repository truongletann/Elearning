
function loadCourseData() {
    // LẤY TOKEN TỪ LOCALSTORAGE
    axios({
        url: 'http://localhost:8080/api/user/course',
        method: 'get'
    })
    .then(function(resp) {

        let listCourse = resp.data;
        let content = '';
        for (let course of listCourse) {
            content += `
            <div class="col-md-3" >
                            <div class="course">
                                <img src="http://localhost:8080/img/${course.image}" />
                                <h6 class="course-title">${course.title}</h6>
                                <small class="course-content">
                                    ${course.description}
                                </small>
                                <div class="course-price">
                                    <span>${formatNumber(course.price*(1-course.discount/100))} đ</span>
                                    <small>${formatNumber(course.price)} đ</small>
                                </div>
                                <div class="seller-label">Sale ${course.discount}%</div>
                                <div class="course-overlay">
                                    <a href="details.html?id=${course.id}">
                                        <h6 class="course-title">
                                        ${course.title}
                                        </h6>
                                        <div class="course-author">
                                            <b>Trần Văn Dương</b>
                                            <span class="mx-1"> | </span>
                                            <b>Development</b>
                                        </div>
                                        <div class="course-info">
                                            <span><i class="fa fa-play-circle"></i> ${course.leturesCount} lectures</span>
                                            <span class="mx-1"> | </span>
                                            <span><i class="fa fa-clock-o"></i> ${course.hourCount} hours</span>
                                        </div>
                                        <small class="course-content">
                                        ${course.description}
                                        </small>
                                    </a>
                                    <a href="#" class="btn btn-sm btn-danger text-white w-100">Add to cart</a>
                                </div>
                            </div>
                </div>
            `;
        }
        document.getElementById('dCourse').innerHTML = content;
        document.getElementById('popularCourse').innerHTML = content;
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

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

