"use client"

import Texts from "./Texts";
import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
    {
        year: "2021",
        title: "Начало пути",
        description: "Запуск первого проекта и первые шаги в веб-разработке.",
    },
    {
        year: "2022",
        title: "Рост и опыт",
        description: "Работа с крупными клиентами и изучение новых технологий.",
    },
    {
        year: "2023",
        title: "Новые горизонты",
        description: "Участие в open-source и создание своих библиотек.",
    },
    {
        year: "2024",
        title: "Уверенность и масштаб",
        description: "Создание масштабируемых приложений и собственных продуктов.",
    },
];

const History = () => {
    /* const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false); */

    return (
        <section className="bg-athens">

            <div>

                <Texts title="Our history" className="text-start" />

                <div></div>

                <h2 className="text-[#9A9CA5] text-[28px] leading-[150%] font-bold transition-default hover:text-primary">March 2019</h2>

            </div>

            <div>

                {/* <div className="relative flex items-center gap-3 z-[15] select-none">

                    <button className={`portfolio-section__prev flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                        ${isBeginning ? 'opacity-40 pointer-events-none' : 'hover:text-light hover:bg-primary cursor-pointer'}`} aria-label="Previous slide">

                        <FaArrowLeftLong />

                    </button>

                    <button className={`portfolio-section__next flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                        ${isEnd ? 'opacity-40 pointer-events-none' : 'hover:text-light hover:bg-primary cursor-pointer'}`} aria-label="Next slide">

                        <FaArrowRightLong />

                    </button>

                </div> */}

                <Image src={"/images/portfolio_first.jpg"} alt="Portfolio First image" width={810} height={450} className="max-w-[810px] h-[450px] object-cover" />

                <p className="max-w-[810px] text-gray text-base sm:text-lg leading-[160%] font-normal">Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus. Eu nec vitae,</p>

            </div>

            <section className="bg-athens">
                <div>
                    <Texts title="Our history" className="text-start" />

                    {/* ТАЙМЛАЙН */}
                    <div className="relative mx-auto max-w-3xl px-4 py-16">
                        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`mb-10 flex w-full items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                                    }`}
                            >
                                <div
                                    className={`relative w-full max-w-[45%] rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md border border-white/20 ${index % 2 === 0 ? "text-left" : "text-right"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg ${index % 2 === 0 ? "right-[-35px]" : "left-[-35px]"
                                            }`}
                                    ></span>

                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                    <p className="mt-2 text-sm text-blue-400 font-semibold">{item.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Подпись после таймлайна */}
                    <h2 className="text-[#9A9CA5] text-[28px] leading-[150%] font-bold transition-default hover:text-primary">
                        March 2019
                    </h2>
                </div>

                <div>
                    {/* <div className="relative flex items-center gap-3 z-[15] select-none">
                        <button
                            className={`portfolio-section__prev flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                                ${isBeginning
                                    ? "opacity-40 pointer-events-none"
                                    : "hover:text-light hover:bg-primary cursor-pointer"
                                }`}
                            aria-label="Previous slide"
                        >
                            <FaArrowLeftLong />
                        </button>

                        <button
                            className={`portfolio-section__next flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                                ${isEnd
                                    ? "opacity-40 pointer-events-none"
                                    : "hover:text-light hover:bg-primary cursor-pointer"
                                }`}
                            aria-label="Next slide"
                        >
                            <FaArrowRightLong />
                        </button>
                    </div> */}

                    <Image
                        src={"/images/portfolio_first.jpg"}
                        alt="Portfolio First image"
                        width={810}
                        height={450}
                        className="max-w-[810px] h-[450px] object-cover"
                    />

                    <p className="max-w-[810px] text-gray text-base sm:text-lg leading-[160%] font-normal">
                        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae,
                        malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis.
                        Bcelerisque dapibus. Eu nec vitae,
                    </p>
                </div>
            </section>

        </section>
    );
};

export default History;