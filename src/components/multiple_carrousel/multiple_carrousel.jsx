import { useState, useEffect } from "react";
import "./multiple_carrousel.css"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";

/** Components */
import ProductCard from '../../components/product_card/product_card';



const MultipleCarrousel = ({ items }) => {

    const [visibleSlides, setVisibleSlides] = useState(0)

    useEffect(() => {

        window.innerWidth > 768 ? setVisibleSlides(4) : setVisibleSlides(1)

        window.addEventListener("resize", () => {
            window.innerWidth > 768 ? setVisibleSlides(4) : setVisibleSlides(1)
        })
    })



    return (
        <CarouselProvider
            isIntrinsicHeight={true}
            totalSlides={items.length}
            visibleSlides={visibleSlides}
            isPlaying={true}
            interval={3000}
            infinite={false}
            step={1}
        >
            <Slider>
                {items.map((item, key) => (
                    <Slide index={key}>
                        <div className="slider-container">
                            <ProductCard id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} />
                        </div>
                    </Slide>
                ))}
            </Slider>
        </CarouselProvider>
    )
}

export default MultipleCarrousel;