import { feedback } from "../../../constants/Mac"
import styles from "../style"
import FeedbackCard from "../FeedbackCard"

const Testimonials = () =>(
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>用户对于 <br className={styles.bread}/>人工智能评价</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            人工智能程序的性能是衡量其优劣的重要指标。这包括程序的运行速度、计算效率、内存占用等。性能越好，人工智能程序的实用价值就越高。
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full relative feedback-container z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )


export default Testimonials
