import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Navbar from './component/Navbar';
import Login from './page/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품페이지 / 로그인 / 상품상세페이지
// 2. 상품 상세 페이지에서 디테일 눌렀으나 로그인이 안되면 로그인페이지가 먼저 나온다. (로그인되있다면 그대로 디테일페이지)
// 3. 로그아웃을 클릭하면 로그아웃
// 4. 로그인 <-> 로그아웃 버튼 스위칭
// 5. 상품 검색
function App() {
  const [authenticate, setAuthenticate] = useState(false) //true 로그인, false 안됨
  useEffect(() => {
    console.log("a", authenticate);
  },[])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
