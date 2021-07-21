class Slider {
    constructor(parrent) {
        this.container = parrent.querySelector('.slider-container');
        this.track = parrent.querySelector('.slider-track');
        this.items = parrent.querySelectorAll('.slider-item');
        this.prev = parrent.querySelector('.btn-prev');
        this.next = parrent.querySelector('.btn-next');

        this.slidesToScroll = 1;
        this.slidesToShow = this.container.clientWidth >= 1200 ? 4 : Math.floor(this.container.clientWidth / this.items[1].clientWidth);

    }
}
new Slider(document.querySelector('.slider'));