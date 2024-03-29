import React from 'react';
import ContactCallHeader from './ContactCallHeader';

import './Header.modal.css'

const Header = () => {
    return (
        <div className='header_content'>
            <span className='logo'>LOGOS</span>
            <input type="text" className='input_header' placeholder='Введите адрес доставки' />
            <svg className='location_header' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.23914 10.3913C4.25354 6.15071 7.7029 2.72471 11.9435 2.73912C16.1841 2.75353 19.6101 6.20288 19.5957 10.4435V10.5304C19.5435 13.2869 18.0044 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.3602 19.5143 7.65007 17.9131 6.25653 16.0522C5.01449 14.4294 4.3093 12.4597 4.23914 10.4174L4.23914 10.3913Z" stroke="#CFCFCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11.9174" cy="10.5391" r="2.46087" stroke="#CFCFCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className='search_header' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.0183 18.4851L21.5423 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <ContactCallHeader />
            <div>
                <button className='buttonBasket'>Корзина
                </button>
                <span className='btnLine'></span>
                <div className='btnEllipseWhite'><span>4</span></div>
            </div>
        </div>
    );
};

export default Header;