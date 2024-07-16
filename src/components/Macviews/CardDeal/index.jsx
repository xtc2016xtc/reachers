import { card } from "../images"
import styles,{layout} from "../style"
import Button from "../components/Button"
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        人工智能时代<br className="sm:block hidden"/>我们如何应对？
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      资本是聪明的。据PitchBook统计，2010年全球人工智能和机器学习领域获得的风险投资还不足5亿美元，而2017年这一领域的投资额已经超过108亿美元。2017年因此也被称为世界人工智能“元年”。同时，人工智能广阔的应用场景和可能的种种风险，使得人工智能成为一道摆在人类面前的选择题。
      </p>
      <Button styles="mt-10"/>
    </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className={styles.card} />
      </div>
  </section>
)

export default CardDeal
