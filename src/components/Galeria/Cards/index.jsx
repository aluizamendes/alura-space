import Card from './Card'

export default function Cards(props) {
    const { itens, styles } = props

    return (
        <ul className={styles.galeria__cards}>
            {
                itens.map((item) => {
                    return (
                        <Card key={item.id} item={item} />
                    )
                })
            }
        </ul>
    )
}
