import styles from "../style"
import Button from "../components/Button"
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>人工智能的发展历史</h2>
      <p className={`${styles.paragraph} ${styles.bread2} `}>
        人工智能的发展历史可以追溯到20世纪50年代，当时计算机科学家们开始研究如何让计算机模拟人类的智能行为。
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)


export default CTA
