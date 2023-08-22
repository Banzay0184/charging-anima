class Home {
    render() {
        let htmlData = ''
        let htmlData2 = ''

        data.forEach((elements) => {
            htmlData += `
                  <div class="swiper-slide">
                    <video id="card-img" loop muted autoPlay class="charging-video" src="${elements.src}"></video>
                  </div>
         `
        })

        htmlData2 += `
                <div>
                    <ul class="flex justify-around">
                        <li class="py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#D0F023]">All</li>
                        <li class="py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#666666]">Recommend</li>
                        <li class="py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#666666]">Live</li>
                        <li class="py-[4px] text-[#] px-[12px] rounded-[20px] bg-[#666666]">Illustration</li>
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
                <h1 class="hot-text">Hot of the week</h1>
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

// <video muted autoPlay className="charging-video"
//            src="https://player.vimeo.com/external/378997981.sd.mp4?s=3d832c48a330d0a439560395f957e3e82fa65985&profile_id=165&oauth2_token_id=57447761"></video>

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});