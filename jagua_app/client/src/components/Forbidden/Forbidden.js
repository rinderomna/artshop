import HTTPCat403 from "../../assets/http_cat/403.jpeg";
import "../../pages/specialPaths.css";

const Forbidden = () => {
  return (
    <div className="blankAndCentered">
        <p className="alertSomething">Você não tem acesso direto a esta rota. Por favor, siga os fluxos possibilitados pelo site.</p>
        <img src={HTTPCat403} alt="HTTP Cat 403 - Forbidden" />
        <p><em>Imagem acima obtida do domínio https://http.cat/</em></p>
    </div>
  );
};

export default Forbidden;