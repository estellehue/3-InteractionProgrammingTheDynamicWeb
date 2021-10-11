import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import HeaderView from '../view/HeaderView';

const Header = () => {
    const { currentUser } = useContext(AuthContext);

    return currentUser ? (
        <HeaderView/>
    ) : (
        <div></div>
    );
}

export default Header;