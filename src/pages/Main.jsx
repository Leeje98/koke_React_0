import React from 'react';
import './Main.css';
import MainVisual from '../components/MainVisual';
import rostery from '../components/Rostery_list';
import main_best from '../components/MainBest_list';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";






export default function Main() {
  return (
    <>

        <section className='visual_main'>
            <MainVisual />
        </section>




        <section className='mainBest'>
            
            <h2>이번달 베스트 원두</h2>
            <h3>최근 한 달 동안<br />가장 많이 사랑받은 원두를 소개합니다.</h3>

            <div className='mainBest_container container'>
                {
                    main_best.map((value, i) => {
                        return (
                            <a className='col-md-3 best_product'  href={value.link}> 
                                <div className='main_poto'>
                                    <img src={`./imags/main/pd_${value.imgNumber}.png`} width='280px'/>
                                    
                                    <div className="btnBox">
                                        <FontAwesomeIcon className='heart_icon icon' icon={faHeart} />
                                        <FontAwesomeIcon className='cart_icon icon' icon={faCartShopping} />
                                    </div>
                                </div>
                                
                                
                                <div className='text_box'>
                                    <h5 className='taste'>{value.taste01} & {value.taste02}</h5>
                                    <h5 className='title'>{value.title}</h5>
                                    <p className='price'>{value.price}원 / <span>{value.weight}g</span></p>
                                    <div className='logo'>
                                        <img src={`./imags/main/logo_${i+1}.${value.logoimgtype}`} width='50px'/>
                                        <p>{value.cafeName}</p>
                                    </div>
                                </div>
                            </a>
                            // </Link>
                        )
                    })
                }
            </div> 

            <button className='bestBtn' onClick={() => {Navigate('/allCoffee/coffeeDetail')}}>커피 맛집 원두 모두 보기</button>

        </section>

        <section className='eventBanner'>
            
            <h2>내 입맛에 꼭 맞는 커피로 추천받고 구독하세요</h2>
            <h3>내 취향에 딱 맞는 원두를 추천해요.<br />구독을 시작하고 항상 무료 배송으로 받아보세요.</h3>

            <button>내 커피 취향 테스트 하러 가기</button>

        </section>
            
                
        <section className='mainRostery'>
            <h2>한 번쯤 마셔보고 싶었던<br />커피 맛집 로스터리 모든 원두</h2>
            <h3>데일리 커피에서 디카페인까지.<br />다양한 취향을 가진 사람들이 구독중인 코케</h3>

            <div className='Rostery_container container'>
                {
                    rostery.map((value, i) => {
                        return (
                            <a className='col-md-3'  href={value.link}> 
                                <div className='main_poto'>
                                    <img src={`./imags/main/roastery_${i+1}.jpg`} width='280px'/>
                                </div>
                                
                                
                                <div className='text'>
                                    <div className='logo'><img src={`./imags/main/logo_${i+1}.jpg`} width='50px'/></div>

                                    <h5>{value.title}</h5>
                                    <p>/ {value.map}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div> 

            <button onClick={() => {Navigate('/rosteryDetail')}}>커피 맛집 로스터리 전체 보기</button>



        </section> 
        



            
        









        {/* <div className='visual-main'>
            <img src='/images/visual_main_01.jpg' />
        </div>

        <div className='container'>
            {
                data.map((value, i) => {
                return (
                    <div className='col-md-3'> 
                    <img src={`/images/best_0${i+1}.png`} width='280px'/>
                    <h3>{value.title}</h3>
                    <p>{value.price}</p>
                    </div>
                )
                })
            }
        </div> */}


    </>
  )
}