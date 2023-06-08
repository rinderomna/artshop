import { useContext, useEffect } from 'react';

import { StatusContext } from '../App.js';

import HighlightBanner from "../components/HighlightBanner/HighlightBanner";
import bannerNovidades from "../assets/visual_identity/banners/banner_novidades.png";
import AdminHomeBanner from "../components/AdminHomeBanner/AdminHomeBanner.js";

import Catalog from "../components/Catalog/Catalog";

// Depois isto estara em um JSON para simularmos dados armazenados no BD...
// Colocando os dados aqui no momento para verificar verossimilhanca em relacao aos mockups
import printOvelhaNegra from "../assets/visual_identity/prints/print_ovelha.png";
import printBesouro from "../assets/visual_identity/prints/print_besouro.png";
import printFundoDoMar from "../assets/visual_identity/prints/print_concha.png";
import printEspelho from "../assets/visual_identity/prints/print_celular.png";
import printAbducao from "../assets/visual_identity/prints/print_irmas.png";

import adesivoArcoIris from "../assets/visual_identity/adesivos/adesivo_arco_iris.png";
import adesivoRa from "../assets/visual_identity/adesivos/adesivo_sapo.png";
import adesivoVasoAzul from "../assets/visual_identity/adesivos/adesivo_planta.png";
import adesivoCoracao from "../assets/visual_identity/adesivos/adesivo_cabelo_coracao.png";
import adesivoBesouroPreto from "../assets/visual_identity/adesivos/adesivo_besouro_preto.png";
import adesivoBesouro from "../assets/visual_identity/adesivos/adesivo_besouro.png";

import camisetaMedusa from "../assets/visual_identity/camisetas/camiseta_medusa.png";
import camisetaCrowd from "../assets/visual_identity/camisetas/camiseta_crowd.png";
import camisetaHorrorVacui from "../assets/visual_identity/camisetas/camiseta_horror_vacui.png";

const Home = () => {
    const { status, setStatus } = useContext(StatusContext);

    useEffect(() => {
        if (!status.user) {
            setStatus(
                {
                    ...status,
                    type: "loggedOut"
                }
            );
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const printsSizes = [
        {
            name: "A5",
            specific_size: "27cm x 10cm"
        },
        {
            name: "A4",
            specific_size: "27cm x 20cm"
        },
        {
            name: "A3",
            specific_size: "27cm x 30cm"
        }
    ]

    const stickerSizes = [
        {
            name: "Tam. Único",
            specific_size: "2cm x 3,5cm"
        },

    ]

    const shirtSizes = [
        {
            name: "P",
            specific_size: "Pequeno"
        },
        {
            name: "M",
            specific_size: "Médio"
        },
        {
            name: "G",
            specific_size: "Grande"
        }
    ]

    const printsProducts = [
        {
            id: 7,
            image: printOvelhaNegra,
            name: "Print Ovelha Negra",
            price: "8,50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            sizes: printsSizes
        },
        {
            id: 8,
            image: printBesouro,
            name: "Print Besouro",
            price: "8,50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            sizes: printsSizes
        },
        {
            id: 9,
            image: printFundoDoMar,
            name: "Print Fundo do Mar",
            price: "8,50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            sizes: printsSizes
        },
        {
            id: 10,
            image: printEspelho,
            name: "Print Espelho",
            price: "8,50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            sizes: printsSizes
        },
        {
            id: 11,
            image: printAbducao,
            name: "Print Abdução",
            price: "8,50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            sizes: printsSizes
        }
    ];

    const stickersProducts = [
        {
            id: 1,
            image: adesivoArcoIris,
            name: "Adesivo Arco-íris",
            price: "2,90",
            description: "Adesivo de vinil à prova-d'água.",
            sizes: stickerSizes
        },
        {
            id: 2,
            image: adesivoRa,
            name: "Adesivo Rã",
            price: "2,90",
            description: "Adesivo de vinil à prova-d'água.",
            sizes: stickerSizes
        },
        {
            id: 3,
            image: adesivoVasoAzul,
            name: "Adesivo Vaso Azul",
            price: "2,90",
            description: "Adesivo de vinil à prova-d'água.",
            sizes: stickerSizes
        },
        {
            id: 4,
            image: adesivoCoracao,
            name: "Adesivo Coração",
            price: "2,90",
            description: "Adesivo de vinil à prova-d'água.",
            sizes: stickerSizes
        },
        {
            id: 5,
            image: adesivoBesouroPreto,
            name: "Adesivo Besouro Preto",
            price: "2,90",
            description: "Adesivo de vinil à prova-d'água.",
            sizes: stickerSizes
        },
        {
            id: 6,
            image: adesivoBesouro,
            name: "Adesivo Besouro",
            price: "2,90",
            description: "Adesivo de vinil à prova-d'água.",
            sizes: stickerSizes
        }
    ];

    const shirtsProducts = [
        {
            id: 12,
            image: camisetaMedusa,
            name: "Camiseta Medusa",
            price: "68,00",
            description: "Camiseta 100% algodão estampada usando silk screen.",
            sizes:shirtSizes
        },
        {
            id: 13,
            image: camisetaCrowd,
            name: "Camiseta Crowd",
            price: "68,00",
            description: "Camiseta 100% algodão estampada em silk screen.",
            sizes:shirtSizes
        },
        {
            id: 14,
            image: camisetaHorrorVacui,
            name: "Camiseta Horror Vacui",
            description: "Camiseta composta de 70% poliéster e 30% algodão. Estampada utilizando sublimação.",
            price: "68,00",
            sizes:shirtSizes
        },
    ];

    return (
        <>
            {
                (status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ?
                <AdminHomeBanner /> :
                <HighlightBanner imageSrc={bannerNovidades} altText="novidades" />
            }

            <main className="bodyWrapper">
                <Catalog name="Prints em Papel Couchê" type="printsCatalog" products={printsProducts}/>
                <Catalog name="Adesivos de Vinil" type="stickersCatalog" products={stickersProducts} />
                <Catalog name="Camisetas" type="shirtsCatalog" products={shirtsProducts} />
            </main>
        </>
    );
};

export default Home;