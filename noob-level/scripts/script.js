document.addEventListener('DOMContentLoaded', function () {
    
    // SLIDER

    const slides = document.querySelectorAll('.section1-slider .slide');
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add('active');
    }

    setInterval(changeSlide, 3000);

    // DROPDOWN MENU

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.menu-header-bottom-ul > li').forEach(item => {
            item.addEventListener('click', () => {
                const dropdown = item.querySelector('.dropdown-elctronic-banking, .dropdown-banking-services, .dropdown-international-services');
                
                if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                    dropdown.style.display = 'block';
                } else {
                    dropdown.style.display = 'none';
                }
            });
        });
    });
    

});
