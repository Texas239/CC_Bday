document.getElementById('startBtn').addEventListener('click', function() {
    const audio = document.getElementById('birthdaySong');
    const intro = document.getElementById('intro-screen');
    const mainStage = document.getElementById('main-stage');

    // 1. Play Music
    audio.play().catch(e => console.log("Audio play blocked"));

    // 2. Reveal Stage
    intro.classList.add('slide-up');
    mainStage.classList.remove('hidden');

    // 3. Start Slideshow Loop
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // 5 seconds per photo

    // 4. Subtle Parallax Movement
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        document.querySelector('.content-wrapper').style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});