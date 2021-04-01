jQuery(document).ready(function () {
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

    });


});
