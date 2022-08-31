import React, { useState } from 'react';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "./Navbar.css"

function Header() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }

  const [lang, setLang] = useState(false);
  const toggleLang = () => {
    setLang(!lang)
  }

  const [icon, setIcon] = useState(false);
  const toggleIcon = () => {
    setIcon(!icon)
  }
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu)
  }


  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <h1>prime video</h1>
        </div>
        <div className='navbar_info'>
        <Link to="/" className='home'>Home</Link>
          
        </div>
        <div >
          <Link to="/Store" className='navbar_info2'>Store</Link>
        </div>
        <div className='navbar_info3'>
          <p>Channels</p>
        </div>
        <div className='navbar_info4'>
          <p>Categories</p>
        </div>
        <div className='navbar_info5'>
        <Link to="/Login" className='navbar_info2'>Store</Link>
          
        </div>
        <div className='navbar_info6'>
          <button className='button'>Try for free</button>
        </div>  

{/* <Link to={"/Store"}>Store</Link> */}



        <div onClick={toggleIcon} className='icon'>
          <SearchIcon />
        </div>
        {icon && (
          <div className='modal'>
            <div onClick={toggleIcon} className='overlay'></div>
            <div className='modal-content2'>
              <SearchIcon className='search' />
              <input type="text" placeholder="search" className='input'></input>
              {/* <CloseIcon className='close-modal2' onClick={toggleIcon}></CloseIcon> */}
              {/* <button className='close-modal' onClick={toggleModal}>Close</button> */}
            </div>
          </div>
        )}





        <div onClick={toggleLang} className='language'>
          <LanguageIcon />
          <ArrowDropDownIcon />
        </div>
        {lang && (
          <div className='modal'>
            <div onClick={toggleLang} className='overlay'></div>
            <div className='modal-content'>
              <p>English</p>
              <p>Tamil</p>
              <p>Hindi</p>
              <CloseIcon className='close-modal' onClick={toggleLang}></CloseIcon>
              {/* <button className='close-modal' onClick={toggleModal}>Close</button> */}
            </div>
          </div>
        )}


        <div className='english'>
          <h4>EN</h4>
        </div>



        <div onClick={toggleModal} className='avatar'>
          <AccountCircleIcon />
          <ArrowDropDownIcon />
        </div>
        {modal && (
          <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
              <p>Sign in</p>
              <p>Watch anywhere</p>
              <p>Help</p>
              <CloseIcon className='close-modal' onClick={toggleModal}></CloseIcon>
              {/* <button className='close-modal' onClick={toggleModal}>Close</button> */}
            </div>
          </div>
        )}




<div onClick={toggleMenu} className='menu'>
  <MenuIcon className='menu6'/>
</div>
{menu && (
          <div className='modal'>
            <div onClick={toggleMenu} className='overlay'></div>
            <div className='modal-content4'>
             <p>Home</p>
             <p>Store</p>
             <p>Channels</p>
             <p>Categories</p>
             <p>My stuff</p>

              <CloseIcon className='close-modal4' onClick={toggleMenu}></CloseIcon>
              {/* <button className='close-modal' onClick={toggleModal}>Close</button> */}
            </div>
          </div>
        )}




</div>
      </div>
      );}
export default Header;
