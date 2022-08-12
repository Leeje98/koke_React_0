
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import AllCoffee from './pages/AllCoffee';
import CoffeeDetail from './pages/CoffeeDetail';
import Main from './pages/Main';
import Rostery from './pages/Rostery';
import Subscription from './pages/Subscription';
import RosteryDetail from './pages/RosteryDetail';


function App() {

  const navigate = useNavigate()

  function hiddenEvent() {
    document.querySelector('.top_banner').style.display = 'none'
  }

  return (
    <div className='App'>

    <header>
      <Navbar  variant="dark" className='navbar' fixed="top" >
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>
            <img
              alt=""
              src="../imags/koke_logo.png"
              width="120"
              height="auto"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link >내 입맛 커피</Nav.Link>
            <Nav.Link onClick={() => {navigate('/allCoffee')}}>모든 커피</Nav.Link>
            <Nav.Link onClick={() => {navigate('/allRostery')}}>로스터리</Nav.Link>
            <Nav.Link onClick={() => {navigate('/subscription')}}>구독</Nav.Link>
            <Nav.Link >코케 비즈</Nav.Link>
          </Nav>
          <Nav className="me-gnb">
            <Nav className='gnb_btn'>로그인</Nav>
            <Nav className='gnb_btn join_btn'>회원가입</Nav>
          </Nav>
        </Container>
      </Navbar>

      <div className='top_banner'>
        <div className='top_banner_inner'>
          <p>구독 시작하면 3,000원 즉시 할인 · 무료 교환 · 무료 배송</p>
          <a href='#!'>내 취향 커피 추천받기 <FontAwesomeIcon icon={faAngleRight} /></a>

          <FontAwesomeIcon icon={faXmark} className='top_banner_close' onClick={hiddenEvent}/>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/allCoffee' element={<AllCoffee />} />
        <Route path='/allCoffee/coffeeDetail' element={<CoffeeDetail />} />
        <Route path='/allCoffee/coffeeDetail/:id' element={<CoffeeDetail />} />
        <Route path='/allRostery' element={<Rostery />} />
        <Route path='/allRostery/rosteryDetail' element={<RosteryDetail />} />
        <Route path='/allRostery/rosteryDetail/:id' element={<RosteryDetail />} />
        <Route path='/subscription' element={<Subscription />} />
      </Routes>
      
    </header>




    <footer>

      <section className='footer_main'>
        <div className='footer_main_inner'>
          <div className='box_01'>
            <h5>cs센터</h5>
            <h4>070-4647-1868</h4>
            <p>오전 10:00 ~ 오후 7:00</p>
            <p>점심시간 : 오후 12:00 ~ 2:00</p>
            <p>토 / 일 / 공휴일 휴무</p>
          </div>
          <div className='box_02'>
            <h5>1:1 문의하기</h5>
            <p>결제 및 환불 등 상품에 대한 궁금한 점은 아래</p>
            <p>버튼을 통해 바로 시작하세요.</p>
            <button>1:1 문의하기</button>
          </div>
          <div className='box_03'>
            <div className='box_03_1'>
              <h5>배송 / 택배</h5>
              <p>택배 : 로젠택배 : 1588-9988</p>
              <p>월~금 08:00~18:00 / 토 09:00~13:00</p>
            </div>
            <div className='box_03_2'>
              <h5>교환 / 반품</h5>
              <p>주소:서울 강남구 테헤란로2길 27 페스트파이브 빌딩 9층 915호</p>
              <p>고객센터로 문의해주세요.</p>
            </div>
          </div>
        </div>{/* footer_main_inner */}
        <div className='footer_lnb'>
          {/* <Nav className="me-auto"> */}
          <Nav className="footer_lnb_box">
            <Nav.Link className='footerNav footerNav_01' onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link className='footerNav' >내 입맛 커피</Nav.Link>
            <Nav.Link className='footerNav' onClick={() => {navigate('/allCoffee')}}>모든 커피</Nav.Link>
            <Nav.Link className='footerNav' onClick={() => {navigate('/allRostery')}}>로스터리</Nav.Link>
            <Nav.Link className='footerNav' onClick={() => {navigate('/subscription')}}>구독</Nav.Link>
            <Nav.Link >코케 비즈</Nav.Link>
          </Nav>
        </div>
      </section>

      <section className='footer_text'>
        <div className='footer_text_inner'>
          <div className='text_box'>
                (주)컨슈머브릿지 대표: 신재현, 박성환 | 개인정보보호책임자: 신재현 | 사업자등록번호: 713-86-01467 | 통신판매업신고번호: 제2021-서울강남-02469호<br/>
                사업장소재지: 서울 강남구 테헤란로2길 27 패스트파이브 빌딩 9층 915호<br/>
                주식회사 컨슈머브릿지는 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매중개자로서 중개하는 통신판매에 관하여서는 <br/>
                통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </div>
          <a className='logo_box' href='/'>
            <img
              alt=""
              src="../imags/koke_logo.png"
            />
          </a>
        </div>
      </section>
      <section className='copywriter'>
        © 2021 Consumer Bridge, Inc. All rights reserved
      </section>

    </footer>
    
    </div>//App
  );
}

export default App;
