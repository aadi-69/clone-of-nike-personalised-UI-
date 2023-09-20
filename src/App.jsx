import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Rout from './Rout';
import Footer from './Footer';
import Productdetail from './productdetail';

const App = () => {
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Productdetail);
  const [searchTerm, setSearchTerm] = useState('');

  const searchbtn = (searchTerm) => {
    const filteredProducts = Productdetail.filter((product) => {
      return product.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setProduct(filteredProducts);
  };

  const view = (product) => {
    setDetail([product]);
    setClose(true);
  };

  const addtocart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      alert('This Product is already added to cart');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Product is added to cart');
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={() => searchbtn(searchTerm)}
        />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
