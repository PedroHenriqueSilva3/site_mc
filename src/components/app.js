import styles from "../css/app.module.css"

function Baixarapp() {
    return(
        <div className={styles.barra}>
        <div className={styles.container}>

            <div className={styles.logo}>
                <img className={styles.img} src={`${process.env.PUBLIC_URL}/logo_red.webp`} alt="Logo" />
            </div>

            <div className={styles.texto}>
                <h1 className={styles.titulo}>Já baixou o nosso App?</h1>
                <p className={styles.paragrafo}>Peça seu delivery, veja o menu, baixe stickers, peça e retire, 
                    encontre os restaurantes mais próximos, tenha todos os cupons e muito mais.</p>
            </div>

            <button className={styles.botao}>Baixe agora</button>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1047" height="53" viewBox="0 0 1047 53" class="mcd-svg-drops-desktop is-hidden-touch"><g fill="#FFBC0D" fill-rule="evenodd"><path d="M783 0h8.898c27.346 1.109 41.205 29.39 70.124 24.947 10.435-1.602 19.12-7.673 30.019-7.762 26.084-.21 38.888 29.7 63.222 34.884 7.298 1.555 14.958 1.35 21.71-2.062 5.922-2.992 10.522-7.947 14.51-13.13 6.888-8.958 13.024-18.669 21.26-26.511 4.48-4.262 9.887-8.221 16.028-9.521 2.384-.506 4.793-.72 7.207-.845H1046M0 0c95.445 0 125.033 46.115 167.984 46.115C219.525 46.115 251.974 0 325.469 0c53.687 0 70.33 25.94 94.489 25.94C448.951 25.94 467.205 0 508.544 0" transform="translate(.32)"></path></g></svg>
        </div>
    )
}

export default Baixarapp;