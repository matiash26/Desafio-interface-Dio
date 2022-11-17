import "./style.css"
import ButtonMenu from "../../components/ButtonMenu"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Cards from "../../components/Cards"
import { useEffect } from "react";
const Home = () => {
    let x = 0
    const getSlide = () => {
        const allSlide = document.querySelectorAll(".backSlide")
        const slideObjt = {
            size: allSlide[0].offsetWidth,
            fullSize: allSlide[0].offsetWidth * allSlide.length
        }
        return slideObjt;
    }
    const arrowLeft = () => {
        let slide = document.querySelector(".slide")
        if (x < 0) {
            slide.style.right = `0px`
        } else {
            slide.style.right = `${x -= getSlide().size}px`
        }
    }

    const arrowRight = () => {
        let slide = document.querySelector(".slide")
        if (x > getSlide().fullSize / 2) {
            slide.style.right = `0px`
            x = 0
        } else {
            slide.style.right = `${x += getSlide().size}px`
        }
    }

    useEffect(() => {
        getSlide();
    }, [])

    return (
        <main className="mainHome">
            <section className="first-section">
                <div className="description-Container">
                    <div className="description">
                        <span>CODIFIQUE</span>
                        <h1>o seu futuro global agora!</h1>
                        <p>Domine as tecnologias utilizadas pelas empresas mais
                            inovadoras do mundo e encare seu novo desafio profissional,
                            evoluindo em comunidade com os melhores experts.
                        </p>
                        <div className="btn-description">
                            <ButtonMenu title="COMEÇAR AGORA" classe="btn-pink" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="second-section">
                <div className="topo-second">
                    <h1>Explore nossas <span id="carreiras">carreiras</span></h1>
                    <p>Desbloqueie o seu próximo nível de conhecimento e seja contratado pelas maiores empresas de tecnologia do país</p>
                </div>
                <div className="sectionSlide">
                    <div className="arrowLeft" onClick={arrowLeft}><FiChevronLeft /></div>
                    <div className="slider">
                        <div className="slides">
                            <div className="slide">
                                <Cards title="Carreira Back-end" />
                                <Cards title="Carreira 01" />
                                <Cards title="Carreira 02" />
                                <Cards title="Carreira 03" />
                                <Cards title="Carreira 04" />
                                <Cards title="Carreira 05" />
                                <Cards title="Carreira 06" />
                                <Cards title="Carreira 07" />
                            </div>
                        </div>
                    </div>
                    <div className="arrowRight" onClick={arrowRight}><FiChevronRight /></div>
                </div>
            </section>
        </main>
    )
}
export default Home;