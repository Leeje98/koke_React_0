import React from 'react';
// import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './AllCoffee.css';
import all_product from '../components/All_product_list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

// let { id } = all_product();


export default function AllCoffee() {

  return (
    <>
      <section>
        <input type="radio" id='all' name='filter' defaultChecked/>
        <input type="radio" id='sing' name='filter'/>
        <input type="radio" id='bl' name='filter'/>
        <input type="radio" id='de' name='filter'/>

        <div className='label_box'>
          <label for='all' className='btn_all'>모든 커피</label>
          <label for='sing' className='btn_sing'>싱글 오리진</label>
          <label for='bl' className='btn_bl'>블렌드</label>
          <label for='de' className='btn_de'>디카페인</label>
        </div>

        <div className='product_container all_container'>
          {
            all_product.map((value, i) => {
              return (
                <a href={value.link} className='product_box'>
                  
                  <><div className='main_poto'>
                    <img src={`./imags/all_product/${value.productImg}`} alt="이미지" width='280px' />

                    <div className="btnBox">
                      <FontAwesomeIcon className='heart_icon icon' icon={faHeart} />
                      <FontAwesomeIcon className='cart_icon icon' icon={faCartShopping} />
                    </div>
                  </div><div className='text_box'>
                      <h5 className='taste'>{value.taste01} {'&'} {value.taste02}</h5>
                      <h5 className='title'>{value.name}</h5>
                      <p className='price'>{value.price}원 / <span>{value.weight}g</span></p>
                      <div className='logo'>
                        <img src={`./imags/Rostary_logo/${value.logoImg}`} alt="이미지" width='50px' />
                        <p>{value.cafeName}</p>
                      </div>
                    </div></>
                </a>
              )
            })
          }

        </div>

        <div className='product_container sing_container'>
          {
            // eslint-disable-next-line array-callback-return
            all_product.map((value, i) => {
              if (value.id.includes('S')) {
                return (
                  <a href={value.link} className='product_box'>
                    
                    <div className='main_poto'>
                                      <img src={`./imags/all_product/${value.productImg}`} alt="이미지" width='280px'/>
                                      
                                      <div className="btnBox">
                                          <FontAwesomeIcon className='heart_icon icon' icon={faHeart} />
                                          <FontAwesomeIcon className='cart_icon icon' icon={faCartShopping} />
                                      </div>
                                  </div>
                                  
                                  
                                  <div className='text_box'>
                                      <h5 className='taste'>{value.taste01} & {value.taste02}</h5>
                                      <h5 className='title'>{value.name}</h5>
                                      <p className='price'>{value.price}원 / <span>{value.weight}g</span></p>
                                      <div className='logo'>
                                          <img src={`./imags/Rostary_logo/${value.logoImg}`} alt="이미지" width='50px'/>
                                          <p>{value.cafeName}</p>
                                      </div>
                                  </div>
                  </a>
                )
              }
              
            })
          }

        </div>

        <div className='product_container bl_container'>
          {
            // eslint-disable-next-line array-callback-return
            all_product.map((value, i) => {
              if (value.id.includes('B')) {
                return (
                  <a href={value.link} className='product_box'>
                    
                    <div className='main_poto'>
                                      <img src={`./imags/all_product/${value.productImg}`} alt='이미지' width='280px'/>
                                      
                                      <div className="btnBox">
                                          <FontAwesomeIcon className='heart_icon icon' icon={faHeart} />
                                          <FontAwesomeIcon className='cart_icon icon' icon={faCartShopping} />
                                      </div>
                                  </div>
                                  
                                  
                                  <div className='text_box'>
                                      <h5 className='taste'>{value.taste01} &amp; {value.taste02}</h5>
                                      <h5 className='title'>{value.name}</h5>
                                      <p className='price'>{value.price}원 / <span>{value.weight}g</span></p>
                                      <div className='logo'>
                                          <img src={`./imags/Rostary_logo/${value.logoImg}`} alt='이미지' width='50px'/>
                                          <p>{value.cafeName}</p>
                                      </div>
                                  </div>
                  </a>
                )
              }
              
            })
          }

        </div>

        <div className='product_container de_container'>
          {
            // eslint-disable-next-line array-callback-return
            all_product.map((value, i) => {
              if (value.id.includes('D')) {
                return (
                  <a href={value.link} className='product_box'>
                    
                    <div className='main_poto'>
                                      <img src={`./imags/all_product/${value.productImg}`} alt="이미지" width='280px'/>
                                      
                                      <div className="btnBox">
                                          <FontAwesomeIcon className='heart_icon icon' icon={faHeart} />
                                          <FontAwesomeIcon className='cart_icon icon' icon={faCartShopping} />
                                      </div>
                                  </div>
                                  
                                  
                                  <div className='text_box'>
                                      <h5 className='taste'>{value.taste01} & {value.taste02}</h5>
                                      <h5 className='title'>{value.name}</h5>
                                      <p className='price'>{value.price}원 / <span>{value.weight}g</span></p>
                                      <div className='logo'>
                                          <img src={`./imags/Rostary_logo/${value.logoImg}`} alt="이미지" width='50px'/>
                                          <p>{value.cafeName}</p>
                                      </div>
                                  </div>
                  </a>
                )
              }
              
            })
          }

        </div>

















      </section>
    </>
  )
}
