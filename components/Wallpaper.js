class Wallpaper {
    render() {
        let htmData = ''
        data.forEach((element) => {
            htmData += `
                <div class="img-full">
                    <img class="rounded-[36px] w-[100%] h-[100vh]  object-cover relative"  class="charging-video" src="${element.src}"></img>
                    <div class="rounded-[36px] absolute top-0 border-[12px] border-black border-solid w-screen h-screen"></div>
                    <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 bg-black w-[200px] h-[70px] rounded-b-xl"></div>
                    <div class="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id="battery">
                        <div id="battery-level-digit" class="text-[40px] text-[#D0F023]">54%</div>
                        <h1 id="sattus">Discharged</h1>
                    </div>
                    <div onclick="Back()" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[4px] border-[4px] text-black bg-[#D0F023] border-[#D0F023] border-solid rounded-b-xl">Back</div>
                </div>
            `
        })

        const htmlWallpaper = `
            <div class="">
                ${htmData}
            </div>
        `;

        ROOT_wallpaper.innerHTML = htmlWallpaper;
    }
}

const wallpaperPage = new Wallpaper();
wallpaperPage.render();


const cardGameParent = document.querySelector('#imgs'),
    cardGame = document.querySelectorAll('#card-img'),
    cardGameContent = document.querySelectorAll('.img-full'),
    menu = document.querySelector('.menu'),
    gameInfoPage = document.querySelector('#wallpaper'),
    topGame = document.querySelector('#home')

function hideGameContent() {
    cardGameContent.forEach(item => {
        item.classList.add('hide',)
        item.classList.remove('show',)


    })
}

function showGameContent(i = 0) {
    cardGameContent[i].classList.add('show')
    cardGameContent[i].classList.remove('hide')
    cardGame[i].classList.add('tabheader__item_active')
}

cardGameParent.addEventListener('click', (e) => {
    const target = e.target
    cardGame.forEach((item, idx) => {
        if (target === item) {
            hideGameContent()
            showGameContent(idx)
            topGame.classList.add('hide')
            gameInfoPage.classList.remove('hide')
            // menu.classList.add('hide')

        }
    })
})

function Back() {
    gameInfoPage.classList.add('hide')
    topGame.classList.remove('hide')
}


navigator.getBattery().then(function (battery) {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLeveInfo();
        // updateChargingInfo();
        // updateDischarginInfo();
    }

    updateAllBatteryInfo();

    battery.addEventListener('chargingchange', function () {
        updateChargeInfo()
    });

    function updateChargeInfo() {
        if (battery.charging) {
            const sattus = document.querySelectorAll('#sattus')
            sattus.forEach(el => {
                el.innerHTML = 'Charging';
            })
            console.log('hi')
        } else {
            const sattus = document.querySelectorAll('#sattus')
            sattus.forEach(el => {
                el.innerHTML = 'Discharged';
            })
        }
    }

    battery.addEventListener('levelchange', updateLeveInfo);

    function updateLeveInfo() {
        const battery_level_digit = document.querySelectorAll('#battery-level-digit')
        battery_level_digit.forEach(el => {
            el.innerHTML = battery.level * 100 + '%';
        })
    }
})