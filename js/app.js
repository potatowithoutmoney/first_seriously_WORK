gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// регистрируем плагин фреймворк
if (ScrollTrigger.isTouch !== 1) {
    // усл чтобы на мобилках не было скрола какого то тк могут возник трабл
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        // smooth скорость скрола
        effects: true
        // effects позвол упр эффектами


        // нужна оболочка врапер и элты content которые внутри плавают для мялкого скрола
        // надо обьявл переменные для работы 
        // берем вырез и копируем всю работу  и вставл в div wrapper внутри которого 
        // встмавл в div content
    })
    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '900',
            scrub: true
        }
    })
    // 1 фиг скобки знач до 2 фиг скобы знач после
    // когда появл тригер то происходят события 
    // scrup возвращает значение после
    let itemsL = gsap.util.toArray('.gallery-left .gallery-item')
    // создает цикл
    gsap.fromTo('.gallery-left .gallery-item', { x: -50, opacity: 0 },
        {
            opacity: 1, x: 0,
            // Х ось коорд движени от -50 и до 0 , они выплывают с боку
            scrollTrigger: {
                trigger: '.gallery-item',
                scrub: true
            }
        })
}