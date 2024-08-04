import React from 'react'
import "./Header.scss"
import logo from "../../../public/assets/samsung-logo.png"
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";


const Header = ({items, item}) => {
  return (
    <div className='container'>
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
            <div className="header__collections">
            <ul className='header__collection'>
            {
                items?.map((li, inx) => (
                <li className='header__item' key={inx}>
                    <a href="#">
                        <span>
                            {li}
                        </span>
                    </a>
                </li>
                ))
            }
            </ul>
            <ul className='header__collection'>
            {
                item?.map((li, inx) => (
                <li className='header__item' key={inx}>
                    <a href="#">
                        <span>
                            {li}
                        </span>
                    </a>
                </li>
                ))
            }
            </ul>
            </div>
            <div className="header__icons">
                <FiSearch />
                <BsCart2 />
                <HiOutlineUser />
            </div>
        </div>
    </div>
  )
}

export default Header
