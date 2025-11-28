class HeroCarousel {
    constructor() {
        this.data = [
            {
                imageUrl: '/img/ImagemTreino.jpeg'
            },
            {
                imageUrl: '/img/juvenil.jpeg'
            },
            {
                imageUrl: '/img/kids.jpeg'
            }
        ];

        this.currentIndex = 0;
        this.carouselContainer = document.getElementById('hero-carousel');
        this.timer = null;

        this._createImages();
        this._startTimer();
    }

    _createImages() {
        if (!this.carouselContainer) return;

        this.data.forEach((item, index) => {
            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.classList.add('hero-image');
            
            if (index === 0) {
                img.classList.add('active');
            }
            this.carouselContainer.appendChild(img);
        });
        
        this.slides = document.querySelectorAll('.hero-image');
    }
    
    _startTimer() {
        this.timer = setInterval(() => this.next(), 5000);
    }

    next() {
        if (!this.slides || this.slides.length === 0) return;

        this.slides[this.currentIndex].classList.remove('active');

        this.currentIndex = (this.currentIndex + 1) % this.slides.length;

        this.slides[this.currentIndex].classList.add('active');
    }
    
    stop() {
        clearInterval(this.timer);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const heroCarousel = new HeroCarousel();
});