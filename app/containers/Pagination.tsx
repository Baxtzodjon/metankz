"use client"

import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    nextPage?: number;
    prevPage?: number;
    category: string;
}

export default function Pagination({ currentPage, totalPages, nextPage, prevPage, category }: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-5">

            {/* <button className="text-gray text-2xl transition-default hover:text-primary"><FaArrowLeftLong /></button> изначально не показывается после next pagination появяется чтобы вернуть предыдущего ты понял да уже как делаеться как и реальные работающие сайты

            <button className="text-primary text-base font-bold leading-[160%]">1</button>
            <button className="text-gray text-base font-bold leading-[160%] transition-default hover:text-primary">2</button> hover и есть active button
            <button className="text-gray text-base font-bold leading-[160%] transition-default hover:text-primary">3</button>
            <button className="text-gray text-base font-bold leading-[160%] transition-default hover:text-primary">4</button>

            <button className="text-gray text-2xl transition-default hover:text-primary"><FaArrowRightLong /></button> это тоже самое как left только наоборот работает */}

            <div className="flex items-center justify-center gap-5">

                {prevPage ? (
                    <Link
                        href={`/news?page=${prevPage}&category=${category}`}
                        className="text-gray text-2xl hover:text-primary"
                    >
                        <FaArrowLeftLong />
                    </Link>
                ) : (
                    <span className="hidden text-gray text-2xl"><FaArrowLeftLong /></span>
                )}

                {/* <span className="text-primary font-bold">{currentPage}</span> */}

                <div className="flex items-center gap-3">
                    {pages.map((page) => (
                        <Link
                            key={page}
                            href={`/news?page=${page}&category=${category}`}
                            className={`text-base font-bold leading-[160%] px-2 ${currentPage === page
                                    ? "text-primary"
                                    : "text-gray hover:text-primary"
                                }`}
                        >
                            {page}
                        </Link>
                    ))}
                </div>

                {nextPage ? (
                    <Link
                        href={`/news?page=${nextPage}&category=${category}`}
                        className="text-gray text-2xl hover:text-primary"
                    >
                        <FaArrowRightLong />
                    </Link>
                ) : (
                    <span className="hidden text-gray text-2xl"><FaArrowRightLong /></span>
                )}

            </div>

        </div>
    );
};