import React, { useState } from 'react';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Image1 from './images/Screenshot (121).png';
import Image2 from './images/ok3.jpg';
import Image3 from "./images/Screenshot (132).png";
import Image4 from "./images/Screenshot (135).png";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

function Navbar() {
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

          <Link to="/Store" className='navbar_info2'>Store</Link>
        
        <div className='navbar_info3'>
          <p>Channels</p>
        </div>
        <div className='navbar_info4'>
          <p>Categories</p>
        </div>
        <div className='navbar_info5'>
          <p>My stuff</p>
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
      <div className='front_page'>
        <img src={Image1} alt="" className='img1'></img>
        {/* <img src={Image2} alt="" className='img2'></img>
        <img src={Image4} alt="" className='img4'></img>
        <img src={Image5} alt="" className='img5'></img>

        <img src={Image6} alt="" className='img6'></img>

        <img src={Image7} alt="" className='img7'></img>
        <img src={Image9} alt="" className='img8'></img>

        <img src={Image8} alt="" className='img9'></img> */}

        <div className='welcome'>
          <p className='topic'>Welcome to Prime Video</p>
          <p className='sub_topic'>Join Prime to watch the latest movies,TV shows and award-winning Amazon Originals</p>
          <button className='button1'>Start your 30day trial</button>
          <p className='sub2'>With select credit or debit cards</p>
        </div>
        <div className='ig1'>
          <div className='ig'>
            <img src={Image2} alt="" className='img2'></img>
          </div>
          <div className='content'>
            <p className='content1'>Movies rentals on Prime Video</p>
            <p className='sub_content2'>Early Access to new movies,before digital subscription</p>
            <button className='button1' > Rent Now</button>
          </div>
        </div>
      </div>
      <div className='your_chanel'>
        <div className='fav'>
          <h1 className='fav1'>Your favorite channels all in one place</h1  >
          <h1 className='fav2'>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</h1>

        </div>
        <div className='channel'>
          <button className='button2'>LIONSGATE
          </button>
          <button className='button2'>
            <p className='b2'>discovery+</p>
          </button>
          <button className='button2'>
            <p className='b3'>erosnow</p>
          </button>
          <button className='button2'>
            <p className='b4'>ho!cho!</p>
          </button>
          <button className='button2'>
            <p className='b5'>DOCUBAY</p>
          </button>
          <button className='button2'>
            <p className='b6'>SHORTSTV</p>
          </button>
          <button className='button2'>
            <p className='b7'>MUBI:::</p>
          </button>
          <button className='button2'>
            <p className='b8'>manoramamax</p>
          </button>
          <button className='button2'>
            <p className='b9'>hayu!!</p>
          </button>
        </div>
      </div>
      <div className='remote'>

        <img src={Image3} alt="" className='img3'></img>
        <div className='tv1'>
          <h1 className='tv'>Even better with Fire TV Stick</h1>
          <p className='tv2'>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.    </p>
          <button className='button3'>Get started</button>

        </div>

      </div>
      <div className='remote2'>
        <div className='tv4'>
          <h1 className='tv'>Family Friendly</h1>
          <p className='tv2'>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
          <button className='button3'>Get started</button>
        </div>

        <img src={Image4} alt="" className='img4'></img>

      </div>
      <div className='footer'>
        <div className='logo1'>
          <h1>prime video</h1>
        </div>
        <div className='footer1'>
          <div className='footer_sub'>
            <p >Terms and Privacy Notice Send us feedbackHelp</p>
          </div>
          <div>
            <p className='footer_sub2'>© 1996-2022, Amazon.com, Inc. or its affiliates</p></div>
        </div>
      </div>


    </div>
  )
}

export default Navbar