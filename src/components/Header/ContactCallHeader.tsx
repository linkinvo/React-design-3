import React from 'react'

export default function ContactCallHeader() {
  return (
    <>
         <div className='contactHeader'>
                <div className="elipsCall">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.99329 3.249C2.20417 2.89915 3.36678 1.62917 4.19526 1.66751C4.44311 1.68873 4.66222 1.83798 4.84024 2.01187H4.84092C5.249 2.4117 6.41982 3.92062 6.48555 4.23829C6.64782 5.01739 5.7187 5.46651 6.00284 6.25178C6.72725 8.02428 7.97544 9.27236 9.74879 9.99602C10.5334 10.2808 10.9826 9.35246 11.7618 9.51404C12.0795 9.58045 13.5892 10.7505 13.9884 11.1592V11.1592C14.1616 11.3365 14.3123 11.5563 14.3328 11.8041C14.3636 12.677 13.0148 13.8553 12.7518 14.0059C12.1315 14.4502 11.3222 14.442 10.3356 13.9833C7.58243 12.8379 3.1826 8.52132 2.01588 5.66437C1.56946 4.6833 1.53934 3.86859 1.99329 3.249Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.71027 1.83331C12.1783 2.10731 14.1269 4.05398 14.4043 6.52131" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.71027 4.19531C10.8903 4.42531 11.8123 5.34731 12.0423 6.52731" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='contactGroup'>
                    <span>Контакты:</span>
                    <p>+7(917) 510-57-59</p>
                </div>
            </div>
    </>
  )
}
