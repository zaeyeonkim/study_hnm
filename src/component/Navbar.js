import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아','H&M Home','Sale', '지속가능성'];
    const Navigate = useNavigate();
    const goToLogin = () => {
        Navigate("/login");
    }
  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
            <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"></img>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=>(  
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='search-area'>
                <div className='search-button'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='검색어 입력'></input>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar
