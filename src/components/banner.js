import styles from "../css/banner.module.css"

function Banner() {
    return(
        <div className={styles.banner}>

            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/banner.png`} alt="Banner" />

            <div className={styles.texto}>

                <h1 className={styles.titulo}>Pega essa dica</h1>

                <p className={styles.sub}>Peça seu McDelivery ou Peça e Retire.</p>

                <button className={styles.botao}>Clique aqui!</button>

            </div>

        </div>
    );
}

export default Banner;