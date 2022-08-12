import React from 'react'
import all_rostery from '../components/All_Rostery_list'
import './RosteryDetail.css'
import all_product from '../components/All_product_list';
import { Link } from 'react-router-dom';

import './AllCoffee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";


export default function RosteryDetail() {
  return (
    <>
      <section className='wrap'>
      
            
       {
        // eslint-disable-next-line array-callback-return
        all_rostery.map((value, i) => {
           if (value.id.includes('cafe01')) {

          return (
            <>
            <div className='nav'>
              {/* <a href="/allRostery">로스터리</a> */}
              <Link to="/allRostery">로스터리</Link>
              <span>{'>'}</span> 
              <a href="/allRostery/">{value.cafeName}</a>  
              {/* 연결주소 수정 */}
            </div>

            <div className='cafe_poto_box'>
              <div className="poto_01_imgbox"><img src={`../imags/poto_img/${value.cafe_poto_01}`} alt="로스터리 이미지" width='280px'/></div>
              <div className="poto_02_imgbox"><img src={`../imags/poto_img/${value.cafe_poto_02}`} alt="로스터리 이미지" width='280px'/></div>
              <div className="poto_03_imgbox"><img src={`../imags/poto_img/${value.cafe_poto_03}`} alt="로스터리 이미지" width='280px'/></div>

              <div className="logo_imgbox"><img src={`../imags/Rostary_logo/${value.logoImg}`} alt="로스터리 로고" /></div>
            </div>

            <div className='cafe'>
              <h3>{value.cafeName}</h3>
              <div><p>{value.about}</p></div>
              <div className='store_nav'>
                <div className='rocation'>
                  <h4>위치</h4>
                  <div className='rocation_info'>{value.rocation}</div>
                </div>
                <div className='sns'>
                  <h4>인스타그램</h4>
                  <div className='sns_info'>{value.sns_p}</div>
                </div>
              </div>
            </div>


            <h3 className='product_title'>
              <p><span>{value.cafeName}</span>에서 판매하고 있는 원두</p>
              <button>사장님이시라면,  코케 비즈 이용하기 →</button>
            </h3>
            <div className='product_list'>
                 {
                  // eslint-disable-next-line array-callback-return
                  all_product.map((value, i) => {
                    if(value.cafeName.includes('나무사이로')) {
                      return (
                        <>
                          <a href={value.link} className='product_box'>
                          {/* <Route path="/all_product:id"> */}
                            <div className='main_poto'>
                                              <img src={`../imags/all_product/${value.productImg}`} alt="상품 이미지" width='280px'/>
                                              
                                              <div className="btnBox">
                                                  <FontAwesomeIcon className='heart_icon icon' icon={faHeart} />
                                                  <FontAwesomeIcon className='cart_icon icon' icon={faCartShopping} />
                                              </div>
                                          </div>
                                          
                                          
                                          <div className='text_box'>
                                              <h5 className='taste'>{value.taste01} {'&'} {value.taste02}</h5>
                                              <h5 className='title'>{value.name}</h5>
                                              <p className='price'>{value.price}원 / <span>{value.weight}g</span></p>
                                              <div className='logo'>
                                                  <img src={`../imags/Rostary_logo/${value.logoImg}`} alt='이미지' width='50px'/>
                                                  <p>{value.cafeName}</p>
                                              </div>
                                          </div>
                          {/* </Route> */}
                          </a>
                        </>
                      )
                    }
                  })
                 }
            </div>
            
            </>
          )
          }  //if
        })
       }

      </section>
    </>
  )
}
