// LẤY TOKEN TỪ LOCALSTORAGE
let token = localStorage.getItem('USER_TOKEN');
let url_str = window.location.href;
let url = new URL(url_str);
let id = url.searchParams.get('id');

function loadCourse(){
    axios({
        url: `http://localhost:8080/api/user/course/${id}`,
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(function (resp) {
            document.getElementById('selectionForm').innerHTML =
            `
            <div class="container">
            <div class="banner-content">
                <h1 id="title">${resp.data.title}</h1>
                <h5 id="content">
                    ${resp.data.description}
                </h5>
                <h6 class="mt-3">
                    <span><i class="fa fa-user m-1"></i> Created by </span>
                    <a href="#" class="text-white font-weight-bold mr-4">Lê Quang Song</a>
                    <span id="lastUpdate"><i class="fa fa-calendar-check-o mr-1" ></i> Last updated ${resp.data.lastUpdate}</span>
                </h6>
                <h6 class="mt-3">
                    <span id="letureCount"><i class="fa fa-play-circle mr-1"></i> ${resp.data.leturesCount} lectures</span>
                    <span class="mx-1"> | </span>
                    <span id="hourCount"><i class="fa fa-clock-o mr-1"></i> ${resp.data.hourCount} hours</span>
                    <span class="ml-2">with <b class="mx-1">568,171</b> students enrolled</span>
                </h6>
            </div>
        </div>
            `

            document.getElementById('courseBuy').innerHTML = 
            `
            <h2 class="mb-4 font-weight-bold" id="price">
                            ${formatNumber(resp.data.price*(1-resp.data.discount/100))} đ
                            <small id="promotionPrice">${formatNumber(resp.data.price)}  đ</small>
                        </h2>
                        <button class="btn btn-danger w-100">Add to cart</button>
                        <button class="btn btn-outline-secondary w-100">Buy now</button>
                        <div class="course-buy-info mt-2">
                            <span>This course includes</span>
                            <small><i class="fa fa-play-circle-o"></i> 24 hours on-demand video</small>
                            <small><i class="fa fa-file-o"></i> 19 articles</small>
                            <small><i class="fa fa-code"></i> 19 coding exercises</small>
                            <small><i class="fa fa-empire"></i> Full lifetime access</small>
                            <small><i class="fa fa-tablet"></i> Access on mobile and TV</small>
                            <small><i class="fa fa-recycle"></i> Certificate of Completion</small>
                        </div>
                        <a class="course-buy-share border-top" href="#">
                            <i class="fa fa-share"></i> Share
                        </a>
            `
        })
        .catch(function (err) {
            console.log(err);
        })
}

loadCourse();

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
