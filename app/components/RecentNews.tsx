"use client"

import Image from "next/image";
import Texts from "./Texts";

const RecentNews = () => {
    return (
        <section className="pt-20 pb-[120px] bg-light">

            <div className="container">

                <Texts title="Recent News" className="mb-[60px]" />

                <ul className="p-0 m-0 grid grid-cols-12 grid-rows-[255px_255px] gap-[30px] mb-20">

                    <li className="col-span-7 row-span-2">

                        <article className="overflow-hidden rounded h-full shadow-soft-multi_sec bg-light">

                            <Image src={"/images/portfolio_first.jpg"} alt="article 1" width={705} height={306} className="max-w-full w-[594px] h-[304px] xl:w-[705px] xl:h-[306px]" />

                            <div className="py-5 px-6">

                                <h3 className="mb-[13px]">

                                    <a href="#" className="text-ebony text-xl leading-[150%] font-bold hover:text-primary transition-default">How to&nbsp;Build Climate Change-Resilient Infrastructure</a>

                                </h3>

                                <div className="mb-[17px] text-storm text-sm leading-[150%] font-normal">

                                    <a href="#" className="relative mr-[21px]">Industry News</a>

                                    <time className="relative" dateTime="2020-06-24 19:00">June 24, 2020</time>

                                </div>

                                <p className="m-0 text-gray text-base leading-[160%] font-normal">Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>

                            </div>

                        </article>

                    </li>

                    <li className="recent-news__item">

                        <article className="news-article news-article--small">

                            <Image src={"/"} alt="article 2" width={100} height={100} className="news-article__image" />

                            <div className="news-article__text">

                                <h3 className="news-article__title">

                                    <a href="#" className="news-article__link">How Construction Can Help Itself</a>

                                </h3>

                                <div className="news-article__meta article-meta">

                                    <a href="#" className="article-meta__item">Innovation</a>

                                    <time className="article-meta__item" dateTime="2020-06-24 19:00">June 12, 2020</time>

                                    <span className="article-meta__item article-meta__item--comments">No comments</span>

                                </div>

                                <p className="news-article__descr">Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>

                            </div>

                        </article>

                    </li>

                    <li className="recent-news__item">

                        <article className="news-article news-article--small">

                            <Image src={"/"} alt="article 3" width={100} height={100} className="news-article__image" />

                            <div className="news-article__text">

                                <h3 className="news-article__title">

                                    <a href="#" className="news-article__link">Types of Flooring Materials</a>

                                </h3>

                                <div className="news-article__meta article-meta">

                                    <a href="#" className="article-meta__item">Company News</a>

                                    <time className="article-meta__item" dateTime="2019-12-1 19:00">December 1, 2019</time>

                                    <span className="article-meta__item article-meta__item--comments">No comments</span>

                                </div>

                                <p className="news-article__descr">Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>

                            </div>

                        </article>

                    </li>

                </ul>

                <div className="recent-news__learn learn-more">

                    <h4 className="learn-more__subtitle">Explore all our news posts</h4>

                    <a href="#" className="btn-reset learn-more__btn btn btn--fill">View all news</a>

                </div>

            </div>

        </section>
    );
};

export default RecentNews;