import styles from "../style"
import { discount,robot } from "../images"
import GetStarted from "../GetStarted"

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span>
            Discount For {" "}
            <span className="text-white">Premium</span>
            Members {" "}
          </p>      
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            新时代
            <br className="sm:block hidden"/>
            {""}
            <span className="text-gradient">
              Generation
            </span>{""}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
            人工智能
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            人工智能是计算机科学的一个分支，它致力于创建能够执行通常需要人类智能的任务的计算机程序。这些任务可能包括视觉感知、语音识别、自然语言处理、问题解决和决策制定等。人工智能的目标是使计算机能够执行任务，就像人类一样智能和灵活。
        </p>
      </div>

      <div>
        <img src={robot} alt="billing" 
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  )

export default Hero
