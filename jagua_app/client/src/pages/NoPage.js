import HTTPCat404 from "../assets/http_cat/404.jpeg"; // Imagem para mostrar ao usuario que nao achou pagina
import "./specialPaths.css"; // Estilo para mensagens semanticas de paginas nao encontradas

// Usuario cai nesta pagina se acessar dominio invalido no site
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