/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "../css/cards.module.css"

function Cards() {
    return(
<div>
    <div className={styles.container}>
        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card1.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Tem menu exclusivo no Méqui.</h5>
                <p className={styles.desc}>
                Agora além de já garantir o novo molho Cajun, você também pode garantir um dos personagens do BT21.
                </p>
            </div>

            <button className={styles.botao}>Aproveite, é por tempo limitado</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card2.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Chegaram os Novos Brabos. Pros Dias de Glória.</h5>
                <p className={styles.desc}>
                Quando deu tudo certo no seu dia, já sabe, né? Comemore com o Novo Brabo ClubHouse e o Novo Brabo Melt Onion Rings.
                </p>
            </div>

            <button className={styles.botao}>Peça agora.</button>

        </div>

    </div>

    <div className={styles.container}>
        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card3.jpg`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Cheddarize-se. A Piscininha de Cheddar Chegou no Méqui</h5>
                <p className={styles.desc}>
                A Piscininha de Cheddar do Méqui Voltou !
                </p>
            </div>

            <button className={styles.botao}>Eu Quero</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card4.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>É mais que satisfatório. É Chocrocantemente</h5>
                <p className={styles.desc}>
                O McFlurry Chocrocante com Diamante Negro chegou trazendo toda aquela cremosidade da massa, pedacinhos de Diamante Negro euma calda que endurece e vira casquinha
                </p>
            </div>

            <button className={styles.botao}>Experimente</button>

        </div>

    </div>

    <div className={styles.container}>
        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card5.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Se liga quem tá na área: Big Tasty turbo Queijo!</h5>
                <p className={styles.desc}>
                O Big Tasty que é uma verdadeira extravagância de queijolência.
                </p>
            </div>

            <button className={styles.botao}>Eu Quero!</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card6.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Os livrinhos da Turma da Mônica chegaram no Méqui.</h5>
                <p className={styles.desc}>
                São 5 opções pra família toda se divertir com o McLanche Feliz.
                </p>
            </div>

            <button className={styles.botao}>Bora?</button>

        </div>

    </div>

    <div className={styles.container}>
        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card7.jpg`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Os personagens de Yu-Gi-Oh x Hello Kitty chegaram com tudo no Méqui</h5>
                <p className={styles.desc}>
                Dois mundos se juntaram para deixar a brincadeira muito mais legal noMcLanche Feliz.
                </p>
            </div>

            <button className={styles.botao}>Partiu diversão?</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card8.jpg`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Meu Méqui</h5>
                <p className={styles.desc}>
                Chegou o programa de fidelidade do Méqui! A cada R$1 gasto, você ganha 100 pontos. É Méqui que vira ponto, que vira mais Méqui!  
                </p>
            </div>

            <button className={styles.botao}>Saiba Mais</button>

        </div>

    </div>

    
    <div className={styles.container}>
        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card9.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Atenção! Se olhar pro McFlurry não vai ter mais jeito, vai ter que provar.</h5>
                <p className={styles.desc}>
                O McFlurry Kit Kat com o Leite em Pó mais querido do Brasil chegou com tudo no Méqui pra matar a sua fome geladinha.
                </p>
            </div>

            <button className={styles.botao}>Experimente</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card10.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Menos fila, mais Méqui</h5>
                <p className={styles.desc}>
                Se você não gosta de fila, então pega essa.  
                </p>
            </div>

            <button className={styles.botao}>Consulte Restaurantes</button>

        </div>

    </div>

    <div className={styles.container}>
        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card11.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Já add o Méqui Zap?</h5>
                <p className={styles.desc}>
                Aquele contato do whatsapp que nunca te deixa no vácuo e sempre manda promoção boa é o nosso.
                </p>
            </div>

            <button className={styles.botao}>Clique aqui</button>

        </div>

        <div className={styles.card} >
            <img className={styles.imagem} src={`${process.env.PUBLIC_URL}/card12.png`} alt="Imagem do card"/>

            <div className={styles.texto}>
                <h5 className={styles.titulo}>Méqui da Madruga</h5>
                <p className={styles.desc}>
                Quer saber quais os restaurantes têm Drive 24H pra matar sua fome da madrugada? 
                </p>
            </div>

            <button className={styles.botao}>Clique aqui</button>

        </div>

    </div>


</div>

    )
}

export default Cards;