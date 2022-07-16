import React from 'react';
import './OurCafe.modal.css'

const OurCafe = () => {
    return (
        <div>
            <div className='MaskGroup'>
                <h1 className='h1_MaskGroup'>Наше Кафе</h1>
                <img className='img_MaskGroup' src="img/Mask Group.png" alt="Mask Group" />
                <p className='p_MaskGroup'>Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                <button className='bnt_MaskGroup'>Посмотреть Меню</button>
            </div>
            <div className='cards_MaskGroup'>
                <div className='cards_MaskGroup_items_one'>
                    <img className='svg_cards_item' src="img/onion.png" alt="onion" />
                    <p className='card_item_p card_items'>Свежайшие продукты</p>
                </div>
                <div className='cards_MaskGroup_items_two'>
                <svg className='svg_cards_item' width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.6953 24.7266H23.1389L35.7077 2.62665C36.0172 2.08283 36.0135 1.41495 35.699 0.873872C35.3845 0.332795 34.8055 0 34.1797 0H13.0859C12.3288 0 11.6563 0.48523 11.4178 1.20392L0.870938 32.9613C0.692868 33.4974 0.783048 34.086 1.11355 34.5443C1.44406 35.002 1.97415 35.2735 2.53903 35.2735H17.4562L7.95347 57.5524C7.61518 58.3457 7.90174 59.2667 8.6305 59.7277C9.35926 60.1887 10.3146 60.0527 10.8864 59.4077L39.0114 27.6499C40.013 26.5183 39.2082 24.7266 37.6953 24.7266ZM15.4388 48.9647L21.734 34.2055C22.2275 33.0483 21.3779 31.7578 20.1172 31.7578H4.97479L14.3544 3.51563H31.1575L18.5892 25.6151C17.9245 26.7838 18.7691 28.2422 20.1172 28.2422H33.7906L15.4388 48.9647Z" fill="#FCFCFC"/>
</svg>

                    <p className='card_item_p card_items'>Быстрая доставка</p>
                </div>
                <div className='cards_MaskGroup_items_three'>
                <svg className='svg_cards_item' width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6364 29.1137C16.6364 28.3474 16.0163 27.7273 15.25 27.7273C14.4837 27.7273 13.8636 28.3474 13.8636 29.1137C13.8636 32.7542 17.8792 37.7528 18.3368 38.3119C18.6117 38.645 19.0097 38.8183 19.4104 38.8183C19.719 38.8183 20.0305 38.7153 20.289 38.5041C20.8806 38.018 20.9659 37.1449 20.4812 36.5518C18.9948 34.7404 16.6364 31.1201 16.6364 29.1137Z" fill="white"/>
<path d="M45.75 27.7273C44.9837 27.7273 44.3636 28.3474 44.3636 29.1137C44.3636 31.1133 42.0051 34.7377 40.5186 36.5533C40.034 37.1449 40.1205 38.0182 40.7123 38.5041C40.9695 38.7153 41.2809 38.8183 41.5909 38.8183C41.9916 38.8183 42.3883 38.645 42.6632 38.3119C43.1208 37.7528 47.1364 32.7543 47.1364 29.1137C47.1364 28.3474 46.5163 27.7273 45.75 27.7273Z" fill="white"/>
<path d="M30.5001 27.7273C29.7337 27.7273 29.1136 28.3474 29.1136 29.1137V37.4319C29.1136 38.1982 29.7337 38.8183 30.5001 38.8183C31.2664 38.8183 31.8865 38.1982 31.8865 37.4319V29.1137C31.8863 28.3474 31.2662 27.7273 30.5001 27.7273Z" fill="white"/>
<path d="M45.75 5.5455C44.9099 5.5455 44.0319 5.65663 43.1202 5.82598C40.0668 2.26658 35.5467 0 30.5001 0C25.4534 0 20.9332 2.26658 17.8799 5.82585C16.9681 5.65663 16.0901 5.54537 15.2501 5.54537C6.84106 5.5455 0 12.3866 0 20.7955C0 26.5575 3.24929 31.7956 8.35068 34.3856L8.32365 55.3367C8.32235 56.849 8.90982 58.2706 9.97806 59.3401C11.0476 60.4111 12.4678 61 13.9801 61H47.0254C50.1448 61 52.6819 58.4628 52.6819 55.3435V34.3653C57.7644 31.7686 61.0001 26.5385 61.0001 20.7955C61 12.3866 54.1589 5.5455 45.75 5.5455ZM49.9091 55.3436C49.9091 56.9331 48.6149 58.2274 47.0253 58.2274H13.98C13.2097 58.2274 12.4853 57.9268 11.9397 57.3813C11.3954 56.8357 11.0949 56.1114 11.0962 55.3397L11.1035 49.9091H49.9091V55.3436ZM50.7675 32.2072C50.6943 32.237 50.6253 32.2722 50.5603 32.3142C50.3856 32.4225 50.2421 32.5661 50.1351 32.7312C50.0269 32.8949 49.9537 33.0846 49.9239 33.2876C49.9117 33.3648 49.9077 33.442 49.909 33.5205V47.1363H11.107L11.1248 33.5393C11.1261 33.4635 11.1221 33.3863 11.1113 33.3119C11.0815 33.102 11.0043 32.907 10.8919 32.7378C10.7862 32.5794 10.6482 32.4413 10.4803 32.3357C10.4113 32.2924 10.3381 32.2544 10.2623 32.2232C5.712 30.2334 2.77269 25.7519 2.77269 20.7955C2.77269 13.915 8.36966 8.31819 15.25 8.31819C15.5189 8.31819 15.8027 8.35068 16.0813 8.37265C14.6786 10.8104 13.8636 13.6274 13.8636 16.6364C13.8636 17.4027 14.4837 18.0228 15.25 18.0228C16.0163 18.0228 16.6364 17.4027 16.6364 16.6364C16.6364 8.99235 22.856 2.77269 30.5001 2.77269C38.1441 2.77269 44.3636 8.99235 44.3636 16.6364C44.3636 17.4027 44.9837 18.0228 45.75 18.0228C46.5163 18.0228 47.1364 17.4027 47.1364 16.6364C47.1364 13.6274 46.3214 10.8105 44.9187 8.37265C45.1973 8.35068 45.4811 8.31819 45.75 8.31819C52.6305 8.31819 58.2273 13.9152 58.2273 20.7955C58.2273 25.7344 55.3002 30.2102 50.7675 32.2072Z" fill="white"/>
</svg>

                    <p className='card_item_p card_items'>Лучшие повора</p>
                </div>
                <div className='cards_MaskGroup_items_four'>
                    <svg className='svg_cards_item' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_31_13)">
                            <path d="M29.5081 59.2603C27.9714 59.7961 26.3884 60.1358 24.7824 60.2816C25.9247 59.7146 27.0553 58.9836 28.1582 58.0892C28.5982 57.7325 28.6658 57.0866 28.309 56.6465C27.9521 56.2065 27.3061 56.1391 26.8663 56.4958C24.0464 58.7823 21.5155 59.5849 19.4265 59.6738C21.0107 58.1924 22.9224 55.5022 25.1789 50.8863C25.4277 50.3772 25.2168 49.763 24.7079 49.5143C24.199 49.2658 23.5847 49.4764 23.3359 49.9853C19.9683 56.8736 17.3669 59.224 16.2695 59.2237C16.1961 59.2237 16.1292 59.2132 16.0694 59.1928C15.7029 59.0676 15.469 58.4891 15.3622 58.1552C13.5679 52.5501 18.7646 32.8731 25.6338 23.29L30.2611 16.8348C30.5216 16.4711 30.7827 15.9503 30.9962 15.3687L31.1418 14.9717L31.2092 14.9946L31.0815 15.3977C30.8943 15.9885 30.7821 16.5601 30.7656 17.0074L30.4822 24.7492C30.4616 25.3154 30.9037 25.7911 31.4698 25.8119C31.4826 25.8123 31.4953 25.8126 31.5079 25.8126C32.0572 25.8126 32.512 25.3777 32.5323 24.8243L32.773 18.2475L34.2028 22.3875C34.3494 22.812 34.747 23.0787 35.1722 23.0787C35.2832 23.0787 35.3962 23.0605 35.5071 23.0222C36.0426 22.8373 36.3267 22.2534 36.1418 21.7179L36.0912 21.5716L36.0962 21.5801C36.3889 22.065 37.0191 22.2214 37.5043 21.9285C37.9894 21.6359 38.1455 21.0056 37.8528 20.5205L36.3782 18.0763C36.1057 17.6244 36.0228 17.0716 36.1511 16.5597L38.4701 7.29939C38.6258 6.67823 38.4809 6.03887 38.0729 5.54544C37.6648 5.052 37.0652 4.7897 36.4247 4.8258L30.9985 5.13242C30.2455 5.17509 29.5894 5.63064 29.2861 6.32142L26.2751 13.1853C26.0632 13.6683 25.6596 14.0546 25.1676 14.2451L14.5454 18.3585C9.87266 20.168 6.05115 23.2666 3.49359 27.319C1.11915 31.0813 -0.0873536 35.4826 0.0044128 40.0473C0.0961792 44.612 1.47869 48.9614 4.00248 52.625C6.72087 56.5714 10.664 59.5137 15.4057 61.1339C17.9087 61.9892 20.4538 62.417 22.9709 62.4168C25.4243 62.4168 27.8509 62.0102 30.183 61.1971C30.7179 61.0105 31.0003 60.4256 30.8137 59.8907C30.6272 59.3559 30.0428 59.0734 29.5081 59.2603ZM31.1506 7.17877L36.4611 6.87872L34.6749 14.0113L29.0034 12.0734L31.1506 7.17877ZM5.69229 51.4616C3.39704 48.1296 2.13952 44.1683 2.05596 40.0063C1.97226 35.8442 3.06949 31.8358 5.22895 28.414C7.54977 24.7367 11.0276 21.921 15.2867 20.2718L23.2562 17.1856L18.9277 20.0198C15.6976 22.1349 12.8628 25.2847 10.7296 29.1286C8.76161 32.6749 7.42054 36.7237 6.85106 40.8378C6.77338 41.399 7.16534 41.9168 7.72647 41.9944C7.7742 42.0011 7.82152 42.0042 7.86843 42.0042C8.37253 42.0042 8.81208 41.6323 8.88319 41.1189C10.0163 32.932 14.2958 25.5047 20.0516 21.7359L27.9151 16.5869L23.9668 22.095C20.7157 26.6304 17.4683 33.9389 15.2802 41.6449C13.3751 48.3543 12.6051 54.1181 13.124 57.5207C12.101 56.6533 11.2323 55.5395 10.529 54.1819C9.29416 51.7987 8.62731 48.7449 8.60064 45.3505C8.59613 44.7841 8.13251 44.3242 7.56687 44.333C7.00041 44.3375 6.54486 44.8003 6.54923 45.3669C6.57768 48.9713 7.26641 52.1475 8.51558 54.7214C7.46061 53.7417 6.51313 52.6532 5.69229 51.4616Z" fill="white" />
                            <path d="M48.1502 21.4775C36.1021 21.4775 26.3002 31.2794 26.3002 43.3277C26.3002 55.3757 36.102 65.1776 48.1502 65.1776C60.1984 65.1776 70.0002 55.3757 70.0002 43.3277C70 31.2794 60.1982 21.4775 48.1502 21.4775ZM48.1502 63.1261C37.2333 63.1261 28.3516 54.2446 28.3516 43.3275C28.3516 32.4105 37.2331 23.5288 48.1502 23.5288C59.0672 23.5288 67.9487 32.4105 67.9487 43.3275C67.9487 54.2446 59.0671 63.1261 48.1502 63.1261Z" fill="white" />
                            <path d="M48.1502 25.6079C38.3796 25.6079 30.4306 33.5569 30.4306 43.3274C30.4306 53.0979 38.3796 61.0468 48.1502 61.0468C57.9208 61.0468 65.8699 53.0979 65.8699 43.3274C65.8699 33.5569 57.9208 25.6079 48.1502 25.6079ZM48.1502 58.9956C39.5107 58.9956 32.482 51.9669 32.482 43.3276C32.482 34.6883 39.5107 27.6595 48.1502 27.6595C56.7896 27.6595 63.8184 34.6883 63.8184 43.3276C63.8184 51.9669 56.7896 58.9956 48.1502 58.9956Z" fill="white" />
                            <path d="M48.1502 30.635C41.1515 30.635 35.4577 36.3289 35.4577 43.3276C35.4577 50.3262 41.1515 56.0201 48.1502 56.0201C52.843 56.0201 57.1358 53.4399 59.3532 49.2863C59.6201 48.7866 59.4312 48.1653 58.9315 47.8984C58.4316 47.6315 57.8103 47.8205 57.5436 48.3202C55.6835 51.8045 52.0843 53.9689 48.1502 53.9689C42.2828 53.9689 37.5091 49.1954 37.5091 43.3278C37.5091 37.4602 42.2828 32.6866 48.1502 32.6866C54.0178 32.6866 58.7914 37.4602 58.7914 43.3278C58.7914 43.7019 58.7702 44.0882 58.7285 44.4752C58.6678 45.0384 59.0752 45.5441 59.6384 45.605C60.2013 45.6658 60.7073 45.2583 60.7682 44.6951C60.8177 44.2353 60.8428 43.7753 60.8428 43.3279C60.8427 36.3289 55.1488 30.635 48.1502 30.635Z" fill="white" />
                            <path d="M40.7704 43.3276C40.7704 47.3969 44.0809 50.7075 48.1502 50.7075C52.2195 50.7075 55.5301 47.3969 55.5301 43.3276C55.5301 39.2583 52.2194 35.9478 48.1502 35.9478C44.0811 35.9478 40.7704 39.2583 40.7704 43.3276ZM53.4787 43.3276C53.4787 46.2657 51.0883 48.6561 48.1502 48.6561C45.2122 48.6561 42.8218 46.2657 42.8218 43.3276C42.8218 40.3896 45.2121 37.9992 48.1502 37.9992C51.0884 37.9992 53.4787 40.3895 53.4787 43.3276Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_31_13">
                                <rect width="70" height="70" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='card_item_p card_items'>Свежайшие продукты</p>
                </div>
            </div>
        </div>
    );
};

export default OurCafe;