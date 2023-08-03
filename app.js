document.addEventListener('DOMContentLoaded', () => {

    const names = document.querySelectorAll('h2');

    const particlesAnimation = anime({
        targets: '.particles span',
        translateX: () => {
            return anime.random(-800, 800)
        },
        translateY: () => {
            return anime.random(-800, 800)
        },
        scale: () => {
            return anime.random(1, 4)
        },
        opacity: 0,
        easing: 'linear',
        duration: 1000,
        autoplay: false,
        delay: anime.stagger(15),
    })

    names.forEach(el => {

        el.addEventListener('mouseenter', () => {
            anime({
                targets: el,
                letterSpacing: 0,
                scale: 1.2,
                color: '#fff',
            });

            anime({
                targets: '#' + el.dataset.character,
                translateX: '-100%',
                rotate: '-360deg',
            });

            anime({
                targets: document.body,
                backgroundColor: el.dataset.bg,
            });

            anime({
                targets: '.particles',
                opacity: 1,
                duration: 100,
            });

            particlesAnimation.restart();

        });

        el.addEventListener('mouseleave', () => {
            anime({
                targets: el,
                letterSpacing: '-1rem',
                scale: 1,
                color: 'rgba(0,0,0,0)',
            });

            anime({
                targets: '#' + el.dataset.character,
                translateX: 0,
                rotate: 0,
            });

            anime({
                targets: document.body,
                backgroundColor: '#f0cfe7',
            });

            anime({
                targets: '.particles',
                opacity: 0,
                duration: 100,
            });

            particlesAnimation.pause();

        })

    })

})