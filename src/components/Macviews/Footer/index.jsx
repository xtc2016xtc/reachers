import styles from "../style"
import { logo } from "../images"
import { footerLinks, socialMedia } from "../../../constants/Mac"
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className={`flex flex-1 flex-col justify-start mr-10`}>
        <img src={logo} alt="hobbk" className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Hobbk is a social media platform for sharing your hobbies and interests with the world.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-0">

      </div>
    </div>


  </section>
)
export default Footer

