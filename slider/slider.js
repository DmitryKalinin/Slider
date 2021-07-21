class Slider {
    constructor(parent) {
        this.container = parent.querySelector('.slider-container');
        this.track = parent.querySelector('.slider-track');
        this.items = parent.querySelectorAll('.slider-item');
        this.prev = parent.querySelector('.btn-prev');
        this.next = parent.querySelector('.btn-next');
        this.titles = parent.querySelectorAll('.slider-item-title');

        this.position = 0;
        this.slidesToScroll = 1;
        this.slidesToShow = this.getSlideToShow();
        this.maxPosition = this.items.length - this.slidesToShow;

        this.prev.addEventListener('click', () => this.handlePrevClick());
        this.next.addEventListener('click', () => this.handleNextClick());
        window.addEventListener("resize", () => {
            this.slidesToShow = this.getSlideToShow();
            this.setPosition();
        })
        this.setPosition();
        this.titleHeight();
        this.checkBtns();
    }

    getSlideToShow() {
        return this.container.clientWidth >= 1200 ? 4 : Math.floor(this.container.clientWidth / this.items[0].clientWidth)
    }
    titleHeight() {
        let max = 0;
        this.titles.forEach(item => max = item.clientHeight > max ? item.clientHeight : max)
        this.titles.forEach((item) => { item.style.height = `${max}px` })
    }
    handlePrevClick() {
        this.position--;
        if (this.position < 0) {
            this.position = 0;
        }
        this.setPosition(2);
        this.checkBtns();
    }

    handleNextClick() {
        this.position++;
        if (this.position > this.maxPosition) {
            this.position = 0;
        }
        this.setPosition(1);
        this.checkBtns();
    }

    setPosition(q) {
        for (let i = 0; i < this.items.length; i++) {


            q === 1 ? this.items[i].style.transform += `translateX(${-(this.items[i].clientWidth+40)}px)` : false;
            q === 2 ? this.items[i].style.transform += `translateX(${this.items[i].clientWidth+40}px)` : false;
        }
    }

    checkBtns() {
        this.prev.disabled = this.position <= 0;
        this.next.disabled = this.position >= this.maxPosition;
    }
}
new Slider(document.querySelector('.slider'));