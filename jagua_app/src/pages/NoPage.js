import HTTPCat404 from "../assets/http_cat/404.jpeg";
import "./specialPaths.css";

const NoPage = () => {
  return (
    <div className="blankAndCentered">
        <p className="alertSomething">Ooops... a rota especificada não existe no site! Tente novamente.</p>
        <img src={HTTPCat404} alt="HTTP Cat 404 - Not Found" />
        <p><em>Imagem acima obtida do domínio https://http.cat/</em></p>
    </div>
  );
};

export default NoPage;