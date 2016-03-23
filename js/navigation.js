

// function scrollit(start, end, time) {
//     console.log(start, end, time);
//     const startTime = new Date().getTime();
//     const timer = setInterval(() => {
//         const step = Math.min(1, (new Date().getTime() - startTime) / time);
//         const adjustment = start + step * (end - start);
//         document.documentElement.scrollTop = document.body.scrollTop = adjustment;
//         if (step === 1) {
//             clearInterval(timer);
//         }
//     }, 25);
//     // elem.style[style] = start + unit;
// }

// const buttonNext = document.querySelector('[data-ref="button-next"]');
// const slides = document.querySelectorAll('[data-ref="slide"]');
// const meta = [];
// for (const s in slides) {
//     meta.push({
//         top: slides[s].offsetTop,
//         next: (slides[s+1]) ? slides[s+1].offsetTop : 999999999
//     });
// }
// console.log(meta);
// let currentSlide = 0;

// window.addEventListener('scroll', () => {
//     const top = document.documentElement.scrollTop || document.body.scrollTop;
//     console.log('scrolling', top);
// });

// buttonNext.addEventListener('click', () => {

//     const top = document.documentElement.scrollTop || document.body.scrollTop;
//     currentSlide = currentSlide + 1;
//     scrollit(top, slides[currentSlide].offsetTop, 2000);
// });
//# sourceMappingURL=navigation.js.map
