"use client";

import Image from "next/image";

const slidesTestimonials = [
    {
        id: 0,
        classes: "swiper-slide swiper-slide-active",
        index: 0,
        ariaLabel: "1 / 2",
        author: "Shawn Edwards",
        position: "CEO, Company Alpha",
        text: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco."
    },
    {
        id: 1,
        classes: "swiper-slide swiper-slide-next swiper-slide-duplicate-prev",
        index: 1,
        ariaLabel: "2 / 2",
        author: "Jessica Miller",
        position: "Marketing Manager, Beta Corp",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        classes: "swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active",
        index: 0,
        ariaLabel: "1 / 2",
        author: "David Lee",
        position: "Product Owner, Gamma LLC",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        id: 3,
        classes: "swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next",
        index: 1,
        ariaLabel: "2 / 2",
        author: "Emily Johnson",
        position: "CTO, Delta Inc",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials">

            <div className="container testimonials__container">

                <div className="testimonials__content">

                    <h2 className="title testimonials__title">What our clients are saying</h2>

                    <div className="swiper testimonials__items swiper-no-swiping swiper-initialized swiper-horizontal swiper-pointer-events">

                        <div className="swiper-wrapper" id="swiper-wrapper-d44697131a9cf2d1" aria-live="polite" style={{ transform: 'translate3d(-642px, 0px, 0px)', transitionDuration: '0ms', }}>

                            {slidesTestimonials.map((slide) => (
                                <div
                                    key={slide.id}
                                    className={slide.classes} data-swiper-slide-index={slide.index} role="group" aria-label={slide.ariaLabel} style={{ width: '612px', marginRight: '30px' }}>

                                    <div className="testimonials-item">

                                        <div className="testimonials-item__image">

                                            <Image src={"/"} alt="Human 1" width={100} height={100} className="testimonials-item__image" />

                                        </div>

                                        {/* <p className="testimonials-item__descr" dangerouslySetInnerHTML={{ __html: slide.text }}>Ipsum aute sunt aliquip aute et&nbsp;occaecat. Anim minim do&nbsp;cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.</p> */}

                                        <p className="testimonials-item__descr">{slide.text}</p>

                                        <span className="testimonials-item__author">{slide.author}</span>

                                        <span className="testimonials-item__author-position">{slide.position}</span>

                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className="slider-nav testimonials__slider-nav">

                            <button className="btn-reset slider-nav__btn testimonials__prev slider-btn" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-d44697131a9cf2d1">

                                <svg><use xlinkHref="img/sprite.svg#left-arrow"></use></svg>

                            </button>

                            <button className="btn-reset slider-nav__btn testimonials__next slider-btn" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-d44697131a9cf2d1">

                                <svg><use xlinkHref="img/sprite.svg#right-arrow"></use></svg>

                            </button>

                        </div>

                    </div>

                </div>

                <Image src={"/"} alt="Testimonials Image" width={100} height={100} aria-hidden="true" className="testimonials__image" />

            </div>

        </section>
    );
};

export default Testimonials;