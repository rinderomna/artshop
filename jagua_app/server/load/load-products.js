import fs from "fs";
import axios from "axios";
import FormData from "form-data";

const printsSizes = [
  {
    name: "A5",
    specific_size: "27cm x 10cm",
  },
  {
    name: "A4",
    specific_size: "27cm x 20cm",
  },
  {
    name: "A3",
    specific_size: "27cm x 30cm",
  },
];

const stickerSizes = [
  {
    name: "Tam. Único",
    specific_size: "2cm x 3,5cm",
  },
];

const shirtSizes = [
  {
    name: "P",
    specific_size: "Pequeno",
  },
  {
    name: "M",
    specific_size: "Médio",
  },
  {
    name: "G",
    specific_size: "Grande",
  },
];

const productList = [
  {
    id: 7,
    image: "./assets/visual_identity/prints/print_ovelha.png",
    name: "Print Ovelha Negra",
    slug: "print_ovelha",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    id: 8,
    image: "./assets/visual_identity/prints/print_besouro.png",
    name: "Print Besouro",
    slug: "print_besouro",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    id: 9,
    image: "./assets/visual_identity/prints/print_concha.png",
    name: "Print Fundo do Mar",
    slug: "print_fundo_do_mar",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    id: 10,
    image: "./assets/visual_identity/prints/print_celular.png",
    name: "Print Espelho",
    slug: "print_espelho",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    id: 11,
    image: "./assets/visual_identity/prints/print_irmas.png",
    name: "Print Abdução",
    slug: "print_abducao",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    id: 1,
    image: "./assets/visual_identity/adesivos/adesivo_arco_iris.png",
    name: "Adesivo Arco-íris",
    slug: "adesivo_arco_iris",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 6,
    sales: 0,
  },
  {
    id: 2,
    image: "./assets/visual_identity/adesivos/adesivo_sapo.png",
    name: "Adesivo Rã",
    slug: "adesivo_ra",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 5,
    sales: 0,
  },
  {
    id: 3,
    image: "./assets/visual_identity/adesivos/adesivo_planta.png",
    name: "Adesivo Vaso Azul",
    slug: "adesivo_vaso_azul",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 4,
    sales: 0,
  },
  {
    id: 4,
    image: "./assets/visual_identity/adesivos/adesivo_cabelo_coracao.png",
    name: "Adesivo Coração",
    slug: "adesivo_coracao",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 2,
    sales: 0,
  },
  {
    id: 5,
    image: "./assets/visual_identity/adesivos/adesivo_besouro_preto.png",
    name: "Adesivo Besouro Preto",
    slug: "adesivo_besouro_preto",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 4,
    sales: 0,
  },
  {
    id: 6,
    image: "./assets/visual_identity/adesivos/adesivo_besouro.png",
    name: "Adesivo Besouro",
    slug: "adesivo_besouro",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 5,
    sales: 0,
  },
  {
    id: 12,
    image: "./assets/visual_identity/camisetas/camiseta_medusa.png",
    name: "Camiseta Medusa",
    slug: "camiseta_medusa",
    price: 68.0,
    description: "Camiseta 100% algodão estampada usando silk screen.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 15,
    sales: 0,
  },
  {
    id: 13,
    image: "./assets/visual_identity/camisetas/camiseta_crowd.png",
    name: "Camiseta Crowd",
    slug: "camiseta_crowd",
    price: 68.0,
    description: "Camiseta 100% algodão estampada em silk screen.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 5,
    sales: 0,
  },
  {
    id: 14,
    image: "./assets/visual_identity/camisetas/camiseta_horror_vacui.png",
    name: "Camiseta Horror Vacui",
    slug: "camiseta_horror_vacui",
    price: 68.0,
    description:
      "Camiseta composta de 70% poliéster e 30% algodão. Estampada utilizando sublimação.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 12,
    sales: 0,
  },
];

const saveProduct = async (product) => {
  const formData = new FormData();

  formData.append("id", product.id);
  formData.append("image", fs.createReadStream(product.image));
  formData.append("name", product.name);
  formData.append("slug", product.slug);
  formData.append("price", product.price);
  formData.append("description", product.description);
  formData.append("type", product.type);

  product.sizes.forEach((size, index) => {
    formData.append(`sizes[${index}][name]`, size.name);
    formData.append(`sizes[${index}][specific_size]`, size.specific_size);
  });

  formData.append("stock", product.stock);
  formData.append("sales", product.sales);

  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/products/",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );
    console.log("Product saved successfully!");
    console.log("Product ID:", response.data);
  } catch (error) {
    console.error("Error saving the product:", error.message);
  }
};

const loadProducts = async () => {
  for (const product of productList) {
    await saveProduct(product);
  }
};

loadProducts();