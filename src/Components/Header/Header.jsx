import React from 'react';
import { getProducts } from '../../Services';

export default function Header() {

  let handleOnClick = () => {
      getProducts.GettingAllProducts().then(res => {
        console.log(res.data);
      })
  }

  return <div className='header' id='header'>
    <a href='#' className='logo' ><i class="fas fa-tools"></i> Honda<span>Tuan</span></a>

    <nav className='navbar'>
      <a href='#home' >home</a>
      <a href='#about' >about</a>
      <a href='#shop' >shop</a>
      <a href='#packages' >packages</a>
      <a href='#reviews' >reviews</a>
      <a href='#blogs' >blogs</a>
    </nav>


    <div className='icons' >
      <div  onClick={handleOnClick} id='menu-btn' className='fas fa-bars' ></div>
      <div id='info-btn' className='fas fa-info-circle' ></div>
      <div id='search-btn' className='fas fa-search' ></div>
      <div id='login-btn' className='fas fa-user' ></div>
    </div>
  </div>;
}
