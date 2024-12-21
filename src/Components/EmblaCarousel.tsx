import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { Property } from './Listings'

type PropType = {
    properties: Property[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { properties, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [isSingleSlide, setIsSingleSlide] = useState(false)

    useEffect(() => {
        if (emblaApi) {
            // Check if there's only one slide
            setIsSingleSlide(properties.length <= 1)
        }
    }, [emblaApi, properties.length])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    // Force buttons to be disabled if there's only one slide
    const isPrevDisabled = prevBtnDisabled || isSingleSlide
    const isNextDisabled = nextBtnDisabled || isSingleSlide

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {properties.map((property, idx) => (
                        <div key={`${property.id}-${idx}`} className="embla__slide">
                            <div className="h-[400px] overflow-hidden rounded-lg relative">
                                <img
                                    src={property.sys_details.getimages[0]?.image_path}
                                    alt={property.address}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                                    <h3 className="text-xl font-semibold">{property.address}</h3>
                                    <p className="text-lg">
                                        {property.city_name}, {property.state.toUpperCase()}
                                    </p>
                                    <p className="text-lg">
                                        ${property.list_price.toLocaleString()} | {property.beds} beds | {property.fbaths} baths
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={isPrevDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={isNextDisabled} />
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
