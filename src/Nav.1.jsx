import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import Modal from 'react-modal';
import Productdetail from './productdetail';

export const Nav = ({ searchTerm, setSearchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const handleSearch = () => {
    const filteredProducts = Productdetail.filter((productItem) => {
      return productItem.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(filteredProducts);
    setSelectedProduct(null);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setSelectedProduct(null);
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="free">
        <span className="nike-text">Yesterday &nbsp;&nbsp; you &nbsp;&nbsp; said &nbsp;&nbsp; tomorrow. &nbsp;&nbsp; JUST  DO  IT.</span>
      </div>
      <div className='main_header'>
        <div className='container'>
          <div className='logo'>
            <img src='./img/logo.jpg' alt='logo'></img>
          </div>
          <div className="video-container">
            <iframe
              width="900"
              height="450"
              src="https://www.youtube.com/embed/KriBQVhsgZk?autoplay=1&loop=1"
              title="Embedded Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className='icon'>
            {isAuthenticated && (
              <div className='account'>
                <div className='user_icon'>
                  <AiOutlineUser />
                </div>
                <p>Hello, {user.name}</p>
              </div>
            )}
            <div className='second_icon'>
              <Link to="/" className='link'><AiOutlineHeart /></Link>
              <Link to="/cart" className='link'><BsBagCheck /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <Link to='/' className='link'>Home</Link>
              </li>

              <li>
                <Link to='/product' className='link'>Product</Link>
              </li>
              <li>
                <Link to='/about' className='link'>About</Link>
              </li>
              <li>
                <Link to='/contact' className='link'>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            
              <button onClick={handleShowModal} className='link'>
                <IoIosSearch /> 
              </button>
            
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Search Modal"
      >
        <div className="container">
          <div className="search-page">
            <div className="search-content">
              <input
                className="search_box"
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
              <button className="button" onClick={handleSearch}>
                Search
              </button>
              <button className="clear" onClick={clearSearch}>
                Clear
              </button>

              <h2>Search Results</h2>
              <ul>
                {searchResults.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => showProductDetails(item)}
                    className="search-result-item"
                  >
                    <div className="product-item">
                      <img
                        src={item.Img}
                        alt={item.Title}
                        className="product-image"
                        style={{ width: '100px', height: '100px' }} />
                      <div className="product-details">
                        <h3>{item.Title}</h3>
                        <p>Price: ${item.Price}</p>
                      </div>
                    </div>
                  </li>
                ))}
                {searchResults.length === 0 && <p>No results found.</p>}
              </ul>
            </div>
          </div>
        </div>

        {selectedProduct && (
          <Productdetail product={selectedProduct} onClose={closeProductDetails} />
        )}
      </Modal>
    </>
  );
};
