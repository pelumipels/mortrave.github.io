import React from 'react';
import '../styles/Footer.css';
// import Strokes from './Strokes';
import Logo from './Logo';
import ImageLogo2 from '../assets/IMG_2529 3.svg';


function Footer() {

return (
    <div className='footer'>
        <div className='overlay'>
            <Logo logo='flogo' LogoImage={ImageLogo2} />
            <div className='footerText'>Your go-to for planning and executing projects in Africa from anywhere in the world</div>
            <div className='twoFootSect'>
              <div className='footerSection'>
                <div className='footerHeading'>Links</div>
                <ul>
                    <li><span>Terms of Service</span></li>
                    <li><span>Privacy Policy</span></li>
                    <li><span>Cookies Policy</span></li>
                </ul>
              </div>
              <div className='footerSection'>
                <div className='footerHeading'>Contact</div>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M18.1042 11.2396L15.8125 8.94792C15.5208 8.65625 15.4375 8.25 15.5521 7.88542C15.9375 6.71875 16.1458 5.46875 16.1458 4.16667C16.1458 3.59375 16.6146 3.125 17.1875 3.125H20.8333C21.4062 3.125 21.875 3.59375 21.875 4.16667C21.875 13.9479 13.9479 21.875 4.16667 21.875C3.59375 21.875 3.125 21.4062 3.125 20.8333V17.1979C3.125 16.625 3.59375 16.1562 4.16667 16.1562C5.45833 16.1562 6.71875 15.9479 7.88542 15.5625C8.25 15.4375 8.66667 15.5312 8.94792 15.8125L11.2396 18.1042C14.1875 16.5937 16.6042 14.1875 18.1042 11.2396Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </svg>
                      +234 904 042 6882
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M20.8334 4.1665H4.16671C3.02087 4.1665 2.09379 5.104 2.09379 6.24984L2.08337 18.7498C2.08337 19.8957 3.02087 20.8332 4.16671 20.8332H20.8334C21.9792 20.8332 22.9167 19.8957 22.9167 18.7498V6.24984C22.9167 5.104 21.9792 4.1665 20.8334 4.1665ZM20.8334 8.33317L12.5 13.5415L4.16671 8.33317V6.24984L12.5 11.4582L20.8334 6.24984V8.33317Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </svg>
                    mortravefinance@gmail.com
                  </li>
                  <li>
                    <ul className='footerSocialMedia'  id='contact-us'>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                          fill="none"
                          >
                          <path
                            d="M22.4302 7.40791C22.446 7.62998 22.446 7.8521 22.446 8.07417C22.446 14.8476 17.2906 22.6522 7.86802 22.6522C4.96509 22.6522 2.26841 21.8114 0 20.3521C0.412451 20.3997 0.808984 20.4155 1.2373 20.4155C3.63257 20.4155 5.83755 19.6065 7.59834 18.2265C5.3458 18.1789 3.45811 16.7036 2.80771 14.6731C3.125 14.7207 3.44224 14.7524 3.77539 14.7524C4.2354 14.7524 4.69546 14.689 5.12373 14.578C2.77603 14.102 1.01519 12.0399 1.01519 9.54941V9.48599C1.69727 9.8667 2.49048 10.1046 3.33115 10.1363C1.95107 9.21626 1.04692 7.64585 1.04692 5.86919C1.04692 4.91743 1.30068 4.04497 1.74487 3.28354C4.26709 6.39268 8.05835 8.4231 12.3096 8.64522C12.2303 8.2645 12.1827 7.86797 12.1827 7.47139C12.1827 4.64775 14.4669 2.34766 17.3064 2.34766C18.7816 2.34766 20.1141 2.96631 21.05 3.96567C22.208 3.7436 23.3184 3.31528 24.302 2.72837C23.9212 3.91812 23.1122 4.91748 22.0494 5.55195C23.0805 5.44097 24.0799 5.15537 24.9999 4.75884C24.302 5.77402 23.4295 6.67817 22.4302 7.40791Z"
                            fill="white"
                            fillOpacity="0.7"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                          fill="none"
                          >
                          <path
                            d="M18.3174 14.0625L19.0117 9.53809H14.6704V6.60205C14.6704 5.36426 15.2769 4.15771 17.2212 4.15771H19.1948V0.305664C19.1948 0.305664 17.4038 0 15.6914 0C12.1162 0 9.7793 2.16699 9.7793 6.08984V9.53809H5.80518V14.0625H9.7793V25H14.6704V14.0625H18.3174Z"
                            fill="white"
                            fillOpacity="0.7"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                          fill="none"
                          >
                          <path
                            d="M12.5049 6.88452C9.39941 6.88452 6.89453 9.3894 6.89453 12.4949C6.89453 15.6003 9.39941 18.1052 12.5049 18.1052C15.6104 18.1052 18.1152 15.6003 18.1152 12.4949C18.1152 9.3894 15.6104 6.88452 12.5049 6.88452ZM12.5049 16.1423C10.498 16.1423 8.85742 14.5066 8.85742 12.4949C8.85742 10.4832 10.4932 8.84741 12.5049 8.84741C14.5166 8.84741 16.1523 10.4832 16.1523 12.4949C16.1523 14.5066 14.5117 16.1423 12.5049 16.1423ZM19.6533 6.65503C19.6533 7.38257 19.0674 7.96362 18.3447 7.96362C17.6172 7.96362 17.0361 7.37769 17.0361 6.65503C17.0361 5.93237 17.6221 5.34644 18.3447 5.34644C19.0674 5.34644 19.6533 5.93237 19.6533 6.65503ZM23.3691 7.98315C23.2861 6.23022 22.8857 4.67749 21.6016 3.39819C20.3223 2.1189 18.7695 1.71851 17.0166 1.63062C15.21 1.52808 9.79492 1.52808 7.98828 1.63062C6.24023 1.71362 4.6875 2.11401 3.40332 3.39331C2.11914 4.67261 1.72363 6.22534 1.63574 7.97827C1.5332 9.78491 1.5332 15.2 1.63574 17.0066C1.71875 18.7595 2.11914 20.3123 3.40332 21.5916C4.6875 22.8708 6.23535 23.2712 7.98828 23.3591C9.79492 23.4617 15.21 23.4617 17.0166 23.3591C18.7695 23.2761 20.3223 22.8757 21.6016 21.5916C22.8809 20.3123 23.2812 18.7595 23.3691 17.0066C23.4717 15.2 23.4717 9.78979 23.3691 7.98315ZM21.0352 18.9451C20.6543 19.9021 19.917 20.6394 18.9551 21.0251C17.5146 21.5964 14.0967 21.4646 12.5049 21.4646C10.9131 21.4646 7.49023 21.5916 6.05469 21.0251C5.09766 20.6443 4.36035 19.907 3.97461 18.9451C3.40332 17.5046 3.53516 14.0867 3.53516 12.4949C3.53516 10.9031 3.4082 7.48022 3.97461 6.04468C4.35547 5.08765 5.09277 4.35034 6.05469 3.9646C7.49512 3.39331 10.9131 3.52515 12.5049 3.52515C14.0967 3.52515 17.5195 3.39819 18.9551 3.9646C19.9121 4.34546 20.6494 5.08276 21.0352 6.04468C21.6064 7.48511 21.4746 10.9031 21.4746 12.4949C21.4746 14.0867 21.6064 17.5095 21.0352 18.9451Z"
                            fill="white"
                            fillOpacity="0.7"
                          />
                        </svg>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
        </div>
  </div>
)
}

export default Footer;
