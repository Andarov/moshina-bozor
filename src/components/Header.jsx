import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import phone from '../img/phone.svg'
const Header = () => {
  return (
    <header className='py-5'>
        <div className="flex justify-between items-center w-full max-w-base mx-auto px-5">
            <Link className='text-[28px] text-main font-bold leading-9' to='/'>
                <h1>AвтоЭксперт</h1>
            </Link>

            <nav>
                <ul className='flex items-center space-x-10 text-lg font-medium text-111 leading-7'>
                    <li>
                        <NavLink to='/catalog'>Каталог</NavLink>
                    </li>
                    <li>
                        <NavLink to='/catalog'>Акции</NavLink>
                    </li>
                    <li>
                        <NavLink to='/catalog'>Кредит</NavLink>
                    </li>
                    <li>
                        <NavLink to='/catalog'>Контакты</NavLink>
                    </li>
                </ul>
            </nav>

            <a className='inline-flex items-center' href="tel:+998881690033">
                <img className='mr-2' src={phone} alt="phone icon" />
                <span className='text-[20px] font-bold leading-[30px] text-111'>99888 169-00-33</span>
            </a>
        </div>
    </header>
  )
}

export default Header