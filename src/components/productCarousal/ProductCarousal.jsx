import React,{useState} from "react";
import Image from 'next/image';
import style from './ProductCarousal.module.css';
import {HeartIcon} from '@heroicons/react/24/outline';
import MobileCarousel, {CarouselItem} from "../mobileCarousal/MobileCarousal";

const ProductCarousal = ({items}) => {
    return (
        <div className={style.carousal}>
            <a href="#" className={style.carousalFav}>
                <HeartIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <div className={style.carousalSlide}>
                {
                    items.map((item ,index) => {
                        return (
                            <div key={item?.id} id={items?.length -1 === index ? "lastImage" : ""}>
                                <Image src={item?.url} alt={item?.title} width={500} height={600}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.carousalSlideMobile}>
           <MobileCarousel>
           {items.map((item ,index) => {
                        return (
                            <CarouselItem key={item?.id}>
                            <div id={items?.length -1 === index ? "lastImage" : ""}>
                                <Image src={item?.url} alt={item?.title} width={500} height={600}/>
                            </div>
                            </CarouselItem>
                        )
                    })}
           </MobileCarousel>
           </div>
            
        </div>
    )
}
export default ProductCarousal;