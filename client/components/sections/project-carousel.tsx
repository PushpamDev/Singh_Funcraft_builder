"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

// --- Utility Hooks ---

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

// --- Constants & Types ---

const DURATION = 0.3
const TRANSITION = { duration: DURATION, ease: [0.4, 0, 0.2, 1] }
const TRANSITION_OVERLAY = { duration: 0.3, ease: "easeInOut" }

interface ProjectCardData {
  imageUrl: string;
  title: string;
}

interface Project {
    name: string;
    images: string[];
    description?: string;
}

// --- Carousel Component (Fixed Vertical Positioning) ---

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (card: ProjectCardData, index: number) => void
    controls: any
    cards: ProjectCardData[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const faceCount = cards.length
    
    // Geometry for "deck-of-cards" effect
    const cardWidth = isScreenSizeSm ? 250 : 300 
    const cardHeight = 450; 
    
    const radius = (faceCount * cardWidth) / (2 * Math.PI);
    const cylinderWidth = faceCount * cardWidth; 

    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    const rotateCarousel = (direction: 'left' | 'right') => {
      if (!isCarouselActive) return
      
      const currentRotation = rotation.get()
      const step = (360 / faceCount) * (direction === 'left' ? 1 : -1)
      
      controls.start({
        rotateY: currentRotation + step,
        transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.1 },
      })
    }

    return (
      <div
        className="relative flex h-full items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Navigation Arrows */}
        {isCarouselActive && (
          <>
            <button
              onClick={() => rotateCarousel('left')}
              // Adjusted 'top' to be relative to the card's new vertical position
              className="absolute left-0 top-1/2 z-10 p-4 text-3xl font-bold text-gray-800 transition hover:text-gray-900 bg-white/50 rounded-full ml-4 shadow-lg hidden md:block -translate-y-1/2"
              aria-label="Previous project"
            >
              &lt;
            </button>
            <button
              onClick={() => rotateCarousel('right')}
              // Adjusted 'top' to be relative to the card's new vertical position
              className="absolute right-0 top-1/2 z-10 p-4 text-3xl font-bold text-gray-800 transition hover:text-gray-900 bg-white/50 rounded-full mr-4 shadow-lg hidden md:block -translate-y-1/2"
              aria-label="Next project"
            >
              &gt;
            </button>
          </>
        )}

        {/* 3D Carousel Container */}
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
            zIndex: 1
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((card, i) => (
            // Outer div handles 3D position ONLY
            <motion.div
              key={`key-${card.imageUrl}-${i}`}
              className="absolute flex origin-center justify-center"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
                // 🔑 FIX: Set a fixed 'top' position (100px) instead of vertical center.
                // This pushes the card down, keeping the project name visible inside the new h-650px container.
                top: `100px`, 
                cursor: 'pointer' 
              }}
              onClick={() => handleClick(card, i)}
            >
                {/* Inner motion.div handles visual styling and simple hover scale */}
                <motion.div
                    className="flex flex-col items-center justify-center w-full h-full rounded-xl bg-white/90 p-4 shadow-2xl border border-gray-100"
                    whileHover={{ scale: 1.05 }}
                    transition={TRANSITION}
                >
                    <motion.img
                        src={card.imageUrl}
                        alt={card.title}
                        layoutId={`img-${card.imageUrl}`} 
                        className="pointer-events-none w-full rounded-xl object-cover h-3/4 shadow-md"
                        initial={{ filter: "blur(4px)" }}
                        animate={{ filter: "blur(0px)" }}
                        transition={TRANSITION}
                    />
                    <p className="mt-4 text-center font-sans text-xl font-semibold text-gray-800 truncate w-full px-2">{card.title}</p>
                </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

// --- ProjectCarousel Main Component (Fixed Container Height) ---

interface ProjectCarouselProps {
    projects: Project[];
}

function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeCard, setActiveCard] = useState<Project | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  
  const cards = useMemo(
    () => projects.map((p) => ({
        title: p.name,
        imageUrl: p.images[0]
    })),
    [projects]
  )

  const handleClick = (_cardData: ProjectCardData, index: number) => {
    setActiveCard(projects[index])
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveCard(null)
    setIsCarouselActive(true)
  }
  
  const activeImageUrl = activeCard?.images[0] || ""


  return (
    <div className="relative"> 
      <AnimatePresence mode="wait">
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 cursor-zoom-out"
            transition={TRANSITION_OVERLAY}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl cursor-default"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={TRANSITION}
              onClick={(e) => e.stopPropagation()} 
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-light z-10"
                    aria-label="Close project details"
                >
                    &times;
                </button>
                
                <motion.img
                    layoutId={`img-${activeImageUrl}`}
                    src={activeImageUrl}
                    alt={activeCard.name}
                    className="w-full h-auto rounded-xl shadow-xl object-cover border-4 border-gray-100"
                    transition={{
                        ...TRANSITION,
                        delay: 0.1,
                    }}
                />
                
                <div className="mt-6">
                    <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4">{activeCard.name}</h2>
                    {activeCard.description && (
                        <p className="text-center text-gray-600 mb-6">{activeCard.description}</p>
                    )}
                    
                    {activeCard.images.length > 1 && (
                        <div className="border-t pt-4 mt-4">
                            <h3 className="text-xl font-semibold mb-2">Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {activeCard.images.slice(1).map((img, i) => (
                                    <img key={i} src={img} alt={`Gallery image ${i+2}`} className="w-full rounded-lg object-cover aspect-video" />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 🔑 FIX: Increased container height to 650px to provide enough vertical space for the cards to rotate without being cut off. */}
      <div className="relative h-[650px] w-full overflow-hidden bg-gray-50 rounded-xl shadow-inner">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </div>
  )
}

export { ProjectCarousel };