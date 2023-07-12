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
    image: "https://i.pinimg.com/564x/a1/11/c1/a111c1304a553d4e7999484163bd2fd6.jpg",
    name: "Print Ovelha Negra",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/ff/07/a4/ff07a43efb8159604992ec30f498b1f6.jpg",
    name: "Print Besouro",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/ad/8b/79/ad8b799f0da10364b991abdadc656c02.jpg",
    name: "Print Fundo do Mar",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/8b/b7/ce/8bb7ce08c609021b259de30cdf0de48c.jpg",
    name: "Print Espelho",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/eb/67/5a/eb675acf757a957a6e29e671501d4b3f.jpg",
    name: "Print Abdução",
    price: 8.5,
    description: "Impressão em papel couchê fosco com gramatura 300.",
    type: "print",
    sizes: printsSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/7d/c3/40/7dc3407e655269555e031361e47f0afc.jpg",
    name: "Adesivo Arco-íris",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 6,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/80/60/9c/80609c3bda1262ff94467955daf1082a.jpg",
    name: "Adesivo Rã",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 5,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/38/4a/ae/384aaea1e8544652b5091494caaf30e6.jpg",
    name: "Adesivo Vaso Azul",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 4,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/73/57/56/73575614bac9a622adedddf5468086c0.jpg",
    name: "Adesivo Coração",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 2,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/e5/73/70/e57370404c959aacc64721c7b7148456.jpg",
    name: "Adesivo Besouro Preto",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 4,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/c6/c2/31/c6c231780a0024329e119731034e121d.jpg",
    name: "Adesivo Besouro",
    price: 2.9,
    description: "Adesivo de vinil à prova-d'água.",
    type: "sticker",
    sizes: stickerSizes,
    stock: 5,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/9e/be/76/9ebe7667501318cc3666b5c630082571.jpg",
    name: "Camiseta Medusa",
    price: 68.0,
    description: "Camiseta 100% algodão estampada usando silk screen.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 15,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/ac/d8/2e/acd82ef9bb837db1307fa0f1e85cb3af.jpg",
    name: "Camiseta Crowd",
    price: 68.0,
    description: "Camiseta 100% algodão estampada em silk screen.",
    type: "shirt",
    sizes: shirtSizes,
    stock: 5,
    sales: 0,
  },
  {
    image: "https://i.pinimg.com/564x/f1/88/d0/f188d09219e32d309388ecb73a566860.jpg",
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

  formData.append("image", product.image);
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
