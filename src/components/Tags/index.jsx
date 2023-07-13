import React from 'react'
import styles from './Tags.module.scss'
import fotos from "../Galeria/fotos.json"

export default function Tags(props) {
  const { tags, filtraFotos, setItens } = props

  return (
    <div className={styles.tags}>
        <p>Filtre por tag:</p>
        <ul className={styles.tags__lista}>
          { 
            tags.map((tag) => {
              return (
                <li key={tag} onClick={() => filtraFotos(tag)}>
                  {tag}
                </li>
              )
            }) 
          }
          <li onClick={() => setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}
