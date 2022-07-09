import React from 'react'
import NavContent from './NavContent'
import './Content.modal.css'
import Card from './Card/Card'
export default function Content() {
    const product = [
        {id: 1, name: 'Ягнёнок' , kg: 225, desciption: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: 620, img: 'img/myy 1.png'}
    ];
    return (
        <div>
            <img src='img/buner1.png' alt='buner' />
            <NavContent/>
            <h1 className='h1Card'>ХОЛОДНЫЕ ЗАКУСКИ</h1>
            <br />
            <div className='CardGroup'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
