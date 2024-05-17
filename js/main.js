document.addEventListener('DOMContentLoaded', () => {

    const body = document.getElementById('body');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBody = document.getElementById('mobile-menu-body');
    const mobileMenuButtons = document.querySelectorAll('[data-toggle="mobile-menu"]');
    const modalButtons = document.getElementsByClassName('modal_toggle');

    function toggleMobileMenu() {
        toggleMultiClass(mobileMenu, ['show']);
        toggleMultiClass(mobileMenuBody, ['show']);
        toggleMultiClass(body, ['overflow-hidden']);
    }

    function toggleMultiClass(el, cls) {
        if (el) {
            for (let i = 0; i < cls.length; i++) {
                el.classList.toggle(cls[i]);
            }
        }
    }

    // Handle the event when the mobile menu button is clicked
    for (let i = 0; i < mobileMenuButtons.length; i++) {
        mobileMenuButton = mobileMenuButtons[i];
        mobileMenuButton.addEventListener('click', () => {
            toggleMobileMenu();
        });
    }

    // Modal
    for (let i = 0; i < modalButtons.length; i++) {
        const modalButton = modalButtons[i];
        modalButton.addEventListener('click', () => {
            const id = modalButton.getAttribute('data-modal');

            if (id) {
                const el = document.getElementById(id);
                el.classList.toggle('show');
            }
        });
    }

    // SCROLL EVENT
    let lastPoint = null;
    let lastPointRecordedAt = 0;
    let currentTop = null;

    function getTop() {
        return window.pageYOffset || document.documentElement.scrollTop
    }

    function hanldeScrollEvent() {
        const top = currentTop;
        const navbar = document.getElementById('navbar')
        let originalNavbarTop = navbar.style.top;
        navbar.classList.remove('bg-gray-950/90');

        if(top < navbar.offsetHeight) {
            navbar.style.top = 0;
        } else {
            if(top < lastPoint) {
                navbar.classList.add('bg-gray-950/90');
                navbar.style.top = 0;
            } else {
                navbar.style.top = "-90px";
            }
        }

        if (originalNavbarTop !== navbar.style.top) {
            lastPoint = top
            lastPointRecordedAt = (new Date()).getTime()
        }
    }

    function showMoreMangaList() {
        const els = document.getElementsByClassName('showMore');

        for (let i = 0; i < els.length; i++) {
            const el = els[i];

            el.addEventListener('click', function() {
                el.classList.add('hidden');
                el.parentElement.classList.remove('max-h-80');
            })
        }
    }

    // let timeoutHandler = null;
    // window.addEventListener('scroll', function () {
    //     if (timeoutHandler) {
    //         clearTimeout(timeoutHandler)
    //     }

    //     const currentTime = (new Date()).getTime()
    //     if (currentTime - lastPointRecordedAt >= 500) {
    //         lastPoint = getTop()
    //         lastPointRecordedAt = currentTime
    //     }

    //     currentTop = getTop()
    //     timeoutHandler = setTimeout(() => {
    //         hanldeScrollEvent();
    //         clearTimeout(timeoutHandler)
    //         timeoutHandler = null
    //     }, 10)
    // });

    // hanldeScrollEvent();
    showMoreMangaList();
})