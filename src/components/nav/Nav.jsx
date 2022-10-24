import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai';
import { FaKeyboard } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { TbCSharp } from 'react-icons/tb';

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiFillHome /></a>
      <a href="#about"><BsFillPersonFill /></a>
      <a href="#projects"><FaKeyboard /></a>
      <a href="#experiences"><MdWork /></a>
      <a href="#skills"><TbCSharp /></a>
    </nav>
  )
}

export default Nav