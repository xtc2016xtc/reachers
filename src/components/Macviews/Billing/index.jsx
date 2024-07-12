import { apple,bill,google } from "../images"
import styles,{ layout } from "../style"

const Billing = () => {
  return (
    <section id="product" className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="product" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>人工智能发展 
          <br className="sm:block hidden"/>人工智能发展前景</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          人工智能（Artificial Intelligence，简称AI）是指计算机系统模拟、延伸和扩展人的智能，使计算机具有人的智能。人工智能是计算机科学的一个分支，研究如何使计算机具有智能行为，包括感知、理解、学习、推理、决策等能力。人工智能的发展前景非常广阔，有望在医疗、教育、金融、交通、制造等多个领域发挥重要作用。
        </p>
      </div>
    </section>
  )
}

export default Billing
