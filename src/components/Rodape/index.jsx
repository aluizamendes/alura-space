import React from 'react'
import styles from "./Rodape.module.scss"
import { facebookIcon, twitterIcon, instagramIcon } from '../../assets/icones'

export default function Rodape() {
  return (
    <>
        <div className={styles.social_icons}>
            <img src={facebookIcon} alt="Ícone facebook" />
            <img src={twitterIcon} alt="Ícone twitter" />
            <img src={instagramIcon} alt="Ícone instagram" />
        </div>
        <div className={styles.creditos}>
            <span>Desenvolvido por Ana Luiza Mendes designed by Alura</span>
        </div>
    </>
  )
}
