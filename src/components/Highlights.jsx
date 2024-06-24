import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { rightImg, watchImg } from "../utils";
import { VideoCarousel } from ".";

// 导出一个Highlights组件，用于渲染高亮显示的页面
const Highlights = () => {
  // 使用GSAP进行动画效果
  useGSAP(() => {
    // 使标题的透明度变为1，Y坐标为0
    gsap.to('#title', { opacity: 1, y: 0})
    // 使链接的透明度变为1，Y坐标为0
    gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})
  },[])
  
  // 渲染一个高亮显示的页面
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
     <div className="scrim-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highklights.</h1>

          <div className="flex flex-wrap items-end gap-5">
              <p className="link">
                watch the film
                <img src={watchImg} alt="wacth" className="ml-2"/>
              </p>
              <p className="link">
                watch the event
                <img src={rightImg} alt="wacth" className="ml-2"/>
              </p>
          </div>
        </div>
        {/* // 调用VideoCarousel组件，用于渲染视频轮播 */}
        <VideoCarousel />
     </div>
    </section>
  )
}

// 导出Highlights组件
export default Highlights