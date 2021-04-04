jQuery(document).ready(function () {
    //show hide header on scroll
    const body = document.body;
    const header = document.querySelector('.main-header');
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    document.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove(scrollUp);
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
            // down
            header.classList.remove(scrollUp);
            header.classList.add(scrollDown);

        } else if (currentScroll < lastScroll && header.classList.contains(scrollDown) || (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            // up
            header.classList.remove(scrollDown);
            header.classList.add(scrollUp);
        }
        lastScroll = currentScroll;


        //on scroll overlay the video/img reel
        // const overlay = document.querySelector('.home-reel');
        // const heroHeight = document.querySelector('.hero').offsetHeight;
        //
        // overlay.style.transform = "translateY(-" + currentScroll + "px)";

    });

    //get clients current time
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    const showTime = document.querySelector('.clients-time');

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    const time = hours + ':' + minutes;
    console.log(showTime);
    showTime.insertAdjacentHTML('afterbegin', time);



        console.log('Overlay: ' + overlay);
        console.log('scroll: ' + heroHeight);


});
