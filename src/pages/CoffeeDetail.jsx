import React from 'react'
import all_product from '../components/All_product_list'
import './CoffeeDetail.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import icon_01 from '../imags/icon/icon_01.png'
import icon_02 from '../imags/icon/icon_02.png'
import icon_03 from '../imags/icon/icon_03.png'
import icon_04 from '../imags/icon/icon_04.png'
import icon_05 from '../imags/icon/icon_05.png'


export default function CoffeeDetail() {
  return (
    <>
    <section className='warp'>
      {
        // eslint-disable-next-line array-callback-return
        all_product.map(function(value, i)  {
          if (value.id.includes('product_01')) {
            return (
              <>
                <div className='nav'>
                  <a href="/">홈</a>
                  <span></span>
                  <a href="/allCoffee">모든 커피</a>
                  <span>&gt;</span> 
                  <a href="/allCoffee/">{value.name}</a>  
                  {/* 연결주소 수정 */}
                </div>

                <div className='outer_container'>

                  <div className="main_container">

                    <div className='product_img'><img src={`../imags/all_product/${value.productImg}`} alt="상품 이미지" /></div>
                    <div className='product_text_inpo'>
                      <FontAwesomeIcon className='fa-quote-left icon' icon={faQuoteLeft} />
                      <p>{value.text_Info}</p>
                      <FontAwesomeIcon className='fa-quote-right icon' icon={faQuoteRight} />
                    </div>
                    <div className="cafe_brand">
                      <div className="logo_box"><img src={`../imags/Rostary_logo/${value.logoImg}`} alt="" /></div>
                      <div className="text_box">{value.cafeName}<span>Roastery's Note</span></div>
                    </div>



                    <div className='info_container'>

                      <div className='box box01'>
                        <div className="img_box">
                          <img src={icon_01} alt="아이콘 이미지" />
                        </div>
                        <div className="text_box">
                          <h4>{value.info_01_t}</h4>
                          <p>{value.info_01_p}</p>
                        </div>
                      </div>

                      <div className='box box02'>
                        <div className="img_box">
                          <img src={icon_02} alt="아이콘 이미지" />
                        </div>
                        <div className="text_box">
                          <h4>{value.info_02_t}</h4>
                          <p>{value.info_02_p}</p>
                        </div>
                      </div>

                      <div className='box box03'>
                        <div className="img_box">
                        <img src={icon_03} alt="아이콘 이미지" />
                        </div>
                        <div className="text_box">
                          <h4>{value.info_03_t}</h4>
                          <p>{value.info_03_p}</p>
                        </div>
                      </div>

                      <div className='box box04'>
                        <div className="img_box" alt='.'>
                          <img src={icon_04} alt="아이콘 이미지" />
                        </div>
                        <div className="text_box">
                          <h4>{value.info_04_t}</h4>
                        </div>
                      </div>

                      <div className='box box05'>
                        <div className="img_box">
                        <img src={icon_05} alt="아이콘 이미지" />
                        </div>
                        <div className="text_box">
                          <h4>{value.info_05_t}</h4>
                          <p>{value.info_05_p}</p>
                        </div>
                      </div>

                      <div className='box06'>
                        <div className="text_box">
                          <h4>{value.info_00}</h4>
                        </div>
                      </div>

                    </div> {/* info_container */}

                    <div className="delivery">
                      <input type="checkbox" id='delivery' />
                      <label htmlFor="delivery" className='delivery_Btn'>배송안내<FontAwesomeIcon className='fa-angle-down' icon={faAngleDown} /></label>

                      <div className="delivery_text_box">
                        <div className="text_box_01">
                          <h5>배송 안내</h5>
                          <p>배송 기간은 결제일로부터 1일 ~ 5일 정도 소요될 수 있습니다. <br />
                          제주도를 포함한 도서산간 지역은 추가 배송일과 추가 배송비 입금 요청이 있을 수 있습니다.</p>
                        </div>
                        <div className="text_box_02">
                          <h5>교환/반품/환불</h5>
                          <p>교환 및 반품은 상품 수령일로부터 7일 이내에 코케 고객센터(070-4647-1868)로 접수해 주세요. <br />
                              원두(드립백 포함)는 신선 제품입니다. 고객의 변심에 의한 교환 및 반품은 불가합니다. <br />
                              분쇄 옵션 선택 실수로 인한 교환 및 반품은 불가합니다. <br />
                              제품 하자가 있는 경우 전액이 환불됩니다 (반품 배송비 포함)</p>
                        </div>
                      </div>
                    </div>


                  </div>  {/* main_container */}

                  <aside>

                  <section className='order_container'>
                    <h2>{value.name}</h2>
                    <h3>{value.taste01} & {value.taste02}</h3>
                    <h4>{value.price}원  <span>/ {value.weight}g</span></h4>
                    <p><span>한번만 구매</span>시 제주 3,000원, 도서지역 3000원 추가</p>
                    <div className='benefit'>
                      지금 구독 시작하면 <br /><p>3,000원 즉시 할인·무료교환·무료배송</p>
                    </div>
                    <div className="been_weight">
                      <h4>원두 용량</h4>
                      <p>로스터리마다 용량이 조금씩 다를 수 있습니다.</p>
                      <input type="radio" id='g_200' name='weight' />
                      <input type="radio" id='g_400' name='weight' />
                      <label htmlFor="g_200" className='label_200'>200g</label>
                      <label htmlFor="g_400" className='label_400'>400g</label>
                    </div>
                    <div className="crush">
                      <input type="radio" id='crush_o' name='crush' />
                      <div className="crush_box01">
                        <h4>원두 갈아드릴까요?</h4>
                        <input type="radio" id='crush_x' name='crush' />
                        <label htmlFor="crush_x" className='label_crush_x'><span>그대로 주세요</span><br />분쇄하지 않고</label>
                        <label htmlFor="crush_o" className='label_crush_o'><span>갈아주세요</span><br />분쇄도 고르기 ▾</label>
                      </div>
                      <div className="crush_box02">
                        <h4>어떻게 갈아드릴까요?</h4>
                        <input type="radio" id='crush_01' name='Degree' />
                        <input type="radio" id='crush_02' name='Degree' />
                        <input type="radio" id='crush_03' name='Degree' />
                        <input type="radio" id='crush_04' name='Degree' />
                        <input type="radio" id='crush_05' name='Degree' />
                        <label htmlFor="crush_01" className='Degree_01'>커피메이커</label>
                        <label htmlFor="crush_02" className='Degree_02'>에스프레소머신</label>
                        <label htmlFor="crush_03" className='Degree_03'>프렌치프레스</label>
                        <label htmlFor="crush_04" className='Degree_04'>핸드드립</label>
                        <label htmlFor="crush_05" className='Degree_05'>모카포트</label>
                      </div>
                    </div>
                    <div className="cycle">
                      <input type="radio" id='cycle_o' name='cycle_c' />
                      <div className="cycle_box01">
                        <h4>어떻게 구매하시겠어요?</h4>
                        <input type="radio" id='cycle_x' name='cycle_c' />
                        <label htmlFor="cycle_x" className='label_cycle_x'>한번만 구매</label>
                        <label htmlFor="cycle_o" className='label_cycle_o'>구독하기</label>
                      </div>
                      <div className="cycle_box02">
                        <h4>어떤 주기로 보내드릴까요?</h4>
                        <input type="radio" id='cycle_01' name='cycle' />
                        <input type="radio" id='cycle_02' name='cycle' />
                        <input type="radio" id='cycle_03' name='cycle' />
                        <input type="radio" id='cycle_04' name='cycle' />
                        <label htmlFor="cycle_01" className='cycle_01'>매주</label>
                        <label htmlFor="cycle_02" className='cycle_02'>2주</label>
                        <label htmlFor="cycle_03" className='cycle_03'>3주</label>
                        <label htmlFor="cycle_04" className='cycle_04'>4주</label>
                      </div>
                    </div>
                    <div className="order_box">
                      <button className="order">주문하기</button>
                      <button className="cart">장바구니</button>
                    </div>

                  </section>

                  </aside>

                </div>
              </>
            ) //return
          }
        })
      }
    </section>
    </>
  )
}
