import React, { useState } from 'react';
import "./Style/Invorail.css";
import sidebarimg from "../Images/logo.png";
import { IoMdHome } from "react-icons/io";
import { TbFileInvoice } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import SupportIcon from '@mui/icons-material/Support';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('HOME');
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isSettingOpen, setIsSettingOPen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isBalanceOpen, setIsBalanceOpen] = useState(false)


  const handleClick = (item) => {
    setActiveItem(item);
    if (item === 'INVOICE') {
      setIsInvoiceOpen(!isInvoiceOpen);
    } else {
      setIsInvoiceOpen(false);
    }
  };



  const handleClickSetting = (item) => {
    setActiveItem(item);
    if (item === 'SETTING') {
      setIsSettingOPen(!isSettingOpen);
    } else {
      setIsSettingOPen(false);
    }
  };

  const handleClickProduct = (item) => {
    setActiveItem(item);
    if (item === 'PRODUCT') {
      setIsProductOpen(!isProductOpen);
    } else {
      setIsProductOpen(false);
    }
  };


  const handleClickBalance = (item) => {
    setActiveItem(item);
    if (item === 'BALANCE') {
      setIsBalanceOpen(!isBalanceOpen);
    } else {
      setIsBalanceOpen(false);
    }
  };






  return (
    <div className="Sidebar" >
      <div className='navigation'>
        <ul>
          <li><img src={sidebarimg} alt="logo" /></li>


          <Link to={"/"} className='linkuderline'>
            <li className={activeItem === 'HOME' ? 'active' : ''} onClick={() => handleClick('HOME')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: '24px' }}><IoMdHome className='imagesidebar' /></span>
                <span className='mt-2'>HOME</span>
              </div>
            </li>
          </Link>    

 


          <Link to={"/company"}>      
            <li className={activeItem === 'COMPANY' ? 'active' : ''} onClick={() => handleClick('COMPANY')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: '24px' }}><TbFileInvoice className='imagesidebar' /></span>
                <span className='mt-2'>COMPANY</span>
              </div>
            </li>
          </Link>

          


          <Link to={"/team"}>
            <li className={activeItem === 'TEAM' ? 'active' : ''} onClick={() => handleClick('TEAM')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: '24px' }}><IoIosContacts className='imagesidebar' /></span>
                <span className='mt-2'>TEAM</span>
              </div>
            </li> 
          </Link>

          <Link to={"/support"}>
            <li className={activeItem === 'SUPPORT' ? 'active' : ''} onClick={() => handleClick('SUPPORT')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: '24px' }}><SupportIcon className='imagesidebar' /></span>
                <span className='mt-2'>SUPPORT</span>
              </div>
            </li> 
          </Link>


          <Link to={"/plan"}>
            <li className={activeItem === 'PLAN' ? 'active' : ''} onClick={() => handleClick('PLAN')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: '24px' }}><NextPlanIcon className='imagesidebar' /></span>
                <span className='mt-2'>PLAN</span>
              </div>
            </li> 
          </Link>


          <Link to={"/setting"}>
            <li className={activeItem === 'SETTING' ? 'active' : ''} onClick={() => handleClick('SETTING')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: '24px' }}><IoSettingsSharp className='imagesidebar' /></span>
                <span className='mt-2'>SETTING</span>
              </div>
            </li> 
          </Link>

          
          <div style={{ paddingTop: "100px" }}>
            <h5 style={{ color: "white" }}>Get Premium Features</h5>
            <h6 style={{ color: "white", marginLeft: "25px", marginTop: "5px" }}>Get Premium Features</h6>
            <button style={{ width: "150px", height: "31px", border: "none", marginTop: "10px", marginLeft: "20px", borderRadius: "9px", background: "#FFF", color:"#46CAE3", fontSize: "16px", fontWeight: "bold" }}>Get Premium Now</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
