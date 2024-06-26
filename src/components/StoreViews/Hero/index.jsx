import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo,smallHeroVideo } from "../../../utils"
import { useEffect, useState } from "react"
const Hero = () => {
  //设置videoSrc的初始值
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  //根据屏幕大小设置videoSrc
  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo)
    }else {
      setvideoSrc(heroVideo)
    }
  }
  //负责监听屏幕完成自适应大小
  useEffect(() => {
    window.addEventListener('resize',handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize',handleVideoSrcSet)
    }
  },[])

  //使用GSAP完成动画效果
  useGSAP(() =>{
    gsap.to('#hero',{ opacity:1,delay:1.5 })
    gsap.to('#cta',{ opacity:1,y:-50,delay:1.5 })
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
        
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">
            buy
          </a>
          <p className="font-normal text-xl"> from $199/month or $999</p>
        </div>
        
    </section>
  )
}

export default Hero