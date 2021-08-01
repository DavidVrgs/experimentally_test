
import "./main_carrousel.css"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";


const MainCarrousel = ({ items }) => {

    return (
        <CarouselProvider
            isIntrinsicHeight={true}
            totalSlides={items.length}
            visibleSlides={1}
            isPlaying={true}
            interval={3000}
            infinite={true}
            step={1}
        >
            <Slider>
                {items.map((item, key) => (
                    <Slide index={key}>
                        <div className="slider-container">
                            
                        </div>
                    </Slide>
                ))}
            </Slider>
        </CarouselProvider>
    )
}

export default MainCarrousel;