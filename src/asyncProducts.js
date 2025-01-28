const products = [
  {
    id: '10',
    name: 'Ramo de novia colorido',
    price: 200,
    category: 'auriculares',
    img: 'https://florerialasdalias.com.ar/wp-content/uploads/2021/01/IMG_20210105_174329_310.jpg',
    stock: 12,
    descrip: 'Este ramo combina con colores calidos y estaciones de otoño',
  },
  {
    id: '11',
    name: 'Corona de novia rojo y blanco',
    price: 300,
    category: 'auriculares',
    img: 'https://cdn0.bodas.net/article-real-wedding/853/3_2/960/jpg/1970181.jpeg',
    stock: 8,
    descrip: 'corona de novia con rosas rojas y flores blancas para un estilo mas clasico',
  },
  {
    id: '12',
    name: 'Ramo rosa y blanco',
    price: 180,
    category: 'parlantes',
    img: 'https://antonelliflores.com.ar/images/productos/1662489805297563505_1696223264095352_5561355298579313656_n.jpg',
    stock: 20,
    descrip: 'Ramo de rosas y flores blancas ideal para un estilo mas femenino',
  },
  {
    id: '13',
    name: 'Flor de solapa rosa blanca',
    price: 40,
    category: 'parlantes',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WlMUCgY-2hoW3ft_VeiM2dwg-sQyvwTrqRHfE8NGL50-JQJnUXxCbVwPCq7imsJDdnU&usqp=CAU',
    stock: 12,
    descrip: 'Flor de solapa para hombre con rosa blanca que combinara con cualquier traje',
  },
  {
    id: '14',
    name: 'Flor de solapa primaveral',
    price: 30000,
    category: 'notebooks',
    img: 'https://cdn0.matrimonios.cl/article-vendor/3946/3_2/1280/jpg/colorful-boho-chic-boutonniere-lucas-rossi_8_123946.webp',
    stock: 18,
    descrip: 'Esta flor de solapa es ideal para un estilo mas bohemio y relajado',
  },
  {
    id: '8',
    name: 'Corona de grandes rosas blancas',
    price: 300,
    category: 'notebooks',
    img: 'https://dcdn.mitiendanube.com/stores/822/675/products/cortada1-4485a8d2e6c7dc525a15566623277394-480-0.jpg',
    stock: 5,
    descrip: 'Corona de novia con grandes rosas blancas para un estilo vivo y alegre',
  },
  {
    id: '99',
    name: 'otro producto distinto',
    price: 35000,
    category: 'notebooks',
    img: 'https://antonelliflores.com.ar/images/productos/1662489805297563505_1696223264095352_5561355298579313656_n.jpg',
    stock: 15,
    descrip: 'otra descripcion',
  },
  {
    id: '111',
    name: 'otro producto distinto',
    price: 35000,
    category: 'notebooks',
    img: 'https://antonelliflores.com.ar/images/productos/1662489805297563505_1696223264095352_5561355298579313656_n.jpg',
    stock: 15,
    descrip: 'otra descripcion',
  },
  {
    id: '222',
    name: 'otro producto distinto',
    price: 35000,
    category: 'notebooks',
    img: 'https://antonelliflores.com.ar/images/productos/1662489805297563505_1696223264095352_5561355298579313656_n.jpg',
    stock: 15,
    descrip: 'otra descripcion',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
