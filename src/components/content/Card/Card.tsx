import React from 'react';
import { Product } from '../Content';
import './Card.modal.css'

interface ProductP {
    id?: number;
    name?: string;
    kg?: number;
    description?: string;
    price?: number;
    img?: string;
    product: Product

}
const Card: React.FC<ProductP> = ( {product} ) => {

    return (
        <>
            {Object.values({ product }).map((item) => {
                return (

                    <div key={item.id} className='cardBody1'>

                        <img className='imgCard' src={item.img} alt="k" />
                        <h5 className='titleCard'>{item.name}</h5>
                        <span className='kgCard'>Вес: {item.kg} г</span>
                        <p className='descriptionCard'>{item.description}</p>
                        <div className='priceInfo'>
                            <p className='price'>{item.price} ₽</p>
                            <button className='btnCard'>В корзину<span className='iconBasket'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.42226 19.8203C7.84426 19.8203 8.18726 20.1633 8.18726 20.5853C8.18726 21.0073 7.84426 21.3493 7.42226 21.3493C7.00026 21.3493 6.65826 21.0073 6.65826 20.5853C6.65826 20.1633 7.00026 19.8203 7.42226 19.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.1254 10.795H16.8984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span></button>
                        </div>
                    </div>

                )
            }
            )
            }

        </>
    );
};

export default Card;




//  <div key={item.id} className='cardBody1'>

// <img className='imgCard' src="img/myy 1.png" alt="k" />
// <h5 className='titleCard'>{item.name(console.log(item, 'item'))}</h5>
// <span className='kgCard'>Вес: 225 г</span>
// <p className='descriptionCard'>Фаршированный гречневой кашей,
//     курагой, апельсином и зеленым яблоком</p>
// <div className='priceInfo'>
//     <p className='price'>620 ₽</p>
//     <button className='btnCard'>В корзину<span className='iconBasket'>
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" clipRule="evenodd" d="M7.42226 19.8203C7.84426 19.8203 8.18726 20.1633 8.18726 20.5853C8.18726 21.0073 7.84426 21.3493 7.42226 21.3493C7.00026 21.3493 6.65826 21.0073 6.65826 20.5853C6.65826 20.1633 7.00026 19.8203 7.42226 19.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             <path fillRule="evenodd" clipRule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M14.1254 10.795H16.8984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     </span></button>
// </div>
// </div> 