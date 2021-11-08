import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1b537f;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open, setOpen }) => {
    return (
        <StyledMenu className='header__menu' open={open} onClick={() => setOpen(!open)}>
            <a href='#about' className="header__link">О нас</a>
            <a href='#program' className="header__link">Программы</a>
            <a href='#address' className="header__link">Адрес</a>
            <a href='#contact' className="header__link">Контакты</a>
        </StyledMenu>
    );
};

export default RightNav;