document.addEventListener('DOMContentLoaded', function () {
    
    // DROPDOWN MENU
    const menuItems = document.querySelectorAll('.menu-header-bottom-ul > li');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();

            menuItems.forEach(otherItem => {
                const dropdown = otherItem.querySelector('.dropdown-elctronic-banking, .dropdown-banking-services, .dropdown-international-services');
                if (dropdown && otherItem !== item) {
                    dropdown.style.display = 'none';
                }
            });

            const dropdown = item.querySelector('.dropdown-elctronic-banking, .dropdown-banking-services, .dropdown-international-services');
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    document.addEventListener('click', () => {
        menuItems.forEach(item => {
            const dropdown = item.querySelector('.dropdown-elctronic-banking, .dropdown-banking-services, .dropdown-international-services');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });

    // SLIDER
    const slides = document.querySelectorAll('.section1-slider .slide');
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add('active');
    }

    setInterval(changeSlide, 3000);

    // SLIDER DIAMOND
    const carousel = document.querySelector('.carousel');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    const scrollAmount = 250;

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    });

    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });

    const items = document.querySelectorAll('.section3-items-total');
    const topics = document.querySelectorAll('.grid-section3-topics');

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            topics.forEach(topic => {
                topic.classList.add('fade-in');
                topic.classList.remove('fade-out');
                setTimeout(() => {
                    topic.style.display = 'none';
                }, 0);
            });

            const relatedTopic = topics[index];
            if (relatedTopic) {
                setTimeout(() => {
                    relatedTopic.style.display = 'grid';
                    relatedTopic.classList.remove(fade-out);
                    relatedTopic.classList.add('fade-in');
                }, 0);
            }
        });
    });

    topics.forEach((topic, index) => {
        topic.style.display = index === 0 ? 'grid' : 'none';
        if(index === 0) topic.classList.add('fade-in');
    });

});
