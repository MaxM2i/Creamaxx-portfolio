ScrollTrigger.create({
    trigger: '.sections',
    pin: '.tooltip',
    //markers: true,
    start: 'top 40%',
    end: 'bottom 56%'
});
const sections = gsap.utils.toArray('.section');
const src = [
    "./ressources/spartan.svg",
    "./ressources/castle.svg",
    "./ressources/da-vinci.svg",
    "./ressources/airplane.svg",
]
const dates = [
    "-3300 | 476",
    "476 | 1492",
    "1492 | 1792",
    "1792 | Ajd",
]
//console.log(sections);
sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        //markers: true,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            console.log('Section : ' + index);
            document.querySelector('.tooltip-img').src = src[index];
            document.querySelector('.tooltip p').innerHTML = dates[index];
            /*gsap.set('.tooltip-img', {
                attr: {src: src[index]}
            });*/

        },
        onEnterBack: () => {
            console.log('Reviens dans la Section : ' + index);
            document.querySelector('.tooltip-img').src = src[index];
            document.querySelector('.tooltip p').innerHTML = dates[index];
            /*gsap.set('.tooltip-img', {
                attr: {src: src[index]}
            });*/
        }
    })
})