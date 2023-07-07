import img_about_us from '../assets/visual_identity/outros/img_about_us.png';
import "./AboutMe.css";

const AboutMe = () => {
    return (
                <section className="content-container">
                    <div className="img-container">
                        <img src={img_about_us} id="img-about-us" alt="imagem da artista pintando"/>
                    </div>

                    <div className="text-container">
                        <h1>About Us</h1>

                        <p>Meu nome é Laura Ferré Scotelari e sou artista e ilustradora.
                        Comecei a pintar com 13 anos e desde então gosto de explorar as 
                        mais diversas formas de me expressar, desde pintura à óleo, 
                        passando pela arte digital até chegar no design gráfico.
                        Desde 2017 frequento feiras de arte em várias cidades, expondo
                        meus trabalhos também em eventos do Sesc e  no bandejão da
                        minha faculdade. A ideia para esse site surgiu como uma forma 
                        de divulgar de forma mais estruturada e constante minha arte.</p>

                        <h2>Site desenvolvido com  &lt; 3 por: </h2>
                        <h4>Dani Modesti • Hélio Nogueira • Laura Scotelari</h4>
                    </div>
                </section>
            );
};

export default AboutMe;