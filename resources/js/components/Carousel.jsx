import React from 'react'
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arr } from "../assets/imageExport"

const ArrowButton = ({ className, style, onClick, direction }) => (
    <button
        type="button"
        aria-label={direction === "next" ? "Next slide" : "Previous slide"}
        style={style}
        onClick={onClick}
        className={`${className} !z-20 !flex !h-12 !w-12 !items-center !justify-center !rounded-full !border !border-white/70 !bg-white/90 !text-slate-900 !shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition hover:scale-105 hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900`}
    >
        {direction === "next" ? <FaChevronRight className="text-lg" /> : <FaChevronLeft className="text-lg" />}
    </button>
);


const Carousel = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3500,
        adaptiveHeight: false,
        cssEase: "ease-in-out",
        dots: true,
        arrows: true,
        nextArrow: <ArrowButton direction="next" />,
        prevArrow: <ArrowButton direction="prev" />,
    };
    return (
        <div className='mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8'>
            <Slider {...settings}>
                <div className="px-1">
                    <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:h-[400px] md:h-[480px] lg:h-[520px]">
                        <img src={arr[0]} alt="slides" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent" />
                        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-900">
                            New season
                        </div>
                    </div>
                </div>
                <div className="px-1">
                    <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:h-[400px] md:h-[480px] lg:h-[520px]">
                        <img src={arr[1]} alt="slides" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent" />
                        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-900">
                            Trending now
                        </div>
                    </div>
                </div>
                <div className="px-1">
                    <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:h-[400px] md:h-[480px] lg:h-[520px]">
                        <img src={arr[2]} alt="slides" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent" />
                        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-900">
                            Premium fit
                        </div>
                    </div>
                </div>
                <div className="px-1">
                    <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:h-[400px] md:h-[480px] lg:h-[520px]">
                        <img src={arr[3]} alt="slides" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent" />
                        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-900">
                            Style drop
                        </div>
                    </div>
                </div>
                <div className="px-1">
                    <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:h-[400px] md:h-[480px] lg:h-[520px]">
                        <img src={arr[4]} alt="slides" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent" />
                        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-900">
                            Limited edit
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
