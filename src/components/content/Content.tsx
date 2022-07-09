import React from 'react'
import NavContent from './NavContent'
import './Content.modal.css'
import Card from './Card/Card'
import OurCafe from './ourCafe/OurCafe';


export const product = [
    {
        id: 1, name: 'Ягнёнок', kg: 230, description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620, img: 'img/myy 1.png'
    }, {
        id: 2, name: 'Индейка', kg: 225, description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 450, img: 'img/turkey.png'
    }, {
        id: 3, name: 'Гусь', kg: 225, description: 'Фаршированный яблоком',
        price: 7900, img: 'img/Gys.png'
    }, {
        id: 4, name: 'Утка', kg: 225, description: 'Фаршированная рисом, курагой и айвой',
        price: 3230, img: 'img/duck.png'
    }, {
        id: 5, name: 'Дич', kg: 225, description: 'Супер вкусная дич ',
        price: 777, img: 'img/myy 1.png'
    },
];

export interface Product  {
    // map?: any;
    map?(arg0: () => JSX.Element): React.ReactNode;
    id?: number;
    name?: string;
    kg?: number;
    description?: string;
    price?: number;
    img?: string;

    // product?: any
}
// @ts-ignore
const Content: React.FC<Product> = () => {
    console.log(product, 'kl')


    return (
        <div>
            <img src='img/buner1.png' alt='buner' />
            <NavContent />
            <h1 className='h1Card'>ХОЛОДНЫЕ ЗАКУСКИ</h1>
            <br />
            <div className='CardGroup'>
                {product !== undefined ? product.map((i)=> {
                    return(

                        <Card key={i.id} product={i} />

                    )

                })
                    : <h1>Oh my goodness..</h1>
                }
            </div>
<div className='lineBord'></div>

<h1 className='h1Card'>ГОРЯЧИЕ ЗАКУСКИ</h1>
<br />
<div className='CardGroup'>
                {product !== undefined ? product.map((i)=> {
                    return(

                        <Card key={i.id} product={i} />

                    )

                })
                    : <h1>Oh my goodness..</h1>
                }
            </div>

            <div className='lineBord'></div>
            <h1 className='h1Card'>Мясные блюда</h1>
            <br />
            <br />
<div className='CardGroup'>
                {product !== undefined ? product.map((i)=> {
                    return(

                        <Card key={i.id} product={i} />

                    )

                })
                    : <h1>Oh my goodness..</h1>
                }
            </div>
            <OurCafe/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Content