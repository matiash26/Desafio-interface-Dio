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
                                <Cards title="Carreira Back-end"
                                    projeto="124" atividade="27">
                                    <li>Formação Java Developer</li>
                                    <li>Formação .NET Developer</li>
                                    <li>Formação Angular Developerr</li>
                                    <li>Formação React Developer</li>
                                    <li>Formação PHP Experience</li>
                                </Cards>
                                <Cards title="Carreira Front-end"
                                    projeto="107" atividade="23">
                                    <li>Formação HTML Web Developer</li>
                                    <li>Formação CSS Web Developer</li>
                                    <li>Formação JavaScript Developer</li>
                                    <li>Formação TypeScript Fullstack Developer</li>
                                    <li>Formação Programação Reativa com Spring WebFlux</li>
                                </Cards>
                                <Cards title="Carreira Mobile"
                                    projeto="80" atividade="16">
                                    <li>Formação Android Developer</li>
                                    <li>Formação Flutter Specialist</li>
                                    <li>Formação Swift & iOS Experience</li>
                                </Cards>
                                <Cards title="Carreira Infra e DevOps"
                                    projeto="41" atividade="6">
                                    <li>Formação Linux Fundamentals</li>
                                    <li>Formação Docker Fundamentals</li>
                                    <li>Formação Kubernetes Fundamentals</li>
                                </Cards>
                                <Cards title="Carreira do Futuro"
                                    projeto="88" atividade="17">
                                    <li>Formação Machine Learning Specialist</li>
                                    <li>Formação Blockchain Specialist</li>
                                    <li>Formação Game Developer: Roblox & Metaverse</li>
                                    <li>Formação Scrum Master Certification</li>
                                </Cards>
                                <Cards title="Carreira Qualidade de Software"
                                projeto="20" atividade="6">
                                    <li>Formação Quality Assurance (QA) Experience</li>
                                </Cards>
                                <Cards title="Carreira Dados"
                                projeto="26" atividade="7">
                                    <li>Formação SQL Database Specialist</li>
                                </Cards>
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