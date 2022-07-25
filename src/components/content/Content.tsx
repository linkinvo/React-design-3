import React, { ReactNode } from 'react'
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

export interface Product {
    // map?: any;
    map?(arg0: () => JSX.Element): ReactNode;
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
                {product !== undefined ? product.map((i) => {
                    return (

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
                {product !== undefined ? product.map((i) => {
                    return (

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
                {product !== undefined ? product.map((i) => {
                    return (

                        <Card key={i.id} product={i} />

                    )

                })
                    : <h1>Oh my goodness..</h1>
                }
            </div>
            <OurCafe />

            <div>
                <img className='imgGpsGroup' src="img/GpsCard.png" alt="GpsCard" />
                <svg className='svgGpsGroup' width="98" height="112" viewBox="0 0 98 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="49" cy="49" r="49" fill="url(#paint0_linear_19_362)" />
                    <path d="M47.8006 32.8V44H45.2406V37.488L42.3446 42.24H42.0566L39.1606 37.488V44H36.6006V32.8H39.1606L42.2006 37.776L45.2406 32.8H47.8006ZM49.7256 44V32.8H52.2856V36.32H53.9656C55.0643 36.32 55.9923 36.6933 56.7496 37.44C57.507 38.1867 57.8856 39.0933 57.8856 40.16C57.8856 41.2267 57.507 42.1333 56.7496 42.88C55.9923 43.6267 55.0643 44 53.9656 44H49.7256ZM58.8456 44V32.8H61.4056V44H58.8456ZM52.2856 41.6H53.9656C54.3603 41.6 54.6856 41.4613 54.9416 41.184C55.1976 40.9067 55.3256 40.5653 55.3256 40.16C55.3256 39.7547 55.1976 39.4133 54.9416 39.136C54.6856 38.8587 54.3603 38.72 53.9656 38.72H52.2856V41.6ZM29.1278 58.208C30.1411 58.7733 30.6478 59.648 30.6478 60.832C30.6478 61.856 30.2585 62.6773 29.4798 63.296C28.7011 63.9147 27.7091 64.224 26.5038 64.224C24.4025 64.224 22.9838 63.3387 22.2478 61.568L24.4558 60.304C24.7971 61.3173 25.4798 61.824 26.5038 61.824C27.5598 61.824 28.0878 61.4293 28.0878 60.64C28.0878 59.8507 27.5545 59.456 26.4878 59.456H25.0638V57.184H26.1678C27.1811 57.184 27.6878 56.816 27.6878 56.08C27.6878 55.344 27.2558 54.976 26.3918 54.976C25.5598 54.976 24.9678 55.4027 24.6158 56.256L22.4238 54.992C23.2345 53.3813 24.5571 52.576 26.3918 52.576C27.5225 52.576 28.4451 52.88 29.1598 53.488C29.8851 54.0853 30.2478 54.8853 30.2478 55.888C30.2478 56.8587 29.8745 57.632 29.1278 58.208ZM40.7209 61.536H41.9209V66.144H39.3609V64H33.7609V66.144H31.2009V61.536H32.3369C32.9236 60.6933 33.2169 59.456 33.2169 57.824V52.8H40.7209V61.536ZM35.0569 61.536H38.1609V55.2H35.7769V57.856C35.7769 59.4453 35.5369 60.672 35.0569 61.536ZM45.8403 61.536H50.3203V64H43.2803V52.8H50.2403V55.264H45.8403V57.12H49.8403V59.552H45.8403V61.536ZM57.0306 64.224C55.3559 64.224 53.9639 63.6693 52.8546 62.56C51.7559 61.44 51.2066 60.0533 51.2066 58.4C51.2066 56.7467 51.7559 55.3653 52.8546 54.256C53.9639 53.136 55.3559 52.576 57.0306 52.576C58.0332 52.576 58.9612 52.8107 59.8146 53.28C60.6679 53.7387 61.3399 54.368 61.8306 55.168L59.6226 56.448C59.3772 56.0107 59.0252 55.6747 58.5666 55.44C58.1079 55.1947 57.5959 55.072 57.0306 55.072C56.0386 55.072 55.2439 55.376 54.6466 55.984C54.0599 56.592 53.7666 57.3973 53.7666 58.4C53.7666 59.4027 54.0599 60.208 54.6466 60.816C55.2439 61.424 56.0386 61.728 57.0306 61.728C57.5959 61.728 58.1079 61.6053 58.5666 61.36C59.0359 61.1147 59.3879 60.7787 59.6226 60.352L61.8306 61.632C61.3506 62.432 60.6839 63.0667 59.8306 63.536C58.9772 63.9947 58.0439 64.224 57.0306 64.224ZM67.2703 56.32C68.369 56.32 69.297 56.6933 70.0543 57.44C70.8116 58.1867 71.1903 59.0933 71.1903 60.16C71.1903 61.2267 70.8116 62.1333 70.0543 62.88C69.297 63.6267 68.369 64 67.2703 64H63.0303V52.8H65.5903V56.32H67.2703ZM67.2703 61.6C67.665 61.6 67.9903 61.4613 68.2463 61.184C68.5023 60.9067 68.6303 60.5653 68.6303 60.16C68.6303 59.7547 68.5023 59.4133 68.2463 59.136C67.9903 58.8587 67.665 58.72 67.2703 58.72H65.5903V61.6H67.2703ZM72.7878 60L72.3078 56V52.8H75.1878V56L74.7078 60H72.7878ZM74.8198 63.776C74.5211 64.0747 74.1638 64.224 73.7478 64.224C73.3318 64.224 72.9745 64.0747 72.6758 63.776C72.3771 63.4773 72.2278 63.12 72.2278 62.704C72.2278 62.288 72.3771 61.9307 72.6758 61.632C72.9745 61.3333 73.3318 61.184 73.7478 61.184C74.1638 61.184 74.5211 61.3333 74.8198 61.632C75.1185 61.9307 75.2678 62.288 75.2678 62.704C75.2678 63.12 75.1185 63.4773 74.8198 63.776Z" fill="white" />
                    <path d="M48.5 112L36.8087 96.25L60.1913 96.25L48.5 112Z" fill="#6D9B74" />
                    <defs>
                        <linearGradient id="paint0_linear_19_362" x1="4.74193" y1="5.56818" x2="109.682" y2="54.3384" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#618967" />
                            <stop offset="1" stopColor="#72A479" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="contactGpsGroup">
                    <h3 className='contactGroup_h3'>КОНТАКТЫ</h3>
                    <svg className='lineContactGroup' width="527" height="1" viewBox="0 0 527 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="527" y2="0.5" stroke="url(#paint0_linear_19_325)" />
                        <defs>
                            <linearGradient id="paint0_linear_19_325" x1="0" y1="1" x2="531.575" y2="1" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="0.479167" stopColor="white" stopOpacity="0.15" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='block_one_contactGroup'>

                        <svg className='contactGroup_svg_location' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.23914 10.3912C4.25354 6.15065 7.7029 2.72465 11.9435 2.73906C16.1841 2.75347 19.6101 6.20282 19.5957 10.4434V10.5304C19.5435 13.2869 18.0044 15.8347 16.1174 17.826C15.0382 18.9466 13.8331 19.9387 12.5261 20.7825C12.1766 21.0848 11.6582 21.0848 11.3087 20.7825C9.3602 19.5143 7.65007 17.9131 6.25653 16.0521C5.01449 14.4293 4.3093 12.4597 4.23914 10.4173L4.23914 10.3912Z" stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="11.9174" cy="10.539" r="2.46087" stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span className='contactGroup_span_address'>Наш адрес:</span>

                        <p className='contactGroup_p'>МО, городской округ Красногорск, село Ильинкое,
                            Экспериментальная улица, 10</p>

                        <div>
                            <svg className='contactGroup_svg_message' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2677 9.06104L13.0023 12.4953C12.1951 13.1282 11.0635 13.1282 10.2563 12.4953L5.95422 9.06104" stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z" stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className='contactGroup_span_email'>Наша почта:</span>
                        </div>
                        <p className='contactGroup_p_email'>auto.wash@gmail.com</p>
                    </div>

                    <svg className='line_52' width="527" height="1" viewBox="0 0 527 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="527" y2="0.5" stroke="url(#paint0_linear_19_325)" />
                        <defs>
                            <linearGradient id="paint0_linear_19_325" x1="0" y1="1" x2="531.575" y2="1" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="0.479167" stopColor="white" stopOpacity="0.15" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='item_contactGroup_Connection'>

                        <button className='contactGroup_button'>ЗАБРОНИРОВАТЬ СТОЛ</button>
                        <p className='contactGroup_number'>+7(917)510-57-59 <span>Звоните или оставляйте заявку</span></p>
                    </div>

                    <div className='socialNetwork'>
                        <p className='socialNetwork_item'>Мы в соц сетях:</p>
                        {/* <link rel="stylesheet" href="/" > */}
                        <img className='socialNetwork_icon socialNetwork_item_icon' src="img/facebook.png" alt="facebook" />
                        {/* </link> */}
                        <img className='socialNetwork_item_icon' src="img/vkontakte-logo.png" alt="vkontakte" />
                        <img className='socialNetwork_item_icon' src="img/video-play-button.png" alt="youtube" />
                        <img className='socialNetwork_item_icon' src="img/instagram.png" alt="instagram" />
                    </div>
                </div>
            </div>
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