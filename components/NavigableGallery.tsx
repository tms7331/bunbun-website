'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
  { src: "/placeholder.svg", alt: "BunBun playing" },
  { src: "/placeholder.svg", alt: "BunBun eating carrots" },
  { src: "/placeholder.svg", alt: "BunBun napping" },
  { src: "/placeholder.svg", alt: "BunBun in the garden" },
  { src: "/placeholder.svg", alt: "BunBun with friends" },
]

export function NavigableGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full aspect-square">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className="object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 px-2 py-1 rounded-full">
        <p className="text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  )
}

