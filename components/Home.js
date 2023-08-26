class Home {
    render() {
        let htmlData = ''
        let htmlData2 = ''

        data.filter((elements) => {
            htmlData += `
                  <div class="swiper-slide ${elements.category}">
                    <img id="card-img" class="charging-video" src="${elements.src}"></img>
                  </div>
         `
        })

        htmlData2 += `
                <div>
                    <ul class="cati-cati flex justify-around">
                        <button data-f="All" class="categoryBtn py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#D0F023]">All</button>
                        <button data-f="Recommend" class="categoryBtn py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#666666]">Recommend</button>
                        <button data-f="Live" class="categoryBtn py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#666666]">Live</button>
                        <button data-f="Illustration" class="categoryBtn py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#666666]">Illustration</button>
                    </ul>
                </div>
            `


        const htmlHome = `
            <div class="container">
                <h1 class="text-[32px] font-bold py-[20px]">Home</h1>
                ${htmlData2}
                <h1 class="hot-text">Hot of the week</h1>
                <div class="swiper mySwiper">
                    <div id="imgs" class="swiper-wrapper">
                        ${htmlData}
                    </div>
                </div>
                <h1 class="hot-text">Top Wallpaper</h1>
                <div class="swiper mySwiper">
                    <div id="imgs" class="swiper-wrapper">
                        ${htmlData}
                    </div>
                </div>
            </div>
        `;

        ROOT_home.innerHTML = htmlHome;
    }
}

const homePage = new Home();
homePage.render();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const filterBtn = document.querySelectorAll('.swiper-slide')
const btnVol = document.querySelectorAll('.categoryBtn')


document.querySelector('.cati-cati').addEventListener('click', e => {
    if (e.target.classList !== 'cati-cati') {

    }
    let filterClass = e.target.dataset['f']
    filterBtn.forEach(el => {
        if (!el.classList.contains(filterClass) && filterClass !== 'All') {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })

});


btnVol.forEach(btn => {
    btn.addEventListener('click', function () {
        btnVol.forEach(btnn => btnn.classList.remove('bg-[#D0F023]'));
        this.classList.add('bg-[#D0F023]')
    })
})


