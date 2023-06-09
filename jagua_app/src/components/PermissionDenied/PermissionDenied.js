import HTTPCat401 from "../../assets/http_cat/401.jpeg";
import "../../pages/specialPaths.css";

const PermissionDenied = (props) => {
  const { userType } = props;

  return (
    <div className="blankAndCentered">
        <p className="alertSomething">Você não tem a permissão de {userType} necessária para visualizar esta página! Tente novamente.</p>
        <img src={HTTPCat401} alt="HTTP Cat 401 - Unauthorized" />
        <p><em>Imagem acima obtida do domínio https://http.cat/</em></p>
    </div>
  );
};

export default PermissionDenied;