import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Rodape from "../../components/Rodape";
import styles from "./PaginaInicial.module.scss"

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />

            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            
            <footer>
                <Rodape />
            </footer>
        </>
    )
}