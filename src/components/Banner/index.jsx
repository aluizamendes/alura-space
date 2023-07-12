import banner from "./banner.png"
import styles from "./Banner.module.scss"

export default function Banner() {
  return (
    <div className={styles.banner}>
        <h1>A galeria mais completa do espaco</h1>
        <img src={banner} alt="" />
    </div>
  )
}
