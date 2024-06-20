import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo,smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"
const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo)
    }else {
      setvideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize',handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize',handleVideoSrcSet)
    }
  },[])

  useGSAP(() =>{
    gsap.to('#hero',{ opacity:1,delay:1.5 })
  },[])

  return (
    <section className="w-full nav-height bg-black">
        <div className="h-5/6 flex-col flex-center">
          <p id="hero" className="hero-title">iPhone 未知型号 pro</p>
          <div className="md:w-10/12 w-9/12">
            <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
              <source 
                src={videoSrc}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        
    </section>
  )
}

export default Hero
