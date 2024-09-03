import styles from "../css/cards2.module.css"

function Vertical() {
    return(
        <div className={styles.container}>
        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card13.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Que tal um #MéquiNoSofá?</h5>
                <p className={styles.desc}>
                Faça agora seu pedido e receba em casa pelo delivery.
                </p>
            </div>

            <button className={styles.botao}>Clique aqui</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card14.jpg`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Confira as medidas que o Méqui adotou!</h5>
                <p className={styles.desc}>
                Juntos, vamos sair dessa ainda mais fortes, preparados e unidos.
                </p>
            </div>

            <button className={styles.botao}>Clique aqui</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card15.jpg`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Encontre o Méqui mais próximo de vc</h5>
                <p className={styles.desc}>
                Deixamos ainda mais fácil! Ative sua geolocalização e mostraremos o restaurante McDonald's mais próximo de você.
                </p>
            </div>

            <button className={styles.botao}>Clique aqui</button>

        </div>

    </div>
    )
}

export default Vertical;