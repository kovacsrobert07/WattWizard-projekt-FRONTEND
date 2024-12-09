import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import ASUS_Laptop from "/src/assetek/asus_laptop_kep/laptop.jpg"; // Példa képhivatkozás

const Home = () => {
  const products = [
    { 
      id: 1, 
      price: '3.599 lei', 
      image: 'https://s13emagst.akamaized.net/products/64569/64568847/images/res_8c2e9cd3c26dc1523c71622313846613.jpg?width=720&height=720&hash=8F3A8113495C4418ABC7E8FBE278D6FC',
      description: 'ASUS TUF A17 FA706NF' 
    },
    { id: 2, price: '72 lei', image: 'https://s13emagst.akamaized.net/products/54767/54766535/images/res_95ad37a5e8a185f7b3aa9876b12023e7.jpg?width=300&height=300&hash=B5B8BF41AC65F21EC3B820D3B6F88A65', description: 'Elektromos melegitő' },
    { id: 3, price: '$1199.99', image: 'https://s13emagst.akamaized.net/products/64817/64816439/images/res_fdecd9733172144ab6b418e28f699e1c.jpg?width=720&height=720&hash=91C5F7015A569F5237D415DE60CD1451',description:'Samsung Galaxy S24,Dual SIM,8GB RAM,256GB,Onyx Black' },
    { id: 4, price: '$1299.99', image: ASUS_Laptop },
    { id: 5, price: '$1399.99', image: ASUS_Laptop },
    { id: 6, price: '$1499.99', image: ASUS_Laptop },
    { id: 7, price: '$1599.99', image: ASUS_Laptop },
    { id: 8, price: '$1699.99', image: ASUS_Laptop },
    { id: 9, price: '$1799.99', image: ASUS_Laptop },
    { id: 10, price: '$1899.99', image: ASUS_Laptop },
    { id: 11, price: '$1999.99', image: ASUS_Laptop },
    { id: 12, price: '$2099.99', image: ASUS_Laptop },
    { id: 13, price: '$2199.99', image: ASUS_Laptop },
    { id: 14, price: '$2299.99', image: ASUS_Laptop },
    { id: 15, price: '$2399.99', image: ASUS_Laptop },
    { id: 16, price: '$2499.99', image: ASUS_Laptop },
  ];

  // Kosárba helyezés kezelője
  const handleAddToCart = (productId) => {
    console.log(`Product with id ${productId} added to cart!`);
  };

  return (
    <div>
      <div className="Pult">
        <text>Menü</text>
        <div className="Kicsipult">
          <Link>
            <span>Laptopok</span>
          </Link>
          <Link>
            <span>Gépek</span>
          </Link>
          <Link>
            <span>Monitorok</span>
          </Link>
          <Link>
            <span>Egyebek</span>
          </Link>
        </div>
      </div>
      <div className="Termekpaletta">
        {products.map((product) => (
          <div key={product.id} className="Kartya">
            <img src={product.image} alt={product.description || 'Product Image'} />
            {product.description && <p className="description">{product.description}</p>}
            <p>{product.price}</p>
            <button className="Kosarba_tesz" onClick={() => handleAddToCart(product.id)}>Kosárba tesz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
