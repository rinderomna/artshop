import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import { uid } from "uid";

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
    image: "./assets/visual_identity/prints/print_ovelha.png",
    name: "Print Ovelha Negra",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/prints/print_besouro.png",
    name: "Print Besouro",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/prints/print_concha.png",
    name: "Print Fundo do Mar",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/prints/print_celular.png",
    name: "Print Espelho",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/prints/print_irmas.png",
    name: "Print Abdução",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/adesivos/adesivo_arco_iris.png",
    name: "Adesivo Arco-íris",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/adesivos/adesivo_sapo.png",
    name: "Adesivo Rã",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 5,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/adesivos/adesivo_planta.png",
    name: "Adesivo Vaso Azul",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 4,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/adesivos/adesivo_cabelo_coracao.png",
    name: "Adesivo Coração",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 2,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/adesivos/adesivo_besouro_preto.png",
    name: "Adesivo Besouro Preto",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 4,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/adesivos/adesivo_besouro.png",
    name: "Adesivo Besouro",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 5,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/camisetas/camiseta_medusa.png",
    name: "Camiseta Medusa",
    price: 68.0,
    description: "Camiseta 100% algodão estampada usando silk screen.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 15,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/camisetas/camiseta_crowd.png",
    name: "Camiseta Crowd",
    price: 68.0,
    description: "Camiseta 100% algodão estampada em silk screen.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 5,
    sales: 0,
  },
  {
    image: "./assets/visual_identity/camisetas/camiseta_horror_vacui.png",
    name: "Camiseta Horror Vacui",
    price: 68.0,
    description:
      "Camiseta composta de 70% poliéster e 30% algodão. Estampada utilizando sublimação.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 12,
    sales: 0,
  },
];

const userList = [
  {
    type: "customer",
    username: "helio",
    password: "helio",
    fullname: "Hélio Nogueira Cardoso",
    email: "helionc1999@usp.br",
    phone: "(16) 99192-9256",
    address: "Rua das Ruas - Jardim das Oliveiras - Nº 235",
    cep: "13620-100",
  },
  {
    type: "admin",
    username: "admin",
    password: "admin",
    fullname: "Laura Ferré Scotelari",
    email: "laura.scotelari@usp.br",
    phone: "(17) 99192-9256",
  },
];

// ---------------------------------------------------------------------

const saveProduct = async (product) => {
  const formData = new FormData();

  formData.append("image", fs.createReadStream(product.image));
  formData.append("name", product.name);
  formData.append("slug", uid(20));
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
      "http://127.0.0.1:3001/products/",
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

const saveUser = async (user) => {
  user.slug = uid(22);

  try {
    const response = await axios.post("http://127.0.0.1:3001/users/", user);
    console.log("User saved successfully!");
    console.log("User ID:", response.data);
  } catch (error) {
    console.error("Error saving the user:", error.message);
  }
};

const loadUsers = async () => {
  for (const user of userList) {
    await saveUser(user);
  }
};

loadProducts();
loadUsers();
