'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="outline-none">
            <Image
              src={src}
              alt={`Project screenshot ${index + 1}`}
              width={800}
              height={450}
              className="mx-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageCarousel

