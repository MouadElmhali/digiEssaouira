import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export function Slider() {
  const [perView, setPerview] = React.useState(3);
  React.useEffect(() => {
    if(window.innerWidth < 768)
      setPerview(1);

  }, [])

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: perView,
      spacing: 15,
    },
  }, 
  [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  return (
     <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1 bg-[url('/images/said/comment-1.jpeg')]  bg-contain	bg-no-repeat	bg-center	"></div>
      <div className="keen-slider__slide number-slide2 bg-[url('/images/said/comment-2.jpeg')] h-96 w-96 bg-contain	bg-no-repeat	bg-center	"></div>
      <div className="keen-slider__slide number-slide3 bg-[url('/images/said/comment-3.jpeg')] h-96 w-96 bg-contain	bg-no-repeat	bg-center	"></div>
      <div className="keen-slider__slide number-slide4 bg-[url('/images/said/comment-4.jpeg')] h-96 w-96 bg-contain	bg-no-repeat	bg-center	"></div>
      <div className="keen-slider__slide number-slide5 bg-[url('/images/said/comment-5.jpeg')] h-96 w-96 bg-contain	bg-no-repeat	bg-center	"></div>
    </div>
  )
}
