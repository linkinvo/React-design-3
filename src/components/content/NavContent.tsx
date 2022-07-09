import React from 'react';
import './NavContent.modal.css'
const NavContent = () => {
    return (
        <div>
            <div className='aa'></div>
            <nav className='navContent'>
                    <a className='navContentA' href='#'>Холодные закуски</a>
                    <a className='navContentA' href='#'>Горячие закуски</a>
                    <a className='navContentA' href='#'>Мясные блюда</a>
                    <a className='navContentA' href='#'>Супы</a>
                    <a className='navContentA' href='#'>Рыбные блюда</a>
                    <a className='navContentA' href='#'>Гриль меню</a>
                    <a className='navContentA' href='#'>Фирменые блюда</a>
                    <a className='navContentA' href='#'>Напитки</a>
            </nav>
        </div>
    );
};

export default NavContent;