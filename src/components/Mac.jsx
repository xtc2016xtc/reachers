import { Footer, Hero,Billing,Business, CardDeal, Clients, CTA, Stats, Testimonials, Navbar } from "./Macviews"
import styles from './Macviews/style'
const Mac = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* 第二版导航栏 */}
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div> */}

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          {/* 第二版底部导航 */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}

export default Mac
