'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSlider({ services }) {
    const topFiveService = services.length > 0 && services.slice(0, 5)
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let imageArrey = [
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
        'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q',
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a',
        'https://images.unsplash.com/photo-1598453527201-a9b82a34f7d9',
        'https://images.unsplash.com/photo-1573059638207-4ff617a06183'
    ]
    return (
        <div className="py-2">
            <Slider {...settings}>
                {topFiveService.map((service, index) => {
                    return (
                        <div className="relative" key={index}>
                            <div className="relative pt-[60%] md:pt-[30%] z-0">
                                <Image
                                    src={imageArrey[index]}
                                    width="1920"
                                    height="1080"
                                    alt="Title"
                                    priority
                                    className="absolute top-0 left-0 w-full h-full object-cover rounded"
                                />
                            </div>
                            <div className="absolute bottom-2 md:bottom-10 left-0 z-10 p-8">
                                <h2 className="text-white font-bold text-sm md:text-2xl bg-dark p-1">Book {service.name} service</h2>
                                <div className="mt-4">
                                    <Link href={`category/${service._id}`} className="text-sm border border-white bg-white text-black px-4 py-1 md:px-6 md:py-2 rounded-sm inline-block hover:bg-active">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
