"use client"

const Saveds = () => {
    /* const swiperRef = useRef<SwiperCore | null>(null);
    const paginationRefs = useRef<HTMLDivElement[]>([]);

    const updateCustomPagination = (index: number) => {
        paginationRefs.current.forEach((item, idx) => {
            const h3 = item.querySelector('h3');
            const lineWrapper = item.querySelector('div');
            const progressBar = item.querySelector('.progress-bar') as HTMLDivElement;

            if (!h3 || !lineWrapper || !progressBar) return;

            if (idx === index) {
                h3.classList.remove('opacity-60');
                h3.classList.add('opacity-100');
                lineWrapper.classList.remove('opacity-30');
                lineWrapper.classList.add('opacity-100');

                progressBar.classList.remove('animate-fill');
                void progressBar.offsetWidth; // reflow
                progressBar.classList.add('animate-fill');
            } else {
                h3.classList.remove('opacity-100');
                h3.classList.add('opacity-60');
                lineWrapper.classList.remove('opacity-100');
                lineWrapper.classList.add('opacity-30');

                progressBar.classList.remove('animate-fill');
                progressBar.style.width = '0%';
            }
        });
    };

    useEffect(() => {
        const swiperInstance = swiperRef.current;

        if (!swiperInstance) return;

        updateCustomPagination(swiperInstance.realIndex);

        swiperInstance.on('slideChange', () => {
            updateCustomPagination(swiperInstance.realIndex);
        });
    }, []);

    const handlePaginationClick = (index: number) => {
        const swiper = swiperRef.current;
        if (!swiper || swiper.realIndex === index) return;
        swiper.slideToLoop(index);
    }; */

    return (
        <div className="swiper hero-slider relative w-full h-[988px]">

            <div className="swiper-wrapper">

                {/* Слайд 1 */}

                <div className="swiper-slide flex items-center justify-center bg-cover bg-center h-[100vh]"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')" }}>

                    <div className="container">

                        <div className="flex flex-col gap-[61px] mt-[220px] mb-[120px]">

                            <div className="flex flex-col gap-6">

                                <h2 className="max-w-[577px] text-white text-7xl leading-[130%] font-bold uppercase">
                                    Create<span className="text-[#ff5a30]">x</span> construction
                                </h2>

                                <p className="max-w-[595px] text-white text-[20px] font-normal">Cras ultrices leo vitae non viverra.
                                    Fringilla nisi quisque consequat,dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
                                    pellentesque integer ipsum elementum felis.</p>

                            </div>

                            <div className="flex flex-col gap-[179px]">

                                <div className="flex items-center gap-6">

                                    <button
                                        className="w-69.5 h-13 border border-white text-white text-base font-bold uppercase hover:bg-[#ff5a30] hover:border-none rounded transition duration-300 ease-in-out cursor-pointer">Learn
                                        More About Us</button>

                                    <button
                                        className="w-56 h-13 bg-[#FF5A30] text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition duration-300 ease-in-out cursor-pointer">Submit
                                        Request</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* <!-- Слайд 2 --> */}

                <div className="swiper-slide flex items-center justify-center bg-cover bg-center h-[100vh]"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80')" }}>

                    <div className="container">

                        <div className="flex flex-col gap-[61px] mt-[220px] mb-[120px]">

                            <div className="flex flex-col gap-6">

                                <h2 className="max-w-[577px] text-white text-7xl leading-[130%] font-bold uppercase">
                                    Create<span className="text-[#ff5a30]">x</span> construction
                                </h2>

                                <p className="max-w-[595px] text-white text-[20px] font-normal">Cras ultrices leo vitae non viverra.
                                    Fringilla nisi quisque consequat,dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
                                    pellentesque integer ipsum elementum felis.</p>

                            </div>

                            <div className="flex flex-col gap-[179px]">

                                <div className="flex items-center gap-6">

                                    <button
                                        className="w-69.5 h-13 border border-white text-white text-base font-bold uppercase hover:bg-[#ff5a30] hover:border-none rounded transition duration-300 ease-in-out cursor-pointer">Learn
                                        More About Us</button>

                                    <button
                                        className="w-56 h-13 bg-[#FF5A30] text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition duration-300 ease-in-out cursor-pointer">Submit
                                        Request</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* <!-- Слайд 3 --> */}

                <div className="swiper-slide flex items-center justify-center bg-cover bg-center h-[100vh]"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1600&q=80')" }}>

                    <div className="container">

                        <div className="flex flex-col gap-[61px] mt-[220px] mb-[120px]">

                            <div className="flex flex-col gap-6">

                                <h2 className="max-w-[577px] text-white text-7xl leading-[130%] font-bold uppercase">
                                    Create<span className="text-[#ff5a30]">x</span> construction
                                </h2>

                                <p className="max-w-[595px] text-white text-[20px] font-normal">Cras ultrices leo vitae non viverra.
                                    Fringilla nisi quisque consequat,dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
                                    pellentesque integer ipsum elementum felis.</p>

                            </div>

                            <div className="flex flex-col gap-[179px]">

                                <div className="flex items-center gap-6">

                                    <button
                                        className="w-69.5 h-13 border border-white text-white text-base font-bold uppercase hover:bg-[#ff5a30] hover:border-none rounded transition duration-300 ease-in-out cursor-pointer">Learn
                                        More About Us</button>

                                    <button
                                        className="w-56 h-13 bg-[#FF5A30] text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition duration-300 ease-in-out cursor-pointer">Submit
                                        Request</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* <!-- Слайд 4 --> */}

                <div className="swiper-slide flex items-center justify-center bg-cover bg-center h-[100vh]"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1600&q=80')" }}>

                    <div className="container">

                        <div className="flex flex-col gap-[61px] mt-[220px] mb-[120px]">

                            <div className="flex flex-col gap-6">

                                <h2 className="max-w-[577px] text-white text-7xl leading-[130%] font-bold uppercase">
                                    Create<span className="text-[#ff5a30]">x</span> construction
                                </h2>

                                <p className="max-w-[595px] text-white text-[20px] font-normal">Cras ultrices leo vitae non viverra.
                                    Fringilla nisi quisque consequat,dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
                                    pellentesque integer ipsum elementum felis.</p>

                            </div>

                            <div className="flex flex-col gap-[179px]">

                                <div className="flex items-center gap-6">

                                    <button
                                        className="w-69.5 h-13 border border-white text-white text-base font-bold uppercase hover:bg-[#ff5a30] hover:border-none rounded transition duration-300 ease-in-out cursor-pointer">Learn
                                        More About Us</button>

                                    <button
                                        className="w-56 h-13 bg-[#FF5A30] text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition duration-300 ease-in-out cursor-pointer">Submit
                                        Request</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* <!-- Навигация --> */}

            <div className="absolute inset-y-1/2 left-4 z-10 -translate-y-1/2">

                <button
                    className="slider-btn-prev flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer"><img src="/icons/prev_arrow.svg" alt="" /></button>

            </div>

            <div className="absolute inset-y-1/2 right-4 z-10 -translate-y-1/2">

                <button
                    className="slider-btn-next flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer"><img src="/icons/next_arrow.svg" alt="" /></button>

            </div>

            {/* <!-- Pagination --> */}

            <div className="absolute bottom-32.5 left-[145px] z-100">

                <div className="custom-pagination flex gap-1 mt-6 z-100">
                    <div className="cursor-pointer" data-slide="0">
                        <h3 className="text-white text-[28px] font-bold opacity-60 transition-opacity duration-300">01</h3>
                        <div className="relative w-[178px] h-[2px] bg-white/30 overflow-hidden">
                            <div className="progress-bar absolute top-0 left-0 h-full bg-white w-0"></div>
                        </div>
                    </div>
                    <div className="cursor-pointer" data-slide="1">
                        <h3 className="text-white text-[28px] font-bold opacity-60 transition-opacity duration-300">02</h3>
                        <div className="relative w-[178px] h-[2px] bg-white/30 overflow-hidden">
                            <div className="progress-bar absolute top-0 left-0 h-full bg-white w-0"></div>
                        </div>
                    </div>
                    <div className="cursor-pointer" data-slide="2">
                        <h3 className="text-white text-[28px] font-bold opacity-60 transition-opacity duration-300">03</h3>
                        <div className="relative w-[178px] h-[2px] bg-white/30 overflow-hidden">
                            <div className="progress-bar absolute top-0 left-0 h-full bg-white w-0"></div>
                        </div>
                    </div>
                    <div className="cursor-pointer" data-slide="3">
                        <h3 className="text-white text-[28px] font-bold opacity-60 transition-opacity duration-300">04</h3>
                        <div className="relative w-[178px] h-[2px] bg-white/30 overflow-hidden">
                            <div className="progress-bar absolute top-0 left-0 h-full bg-white w-0"></div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="relative bg-red-600">
                <Swiper
                    className="hero-slider"
                    modules={[Navigation, Autoplay]}
                    loop
                    speed={1500}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.slider-btn-next',
                        prevEl: '.slider-btn-prev',
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="h-screen flex items-center justify-center bg-gray-800 text-white">
                                <h2 className="text-4xl">{slide.title}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="custom-pagination flex gap-4 mt-4">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            ref ={(el) => el && (paginationRefs.current[idx] = el)}
                            onClick={() => handlePaginationClick(idx)}
                            className="cursor-pointer transition-opacity duration-300"
                        >
                            <h3 className="opacity-60 text-white">{slide.title}</h3>
                            <div className="w-full h-1 bg-white/30 opacity-30 mt-1 relative">
                                <div className="progress-bar absolute top-0 left-0 h-1 bg-orange-500 w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button className="slider-btn-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white">Prev</button>
                <button className="slider-btn-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white">Next</button>
            </div> */}

        </div>
    );
};

export default Saveds;